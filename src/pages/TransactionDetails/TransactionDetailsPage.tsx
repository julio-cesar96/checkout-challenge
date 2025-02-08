import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spin, Card } from "antd";
import { Transaction } from "../../types/Transaction.types";
import TransactionDetailsHeader from "./TransactionDetailsHeader";
import TransactionDetailsInfo from "./TransactionDetailsInfo";

const TransactionDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [transaction, setTransaction] = useState<Transaction | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTransaction = async (): Promise<void> => {
      try {
        const response = await fetch(`http://localhost:5000/transactions/${id}`);
        if (!response.ok) {
          throw new Error(`Erro ao buscar a transação: ${response.statusText}`);
        }
        const data: Transaction = await response.json();
        setTransaction(data);
      } catch (error) {
        console.error("Erro ao buscar a transação:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchTransaction();
    }
  }, [id]);

  if (loading) return <Spin size="large" />;
  if (!transaction) return <div>Transação não encontrada.</div>;

  return (
    <Card title="Detalhes da Transação" style={{ padding: "20px" }}>
      <TransactionDetailsHeader transaction={transaction} />
      <TransactionDetailsInfo transaction={transaction} />
    </Card>
  );
};

export default TransactionDetailsPage;
