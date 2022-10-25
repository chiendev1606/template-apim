import { Space } from 'antd';
import React from 'react';
import OrderActions from './../components/orderlist/OrderActions';
import OrderTab from './../components/orderlist/OrderTab';
import OrderFilter from './../components/orderlist/OrderFilter';
import OrderTable from './../components/orderlist/OrderTable';

const OrderList = () => {
  return (
    <Space direction="vertical" size={10} className="full-width">
      <OrderActions />
      <div className="panel">
        <OrderTab />
        <div className="order-filter text-center">
          <OrderFilter />
        </div>
        <OrderTable />
      </div>
    </Space>
  );
};

export default OrderList;
