import React from "react";
import { Typography } from "antd";
import { Transaction } from "../../types/Transaction.types";

const { Title, Text } = Typography;

interface TransactionDetailsHeaderProps {
  transaction: Transaction;
}

const TransactionDetailsHeader: React.FC<TransactionDetailsHeaderProps> = ({ transaction }) => {
  return (
    <>
      <Title level={3}>Transação #{transaction.id}</Title>
      <Text>Status: {transaction.status}</Text>
    </>
  );
};

export default TransactionDetailsHeader;
