import React from "react";
import { Form, Input, Button, Space } from "antd";
import { useForm, Controller } from "react-hook-form";
import { CheckoutFormData } from "./CheckoutSchema"; 

import { CheckoutSchema } from "./CheckoutSchema"; 
import { yupResolver } from "@hookform/resolvers/yup";

const CheckoutForm: React.FC = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<CheckoutFormData>({
    resolver: yupResolver(CheckoutSchema),
  });

  const onSubmit = (data: CheckoutFormData) => {
    console.log("Pagamento realizado", data);
  };

  return (
    <Form onFinish={handleSubmit(onSubmit)} layout="vertical">
      <Space direction="vertical" size="middle" style={{ width: "100%" }}>
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

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Finalizar Compra
          </Button>
        </Form.Item>
      </Space>
    </Form>
  );
};

export default CheckoutForm;
