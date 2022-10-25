import { Table, Typography } from 'antd';
import React from 'react';

const { Title } = Typography;

interface DeliveryProductsTableProps {
  products: any[];
}

const DeliveryProductsTable: React.FC<DeliveryProductsTableProps> = ({ products }) => {
  const columns = [
    { title: '#', dataIndex: '#', width: '9%', render: (_: string, record: any, index: number) => +index + 1 },
    { title: 'Tên sản phẩm', dataIndex: 'name' },
    { title: 'Tên sản phẩm', dataIndex: 'name' },
  ];

  return (
    <div>
      <Title level={4}>Thông tin sản phẩm</Title>
      <Table bordered dataSource={products} />
    </div>
  );
};

export default DeliveryProductsTable;
