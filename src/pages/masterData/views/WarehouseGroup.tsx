import loadable from '@loadable/component';
import { Space, Spin } from 'antd';
import BreadCrumbCustom from 'components/breadcrumbCustom/BreadCrumbCustom';
import { useState } from 'react';
import { ACTION_CRUD } from 'store/common/constants';
import WarehouseAction from '../components/WarehouseGroup/WarehouseAction';
import WarehouseFilter from '../components/WarehouseGroup/WarehouseFilter';
import WarehouseTable from '../components/WarehouseGroup/WarehouseTable';
import { actionModalModel } from '../model/warehouseGroupModel';
import './../styles/warehouse-group.scss';

const Loading = <Spin />;

const WarehouseDetailsModal = loadable(() => import('./../components/WarehouseGroup/WarehouseDetailsModal'), {
  fallback: Loading,
});
const WarehouseAddEditModal = loadable(
  () => import('../components/WarehouseGroup/WarehouseModalAddEdit/WarehouseAddEditModal'),
  { fallback: Loading },
);
const WarehouseDeliveryBillAdd = loadable(
  () => import('../components/WarehouseGroup/WarehouseDeliveryBill/WarehouseDeliveryBillAdd'),
  { fallback: Loading },
);

const WarehouseGroup = () => {
  const [isShowDetails, setIsShowDetails] = useState(false);
  const [actionModal, setActionModal] = useState<actionModalModel>({ isVisible: false, type: ACTION_CRUD.NONE });
  const [hasDeliveryBill, setHasDeliveryBill] = useState(false);

  const WarehouseTableProps = {
    setIsShowAddEdit: setActionModal,
    setIsShowDetails,
    setActionModal,
  };

  const handleUpdateWarehouse = (values: any) => {
    console.log(values);

    setActionModal({ isVisible: false, type: ACTION_CRUD.NONE });
  };

  return (
    <>
      <Space className="full-width" direction="vertical" size={15}>
        <BreadCrumbCustom />
        <WarehouseAction setActionModal={setActionModal} setHasDeliveryBill={setHasDeliveryBill} />
        <div className="panel" style={{ padding: '20px' }}>
          <Space direction="vertical" size={15} className="full-width">
            <WarehouseFilter />
            <WarehouseTable {...WarehouseTableProps} />
          </Space>
        </div>
      </Space>

      {isShowDetails && <WarehouseDetailsModal setIsVisible={setIsShowDetails} isVisible={isShowDetails} />}

      {actionModal.isVisible && (
        <WarehouseAddEditModal
          actionModal={actionModal}
          handleUpdateWarehouse={handleUpdateWarehouse}
          setActionModal={setActionModal}
        />
      )}

      {hasDeliveryBill && (
        <WarehouseDeliveryBillAdd setHasDeliveryBill={setHasDeliveryBill} hasDeliveryBill={hasDeliveryBill} />
      )}
    </>
  );
};

export default WarehouseGroup;
