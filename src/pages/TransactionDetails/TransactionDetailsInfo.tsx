import React from "react";
import { Typography, List } from "antd";
import { Transaction } from "../../types/Transaction.types";

const { Text } = Typography;

interface TransactionDetailsInfoProps {
  transaction: Transaction;
}

const TransactionDetailsInfo: React.FC<TransactionDetailsInfoProps> = ({ transaction }) => {
  return (
    <List
      bordered
      dataSource={[
        { label: "Valor", value: `R$ ${transaction.amount.toFixed(2)}` },
        { label: "Nome", value: `${transaction.customer.firstName} ${transaction.customer.lastName}` },
        {
          label: "Cartão",
          value: `**** **** **** ${transaction.paymentMethod.card?.lastDigits ?? "N/A"}`,
        },
      ]}
      renderItem={(item) => (
        <List.Item>
          <Text strong>{item.label}:</Text> {item.value}
        </List.Item>
      )}
    />
  );
};

export default TransactionDetailsInfo;
