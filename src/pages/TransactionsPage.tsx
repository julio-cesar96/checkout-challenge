import React, { useEffect, useState } from "react";
import { Box, Table, Thead, Tbody, Tr, Th, Td, Spinner } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const TransactionsPage = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransactions = async () => {
        try {
          const response = await fetch("http://localhost:5000/transactions");
          if (!response.ok) {
            throw new Error(`Erro ao buscar transações: ${response.statusText}`);
          }
          const data = await response.json();
          setTransactions(data);
        } catch (error) {
          console.error("Erro ao buscar transações:", error);
        } finally {
          setLoading(false);
        }
      };
    
      fetchTransactions();
  }, []);

  if (loading) return <Spinner />;

  return (
    <Box p={4}>
      <Table>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Método de Pagamento</Th>
            <Th>Status</Th>
            <Th>Detalhes</Th>
          </Tr>
        </Thead>
        <Tbody>
          {transactions.map((transaction) => (
            <Tr key={transaction.id}>
              <Td>{transaction.id}</Td>
              <Td>{transaction.paymentMethod.type}</Td>
              <Td>{transaction.status}</Td>
              <Td>
                <Link to={`/transactions/${transaction.id}`}>Ver Detalhes</Link>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default TransactionsPage;
