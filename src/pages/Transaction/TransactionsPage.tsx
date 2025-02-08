// src/pages/TransactionsPage.tsx

import React, { useEffect, useState } from "react";
import { Spin, Alert } from "antd";
import TransactionTable from "./TransactionTable";
import { Transaction } from "../../types/Transaction.types";

const TransactionsPage: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTransactions = async (): Promise<void> => {
      try {
        const response = await fetch("http://localhost:5000/transactions");
        if (!response.ok) {
          throw new Error(`Erro ao buscar transações: ${response.statusText}`);
        }
        const data: Transaction[] = await response.json();
        setTransactions(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : "Erro desconhecido");
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  if (loading) {
    return <Spin size="large" />;
  }

  if (error) {
    return <Alert message="Erro" description={error} type="error" />;
  }

  return (
    <div style={{ padding: "20px" }}>
      <TransactionTable transactions={transactions} />
    </div>
  );
};

export default TransactionsPage;
