import React from 'react';
import { Button, Checkbox, Col, Row, Space, Tooltip, Popover } from 'antd';
import { PlusCircleOutlined, UploadOutlined, SettingOutlined } from '@ant-design/icons';

function OrderActions() {
  const menuViewColTable: JSX.Element = (
    <Checkbox.Group>
      <Checkbox value="1" className="display-block">
        Giá tiền
      </Checkbox>
      <Checkbox value="2" className="display-block margin-0">
        Giá tiền thu
      </Checkbox>
      <Checkbox value="3" className="display-block margin-0">
        Phương thức thanh toán
      </Checkbox>
      <Checkbox value="4" className="display-block margin-0">
        Trạng thái
      </Checkbox>
    </Checkbox.Group>
  );

  return (
    <div className="order-action" style={{ marginTop: '20px' }}>
      <Row gutter={[15, 15]}>
        <Col span={12}>
          <Button type="primary" icon={<PlusCircleOutlined />}>
            Tạo vận đơn
          </Button>
        </Col>
        <Col span={12}>
          <Space align={'end'} size={[8, 16]} className="full-width text-right display-flex justify-content-end">
            <Button type="link" icon={<UploadOutlined />} className="color-dark">
              Xuất file
            </Button>
            <Popover content={menuViewColTable} trigger="click" placement="bottomLeft">
              <Tooltip title="Điều chỉnh cột hiển thị" placement="leftTop">
                <Button type="link" icon={<SettingOutlined />} className="color-dark" />
              </Tooltip>
            </Popover>
          </Space>
        </Col>
      </Row>
    </div>
  );
}

export default OrderActions;
