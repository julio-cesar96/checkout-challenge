import React from "react";
import { Spin, Alert } from "antd";
import TransactionTable from "../../components/TransactionTable/TransactionTable";
import useFetch from "../../hooks/useFetch";
import { Transaction } from "../../types/Transaction.types";

const TransactionsPage: React.FC = () => {
  const { data: transactions, loading, error } = useFetch<Transaction[]>({
    url: "http://localhost:5000/transactions",
  });

  if (loading) {
    return <Spin size="large" />;
  }

  if (error) {
    return <Alert message="Erro" description={error} type="error" />;
  }

  return (
    <div style={{ padding: "20px" }}>
      <TransactionTable transactions={transactions || []} /> 
    </div>
  );
};

export default TransactionsPage;
