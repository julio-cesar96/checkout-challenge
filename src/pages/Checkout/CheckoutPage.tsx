import { Layout, Typography, Space, Button } from "antd";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import CartItems from "../../components/CartItems/CartItems";
import CustomerInfo from "../../components/CustomerInfo/CustomerInfo";
import useCheckout from "../../hooks/useCheckout";
import { useState, useEffect } from "react";
import SuccessModal from "../../components/SuccessModal/SuccessModal";
import ErrorModal from "../../components/ErrorModal/ErrorModal";
const { Title } = Typography;
const { Content } = Layout;

const CheckoutPage: React.FC = () => {
  const mockCartItems = [
    { id: 1, name: "Produto A", quantity: 2, amount: 100 },
    { id: 2, name: "Produto B", quantity: 1, amount: 200 },
    { id: 3, name: "Produto C", quantity: 3, amount: 50 },
  ];
  const { customerInfo, paymentInfo } = useCheckout(); 
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSucessModalOpen, setisSucessModalOpen] = useState<boolean>(false); 
  const [isErrorModalOpen, setIsErrorModalOpen] = useState<boolean>(false);

  const handleCheckout = async () => {
    const transactionData = {
      amount: mockCartItems.reduce((total, item) => total + item.quantity * item.amount, 0),
      customer: customerInfo,
      items: mockCartItems.map(item => ({
        name: item.name,
        quantity: item.quantity,
        amount: item.amount,
      })),
      paymentMethod: {
        type: "card",
        card: paymentInfo?.card,
      },
    };

    try {
      const res = await fetch("http://localhost:5000/transactions", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(transactionData),
      });

      setisSucessModalOpen(true);

      const text = await res.text();
      const data = text ? JSON.parse(text) : {};

      if (!res.ok) {
        throw new Error(data.error || 'Erro ao processar transação');
      }

    } catch (error: unknown) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
        setIsErrorModalOpen(true); 
      } else {
        setErrorMessage("Ocorreu um erro desconhecido");
        setIsErrorModalOpen(true);
      }
    }
  };

  useEffect(() => {
    document.title = "Checkout";
  }, [])

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
          filter: isSucessModalOpen || isErrorModalOpen? "blur(8px)" : "none", 
          transition: "filter 0.3s", 
        }}
      >
        <Space direction="vertical" style={{ width: "100%" }}>
          <Title level={2} style={{ textAlign: "center" }}>
            Finalize sua compra
          </Title>

          <CartItems items={mockCartItems} />
          <CustomerInfo />
          <CheckoutForm />

          <Button type="primary" onClick={handleCheckout} block>
            Finalizar Compra
          </Button>
        </Space>
      </Content>

      <SuccessModal 
        open={isSucessModalOpen} 
        onClose={() => setisSucessModalOpen(false)} 
      />

      <ErrorModal 
        open={isErrorModalOpen} 
        errorMessage={errorMessage} 
        onClose={() => setIsErrorModalOpen(false)} 
      />
    </Layout>
  );
};

export default CheckoutPage;
