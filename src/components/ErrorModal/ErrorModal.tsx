import { Modal, Typography, Button, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { ErrorModalProps } from "./ErrorModal.types";

const { Title } = Typography;

const ErrorModal: React.FC<ErrorModalProps> = ({ open, errorMessage, onClose }) => {
    const navigate = useNavigate();
  
    return (
      <Modal open={open} footer={null} onCancel={onClose} style={{ textAlign: "center" }}>
        <Title level={3} style={{ color: "red" }}>Erro na Transação ❌</Title>
        <p>{errorMessage}</p>
        <Space>
          <Button type="primary" onClick={onClose}>Tentar Novamente</Button>
          <Button onClick={() => navigate("/checkout")}>Voltar ao Checkout</Button>
        </Space>
      </Modal>
    );
  };
  
  export default ErrorModal;