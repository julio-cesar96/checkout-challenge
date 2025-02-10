import { Modal, Typography, Button, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { SuccessModalProps } from "./SuccessModal.type";

const { Title } = Typography;

const SuccessModal: React.FC<SuccessModalProps> = ({ open, onClose }) => {
    const navigate = useNavigate();
  
    return (
      <Modal open={open} footer={null} onCancel={onClose} style={{ textAlign: "center" }}>
        <Title level={3}>Compra realizada! 🛒</Title>
        <p>O pagamento está sendo processado.</p>
        <Space>
          <Button type="primary" onClick={() => navigate("/transactions")}>
            Ver Transações
          </Button>
          <Button onClick={() => navigate("/")}>Voltar ao Checkout</Button>
        </Space>
      </Modal>
    );
  };
  
  export default SuccessModal;