import { Col, Input, Row, Typography, Form } from 'antd';
import React from 'react';

const { Text } = Typography;

const WarehouseForm = () => {
  return (
    <Row gutter={[10, 0]}>
      <Col span={9}>
        <Form.Item
          label={<Text strong>Mã nhóm kho</Text>}
          name="id"
          rules={[{ required: true, message: 'Mã nhóm không được bỏ trống' }]}
        >
          <Input className="border-rd-8" />
        </Form.Item>
      </Col>
      <Col span={15}>
        <Form.Item
          label={<Text strong>Tên nhóm kho </Text>}
          name="name"
          rules={[{ required: true, message: 'Tên nhóm kho không được bỏ trống' }]}
        >
          <Input className="border-rd-8" placeholder="Nhập số lượng" />
        </Form.Item>
      </Col>
      <Col span={24}>
        <Form.Item label={<Text strong>Ghi chú </Text>} name="note">
          <Input.TextArea className="border-rd-8" placeholder="Ghi chú" rows={6} />
        </Form.Item>
      </Col>
    </Row>
  );
};

export default WarehouseForm;
