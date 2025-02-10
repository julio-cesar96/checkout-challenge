import React from "react";
import { Card, Col, Row, Typography } from "antd";
import { CartItem } from "../../types/CartItems.types";

const { Text } = Typography;
const { Title } = Typography

interface CartItemsProps {
  items: CartItem[];
}

const CartItems: React.FC<CartItemsProps> = ({ items }) => {
  return (
    <div style={{ width: "100%", marginBottom: "20px" }}>
      <Title level={3}>Itens do Carrinho</Title>
      <Row gutter={[16, 16]}>
        {items.map((item) => (
          <Col span={8} key={item.id}>
            <Card title={item.name}>
              <Text>Quantidade: {item.quantity}</Text>
              <br />
              <Text>Preço: R${item.amount.toFixed(2)}</Text>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CartItems;
