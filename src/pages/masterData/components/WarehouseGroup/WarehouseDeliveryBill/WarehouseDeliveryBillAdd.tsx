import { Button, Form, Modal, Typography } from 'antd';
import DeliveryBillForm from './DeliveryBillForm';

const { Title } = Typography;

interface WarehouseDeliveryBillAddProps {
  hasDeliveryBill: boolean;
  setHasDeliveryBill: (isVisible: boolean) => void;
}

const WarehouseDeliveryBillAdd: React.FC<WarehouseDeliveryBillAddProps> = ({ hasDeliveryBill, setHasDeliveryBill }) => {
  const [form] = Form.useForm();
  const handleCancelForm = () => {
    setHasDeliveryBill(false);
  };
  const handleSubmitForm = () => {
    setHasDeliveryBill(false);
  };

  return (
    <Modal
      title={<Title level={4}>Thêm mới phiếu xuất kho</Title>}
      visible={hasDeliveryBill}
      onCancel={() => setHasDeliveryBill(false)}
      centered
      width={1400}
      footer={
        <div className="width-100 flex-justify-center">
          <Button className="width-12" style={{ marginRight: '10px' }} onClick={handleCancelForm}>
            Hủy
          </Button>
          <Button htmlType="submit" className="width-12" type="primary" onClick={handleSubmitForm}>
            Lưu
          </Button>
        </div>
      }
    >
      <Form layout="vertical" colon={false} form={form}>
        <DeliveryBillForm />
      </Form>
    </Modal>
  );
};

export default WarehouseDeliveryBillAdd;
