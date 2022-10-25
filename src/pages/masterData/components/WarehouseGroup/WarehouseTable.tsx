import { DeleteOutlined, EditOutlined, EyeOutlined, CloseCircleTwoTone } from '@ant-design/icons';
import { Button, Pagination, Select, Space, Table, Tag, Tooltip, Typography, Modal } from 'antd';
import { actionModalModel } from 'pages/masterData/model/warehouseGroupModel';
import React, { useState } from 'react';
import { ACTION_CRUD, DEFAULT_PAGING } from './../../../../store/common/constants';

const renderData = () => {
  let data = [];
  for (let index = 0; index < 20; index++) {
    data.push({
      wareHouseId: 'DACDED' + index,
      name: 'Nhóm ' + index,
      note: 'test nhóm kho' + index,
      status: 'Đã hoạt động',
    });
  }
  return data;
};

const { confirm } = Modal;
const { Title, Text } = Typography;

interface WarehouseTableProps {
  setIsShowDetails: (isVisible: boolean) => void;
  setActionModal: (action: actionModalModel) => void;
}

const WarehouseTable: React.FC<WarehouseTableProps> = ({ setIsShowDetails, setActionModal }) => {
  const [pagination, setPagination] = useState(DEFAULT_PAGING);

  const handleDeleteWarehouse = () => {
    confirm({
      width: 400,
      title: (
        <div className="full-width text-center">
          <Title level={4}>Xóa nhóm kho</Title>
        </div>
      ),
      content: (
        <Space direction="vertical" className="text-center full-width" size={20}>
          <span style={{ fontSize: '60px' }}>
            <CloseCircleTwoTone twoToneColor="#DB524E" />
          </span>
          <Text>Bạn có chắc chắn muốn xóa nhóm kho ? </Text>
          <div className="flex-justify-between">
            <Button className="width-49 border-rd-8 bg-color-primary-light">Hủy</Button>
            <Button type="ghost" className="width-49 border-rd-8 color-light" style={{ backgroundColor: '#DB524E' }}>
              Xóa
            </Button>
          </div>
        </Space>
      ),
      okButtonProps: { style: { display: 'none' } },
      cancelButtonProps: { style: { display: 'none' } },
    });
  };

  const columns = [
    {
      title: '#',
      dataIndex: 'index',
      align: 'center' as const,
      width: '5%',
      render: (_: string, record: any, index: number) => +index + 1,
    },
    {
      title: 'Mã nhóm kho',
      width: '12%',
      align: 'center' as const,
      dataIndex: 'wareHouseId',
    },
    { title: 'Tên nhóm kho', width: '12%', dataIndex: 'name', align: 'center' as const },
    { title: 'Ghi chú', dataIndex: 'note', align: 'left' as const },
    {
      title: 'Trạng thái',
      width: '12%',
      dataIndex: 'status',
      align: 'center' as const,
      render: () => <Tag color="success">Đã hoạt động</Tag>,
    },
    {
      title: 'Thao tác',
      dataIndex: 'action',
      align: 'center' as const,
      width: '12%',
      render: () => (
        <Space>
          <Tooltip title="Xem chi tiết">
            <Button onClick={() => setIsShowDetails(true)}>
              <EyeOutlined />
            </Button>
          </Tooltip>

          <Tooltip title="Chỉnh sửa">
            <Button onClick={() => setActionModal({ isVisible: true, type: ACTION_CRUD.EDIT })}>
              <EditOutlined />
            </Button>
          </Tooltip>

          <Tooltip title="Xóa">
            <Button onClick={handleDeleteWarehouse}>
              <DeleteOutlined />
            </Button>
          </Tooltip>
        </Space>
      ),
    },
  ];

  return (
    <Space direction="vertical" className="full-width" size={20}>
      <Table showHeader bordered columns={columns} dataSource={renderData()} pagination={false} />
      <div className="flex-justify-between">
        <Space>
          <Typography.Text strong>Hiển thị</Typography.Text>
          <Select className="color-blue" allowClear placeholder="" defaultValue={10} optionFilterProp="children">
            <Select.Option value={'10'}>10</Select.Option>
            <Select.Option value={'20'}>20</Select.Option>
            <Select.Option value={'30'}>30</Select.Option>
          </Select>
          <Typography.Text>
            trên <span className="color-blue">100</span> bản ghi
          </Typography.Text>
        </Space>
        <Pagination current={pagination.pageIndex} pageSize={pagination.pageSize} total={pagination.totalRecords} />
      </div>
    </Space>
  );
};

export default WarehouseTable;
