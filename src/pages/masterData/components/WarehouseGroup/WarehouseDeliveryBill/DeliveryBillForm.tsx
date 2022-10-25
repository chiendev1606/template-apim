import { Col, Form, Input, Row, Select, Typography } from 'antd';

const { Option } = Select;
const { Text } = Typography;

const DeliveryBillForm = () => {
  return (
    <>
      <Row gutter={[10, 10]}>
        <Col span={11}>
          <Form.Item label={<Text strong>Mã phiếu</Text>} name="id">
            <Input />
          </Form.Item>
        </Col>
        <Col span={13}>
          <Form.Item label={<Text strong>Kho xuất</Text>} name="warehouse">
            <Input />
          </Form.Item>
        </Col>
        <Col span={11}>
          <Form.Item label={<Text strong>Hình thức xuất</Text>} name="type">
            <Select<number | string>
              showSearch
              filterOption={(inputValue, option) => {
                if (!option) return false;
                return option.children.indexOf(inputValue.toLowerCase()) >= 0;
              }}
              allowClear
            >
              <Option value={1}>chien</Option>
              <Option value={2}>quoc</Option>
              <Option value={3}>quoc</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={13}>
          <Form.Item label={<Text strong>Nhân viên xuất</Text>} name="person">
            <Select
              mode="multiple"
              showSearch
              filterOption={(inputValue, option) => {
                if (!option) return false;
                return option.children.indexOf(inputValue.toLowerCase()) >= 0;
              }}
              allowClear
            >
              <Option value={1}>1</Option>
              <Option value={2}>2</Option>
              <Option value={3}>3</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item name="note" label={<Text strong>Ghi chú</Text>}>
            <Input.TextArea rows={6} />
          </Form.Item>
        </Col>
      </Row>
    </>
  );
};

export default DeliveryBillForm;
