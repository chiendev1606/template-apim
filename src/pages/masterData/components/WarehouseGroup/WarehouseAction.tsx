import { Space } from 'antd';
import React from 'react';
import { Typography, Button } from 'antd';
import { PlusOutlined, SyncOutlined } from '@ant-design/icons';
import { actionModalModel } from 'pages/masterData/model/warehouseGroupModel';
import { ACTION_CRUD } from 'store/common/constants';

const { Title } = Typography;

interface WarehouseActionProps {
  setActionModal: (actionModal: actionModalModel) => void;
  setHasDeliveryBill: (isVisible: boolean) => void;
}

const WarehouseAction: React.FC<WarehouseActionProps> = ({ setActionModal, setHasDeliveryBill }) => {
  return (
    <div className="flex-justify-between">
      <Title level={3}>Nhóm kho</Title>
      <Space align="center">
        <Button className="warehouse__btn warehouse__btn--0" type="link">
          <SyncOutlined />
          <span> Refresh</span>
        </Button>
        <Button className="warehouse__btn warehouse__btn--1" onClick={() => setHasDeliveryBill(true)}>
          <span>Tạo vận đơn</span>
        </Button>
        <Button
          className="warehouse__btn warehouse__btn--2"
          onClick={() => setActionModal({ isVisible: true, type: ACTION_CRUD.ADD })}
        >
          <PlusOutlined /> <span>Thêm mới</span>
        </Button>
      </Space>
    </div>
  );
};

export default WarehouseAction;
