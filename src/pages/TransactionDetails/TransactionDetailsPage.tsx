import React from "react";
import { useParams } from "react-router-dom";
import { Spin, Card, Alert } from "antd";
import useFetch from "../../hooks/useFetch"; 
import { Transaction } from "../../types/Transaction.types";
import TransactionDetailsHeader from "./TransactionDetailsHeader";
import TransactionDetailsInfo from "./TransactionDetailsInfo";

const TransactionDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data: transaction, loading, error } = useFetch<Transaction>({
    url: `http://localhost:5000/transactions/${id}`,
  });

  if (loading) {
    return <Spin size="large" />;
  }

  if (error) {
    return <Alert message="Erro" description={error} type="error" />;
  }

  if (!transaction) {
    return <div>Transação não encontrada.</div>;
  }

  return (
    <Card title="Detalhes da Transação" style={{ padding: "20px" }}>
      <TransactionDetailsHeader transaction={transaction} />
      <TransactionDetailsInfo transaction={transaction} />
    </Card>
  );
};

export default TransactionDetailsPage;
