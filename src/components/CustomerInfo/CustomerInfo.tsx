// CustomerInfo.tsx
import React from "react";
import { Form, Input, Space, Typography } from "antd";

const { Title } = Typography;

const CustomerInfo: React.FC = () => {
  return (
    <div style={{ width: "100%", marginBottom: "20px" }}>
      <Title level={3}>Informações do Cliente</Title>
      <Form layout="vertical">
        <Space direction="vertical" size="middle" style={{ width: "100%" }}>
          <Form.Item label="Nome">
            <Input placeholder="Nome completo" />
          </Form.Item>
          <Form.Item label="E-mail">
            <Input placeholder="E-mail" />
          </Form.Item>
          <Form.Item label="Endereço">
            <Input placeholder="Endereço de entrega" />
          </Form.Item>
        </Space>
      </Form>
    </div>
  );
};

export default CustomerInfo;
