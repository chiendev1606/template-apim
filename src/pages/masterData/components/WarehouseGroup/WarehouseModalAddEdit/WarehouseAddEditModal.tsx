import { Button, Form, Modal, Typography } from 'antd';
import { actionModalModel } from 'pages/masterData/model/warehouseGroupModel';
import React, { useEffect, useState } from 'react';
import { ACTION_CRUD } from 'store/common/constants';
import WarehouseForm from './WarehouseForm';

interface WarehouseAddEditModalProps {
  actionModal: actionModalModel;
  setActionModal: (actionModal: actionModalModel) => void;
  handleUpdateWarehouse: (value: any) => void;
}

const { Title } = Typography;

const WarehouseAddEditModal: React.FC<WarehouseAddEditModalProps> = ({
  actionModal,
  setActionModal,
  handleUpdateWarehouse,
}) => {
  const [form] = Form.useForm();
  const [warehouseDetails, setWarehouseDetails] = useState(null);
  const { isVisible, type } = actionModal;
  const titleText = type === ACTION_CRUD.ADD ? 'Thêm mới nhóm kho' : 'Sửa nhóm kho';

  useEffect(() => {
    if (type === ACTION_CRUD.EDIT) {
      // gọi api
    }
    return () => setWarehouseDetails(null);
  }, []);

  const handleSubmitForm = () => {
    form
      .validateFields()
      .then((values) => handleUpdateWarehouse(values))
      .catch((err) => console.log(err));
  };

  const handleCancelForm = () => {
    form.resetFields();
    setActionModal({ isVisible: false, type: ACTION_CRUD.NONE });
  };

  return (
    <Modal
      title={<Title level={4}> {titleText} </Title>}
      centered
      width={1050}
      visible={isVisible}
      onCancel={handleCancelForm}
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
      <Form layout="vertical" form={form} colon={false}>
        <WarehouseForm />
      </Form>
    </Modal>
  );
};

export default WarehouseAddEditModal;
