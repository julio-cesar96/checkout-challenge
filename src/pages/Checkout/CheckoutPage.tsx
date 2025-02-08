import { Layout, Typography, Space } from "antd"; 
import CheckoutForm from "./CheckoutForm";

const { Title } = Typography;
const { Content } = Layout;

const CheckoutPage: React.FC = () => {
  return (
    <Layout style={{ minHeight: "100vh", padding: "20px" }}>
      <Content
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          background: "#fff",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          padding: "30px",
        }}
      >
        <Space direction="vertical" style={{ width: "100%" }}>
          <Title level={2} style={{ textAlign: "center" }}>
            Finalizar Compra
          </Title>
          <CheckoutForm />
        </Space>
      </Content>
    </Layout>
  );
};

export default CheckoutPage;
