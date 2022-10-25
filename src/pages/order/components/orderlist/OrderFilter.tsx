import React from 'react';
import { Button, Popover, Menu, Input } from 'antd';
import { FilterOutlined } from '@ant-design/icons';

function OrderFilter() {
  const menuFilter: JSX.Element = () => {
    return (
      <Menu>
        <Menu.Item>Comming soon...</Menu.Item>
      </Menu>
    );
  };

  return (
    <Input.Group compact>
      <Popover content={menuFilter} trigger="click" placement="bottomLeft">
        <Button icon={<FilterOutlined />}>Lọc phiếu giao hàng</Button>
      </Popover>
      <Input style={{ width: '50%', textAlign: 'left' }} placeholder="Tìm kiếm..." />
    </Input.Group>
  );
}

export default OrderFilter;
