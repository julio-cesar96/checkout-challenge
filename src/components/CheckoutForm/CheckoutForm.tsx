import React, { useEffect } from "react";
import { Form, Input, Space, Typography, Select } from "antd";
import { useForm, Controller } from "react-hook-form";
import { CheckoutFormData } from "../../schemas/CheckoutSchema"; 

import { CheckoutSchema } from "../../schemas/CheckoutSchema"; 
import { yupResolver } from "@hookform/resolvers/yup";
import useCheckout from "../../hooks/useCheckout";

const { Title } = Typography;
const { Option } = Select;

const CheckoutForm: React.FC = () => {

  const { setPaymentInfo } = useCheckout();

  const { control, formState: { errors }, watch } = useForm<CheckoutFormData>({
    resolver: yupResolver(CheckoutSchema),
  });

  const cardNumber = watch("cardNumber");
  const expirationDate = watch("expirationDate");
  const installments = watch("installments");

  useEffect(() => {
    setPaymentInfo({
      type: "card",
      card: {
        firstDigits: cardNumber?.substring(0, 4) || "",
        lastDigits: cardNumber?.slice(-4) || "",
        expirationDate: expirationDate || "",
        installments: Number(installments || "0"),
      },
    });
  }, [cardNumber, expirationDate, installments, setPaymentInfo])

  return (
    <Form layout="vertical">
      <Space direction="vertical" size="middle" style={{ width: "100%" }}>
      <Title level={3}>Seus dados</Title>
        <Form.Item
          label="Número do Cartão"
          validateStatus={errors.cardNumber ? "error" : ""}
          help={errors.cardNumber?.message}
        >
          <Controller
            name="cardNumber"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Número do cartão"
                maxLength={19}
              />
            )}
          />
        </Form.Item>

        <Form.Item
          label="Data de Validade (MM/YY)"
          validateStatus={errors.expirationDate ? "error" : ""}
          help={errors.expirationDate?.message}
        >
          <Controller
            name="expirationDate"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Data de validade (MM/YY)"
              />
            )}
          />
        </Form.Item>

        <Form.Item
          label="CVV"
          validateStatus={errors.cvv ? "error" : ""}
          help={errors.cvv?.message}
        >
          <Controller
            name="cvv"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="CVV"
                maxLength={3}
              />
            )}
          />
        </Form.Item>

        <Form.Item
          label="Número de Parcelas"
          validateStatus={errors.installments ? "error" : ""}
          help={errors.installments?.message}
        >
          <Controller
            name="installments"
            control={control}
            render={({ field }) => (
              <Select {...field} placeholder="Escolha o número de parcelas">
                {Array.from({ length: 12 }, (_, i) => i + 1).map((parcelas) => (
                  <Option key={parcelas} value={parcelas.toString()}>
                    {parcelas}x
                  </Option>
                ))}
              </Select>
            )}
          />
        </Form.Item>

      </Space>
    </Form>
  );
};

export default CheckoutForm;
