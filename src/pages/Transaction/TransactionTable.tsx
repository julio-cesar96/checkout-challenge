// src/components/TransactionTable.tsx

import React from "react";
import { Table, Button } from "antd";
import { Link } from "react-router-dom";
import { Transaction, TransactionTableProps } from "../../types/Transaction.types";

const TransactionTable: React.FC<TransactionTableProps> = ({ transactions }) => {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Método de Pagamento",
      dataIndex: "paymentMethod",
      key: "paymentMethod",
      render: (paymentMethod: { type: string }) => paymentMethod.type,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Detalhes",
      key: "details",
      render: (record: Transaction) => (
        <Link to={`/transactions/${record.id}`}>
          <Button type="link">Ver Detalhes</Button>
        </Link>
      ),
    },
  ];

  return <Table dataSource={transactions} columns={columns} rowKey="id" />;
};

export default TransactionTable;
