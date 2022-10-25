import { LayoutOutlined } from '@ant-design/icons';
import { Button, Form, Input, Radio } from 'antd';
import FilterBox from 'components/filterBar/FilterBox';

const WarehouseFilter = () => {
  const renderWarehouseFilter = () => (
    <Form layout="vertical">
      <Form.Item label={<span className="text-semibold">Mã nhóm kho</span>} name="id">
        <Input className="border-rd-8" />
      </Form.Item>
      <Form.Item label={<span className="text-semibold">Tên nhóm kho</span>} name="name">
        <Input className="border-rd-8" />
      </Form.Item>
      <Form.Item label={<span className="text-semibold">Trạng thái</span>} name="active">
        <Radio.Group>
          <Radio value={1}>Đang hoạt động</Radio>
          <Radio value={2}>Ngừng hoạt động</Radio>
        </Radio.Group>
      </Form.Item>

      <div className="flex-justify-between">
        <Button htmlType="button" type="default" className="border-rd-8 width-49">
          Bỏ
        </Button>
        <Button htmlType="submit" type="primary" className="border-rd-8 width-49 bg-color-blue">
          Tìm kiếm
        </Button>
      </div>
    </Form>
  );

  return (
    <div className="flex-justify-between align-items-center">
      <div className="warehouse-filter ">
        <FilterBox dropdownRender={renderWarehouseFilter()} />
      </div>
      <Button icon={<LayoutOutlined />}>Hiển thị</Button>
    </div>
  );
};

export default WarehouseFilter;
