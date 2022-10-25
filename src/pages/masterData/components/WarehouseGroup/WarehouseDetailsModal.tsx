import React from 'react';
import { Button, Col, Modal, Row, Space, Typography } from 'antd';

interface WarehouseDetailsModalProps {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
}

const { Title, Text } = Typography;

const WarehouseDetailsModal: React.FC<WarehouseDetailsModalProps> = ({ isVisible, setIsVisible }) => {
  return (
    <>
      <Modal
        title={<Title level={4}>Chi tiết nhóm kho</Title>}
        visible={isVisible}
        centered
        onOk={() => setIsVisible(false)}
        onCancel={() => setIsVisible(false)}
        width={600}
        footer={null}
      >
        <Space direction="vertical" size={15}>
          <div className="flex-justify-between">
            <Space>
              <Text type="secondary">Mã nhóm kho:</Text>
              <Text strong>DG123456789</Text>
            </Space>
            <Space>
              <Text type="secondary">Tên nhóm kho:</Text>
              <Text strong>DG123456789</Text>
            </Space>
          </div>

          <Row gutter={[31, 0]}>
            <Col span={4}>
              <Text type="secondary">Ghi chú :</Text>
            </Col>
            <Col span={20}>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate eget lectus non convallis.
                Phasellus ultricies mauris ut leo tincidunt feugiat.
              </Text>
            </Col>
          </Row>

          <div className="text-center">
            <Button className="width-30 bg-color-gray border-rd-8 color-grey" onClick={() => setIsVisible(false)}>
              Đóng
            </Button>
          </div>
        </Space>
      </Modal>
    </>
  );
};

export default WarehouseDetailsModal;
