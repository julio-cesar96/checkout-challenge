import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Text, Spinner } from "@chakra-ui/react";

const TransactionDetailsPage = () => {
  const { id } = useParams();
  const [transaction, setTransaction] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransaction = async () => {
        try {
          const response = await fetch(`http://localhost:5000/transactions/${id}`);
          if (!response.ok) {
            throw new Error(`Erro ao buscar a transação: ${response.statusText}`);
          }
          const data = await response.json();
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

  if (loading) return <Spinner />;

  return (
    <Box p={4}>
      <Text fontSize="xl">Detalhes da Transação</Text>
      <Text>ID: {transaction?.id}</Text>
      <Text>Status: {transaction?.status}</Text>
      <Text>Valor: R$ {transaction?.amount.toFixed(2)}</Text>
      <Text>Nome: {transaction?.customer.firstName} {transaction?.customer.lastName}</Text>
      <Text>Cartão: **** **** **** {transaction?.paymentMethod.card.lastDigits}</Text>
    </Box>
  );
};

export default TransactionDetailsPage;