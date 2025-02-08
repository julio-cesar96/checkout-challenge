// CheckoutPage.tsx
import { Layout, Typography, Space } from "antd"; 
import CheckoutForm from "./CheckoutForm";
import CartItems from "../../components/CartItems/CartItems";
import CustomerInfo from "../../components/CustomerInfo/CustomerInfo";

const { Title } = Typography;
const { Content } = Layout;

const cartItems = [
  { id: 1, name: "Item 1", quantity: 2, price: 50 },
  { id: 2, name: "Item 2", quantity: 1, price: 30 },
  { id: 3, name: "Item 3", quantity: 3, price: 20 },
];

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
          width: "100%",
        }}
      >
        <Space direction="vertical" style={{ width: "100%" }}>
          <Title level={2} style={{ textAlign: "center" }}>
            Finalizar Compra
          </Title>

          
          <CartItems items={cartItems} />

          
          <CustomerInfo />

          
          <CheckoutForm />
        </Space>
      </Content>
    </Layout>
  );
};

export default CheckoutPage;
