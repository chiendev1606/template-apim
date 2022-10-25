import React from 'react';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

function OrderTab() {
  const onChangeTab = (tab: number) => {
    console.log('Tab change', tab);
  };

  return (
    <Tabs defaultActiveKey="1" onChange={onChangeTab} className="tab-padding">
      <TabPane tab="Tất cả (1)" key="1" />
      <TabPane tab="Đã duyệt (1)" key="2" />
      <TabPane tab="Chờ đóng gói (1)" key="3" />
      <TabPane tab="Đã giao ĐVVC (1)" key="4" />
      <TabPane tab="Hoàn trả (0)" key="5" />
      <TabPane tab="Không thành công (1)" key="6" />
    </Tabs>
  );
}

export default OrderTab;
