import React from "react";
import { Form, Input, Select, Space, Typography } from "antd";
import useCheckout from "../../hooks/useCheckout";
import type { CustomerInfo } from "../../context/Checkout/CheckoutContext.types";

const { Title } = Typography;
const { Option } = Select;


const CustomerInfo: React.FC = () => {

  const { customerInfo, setCustomerInfo } = useCheckout();

  const defaultCustomerInfo: CustomerInfo = {
    document: { type: "", number: "" },
    firstName: "",
    lastName: "",
    address: {
      city: "",
      street: "",
      number: "",
      country: "",
      state: "",
      neighborhood: "",
    },
  };
  

  const handleChange = (field: string, value: string) => {
    setCustomerInfo((prev) => {
      const current = prev ?? defaultCustomerInfo; // Garantimos que current nunca será null
  
      if (field.startsWith("document.")) {
        return {
          ...current,
          document: {
            ...current.document,
            [field.split(".")[1]]: value,
          },
        };
      }
  
      if (field.startsWith("address.")) {
        return {
          ...current,
          address: {
            ...current.address,
            [field.split(".")[1]]: value,
          },
        };
      }
  
      // Retorno sempre com o tipo `CustomerInfo` completo
      return { 
        ...current, 
        [field]: value 
      };
    });
  };
  

  return (
    <div style={{ width: "100%", marginBottom: "20px" }}>
      <Title level={3}>Seus dados</Title>
      <Form layout="vertical">
        <Space direction="vertical" size="middle" style={{ width: "100%" }}>
  
          <Form.Item label="Nome">
            <Input 
              placeholder="Nome" 
              value={customerInfo?.firstName || ""}
              onChange={(e) => handleChange("firstName", e.target.value)}
              />
          </Form.Item>

          <Form.Item label="Sobrenome">
            <Input 
              placeholder="Sobrenome" 
              value={customerInfo?.lastName || ""}
              onChange={(e) => handleChange("lastName", e.target.value)}
              />
          </Form.Item>
 
          <Form.Item label="Tipo de Documento">
            <Select placeholder="Selecione o tipo de documento">
              <Option value="cpf">CPF</Option>
              <Option value="cnpj">CNPJ</Option>
            </Select>
          </Form.Item>

          
          <Form.Item label="Número do Documento">
            <Input 
              placeholder="Número do documento"
              value={customerInfo?.document?.number || ""}
              onChange={(e) => handleChange("document.number", e.target.value)}
              />
          </Form.Item>

          <Form.Item label="Rua">
            <Input 
              placeholder="Rua" 
              value={customerInfo?.address?.street || ""}
              onChange={(e) => handleChange("address.street", e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Número">
            <Input 
              placeholder="Número" 
              value={customerInfo?.address?.number || ""}
              onChange={(e) => handleChange("address.number", e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Bairro">
            <Input 
              placeholder="Bairro"
              value={customerInfo?.address?.neighborhood || ""}
              onChange={(e) => handleChange("address.neighborhood", e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Cidade">
            <Input 
              placeholder="Cidade" 
              value={customerInfo?.address?.city || ""}
              onChange={(e) => handleChange("address.city", e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Estado">
            <Input 
              placeholder="Estado" 
              value={customerInfo?.address?.state || ""}
              onChange={(e) => handleChange("address.state", e.target.value)}
            />
          </Form.Item>
          <Form.Item label="País">
            <Input 
              placeholder="País" 
              value={customerInfo?.address?.country || ""}
              onChange={(e) => handleChange("address.country", e.target.value)}
            />
          </Form.Item>
        </Space>
      </Form>
    </div>
  );
};

export default CustomerInfo;
