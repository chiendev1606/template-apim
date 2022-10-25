import React, { useState, useEffect } from 'react';
import { Table, Pagination } from 'antd';
// import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
// import { APP_CONFIG } from 'utils/env';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getByParams } from '../../api/OrderApi';
import { STATUS_ORDER, PAYMENT_METHOD } from './../../store/Constants';
import { setParamFilter, setPostSelected } from '../../store/OrderSlice';

// const { confirm } = Modal;
const initPaging = { total: 1, per_page: 10, page_index: 1 };

export default function TableBuilding() {
  const [loading, setLoading] = useState(false);
  const [orderList, setOrderList] = useState([]);
  const [paginateInfo, setPaginateInfo] = useState(initPaging);
  const paramsFilter = useSelector((state: any) => state.order.paramsFilter);
  const dispatch = useDispatch();

  const columns = [
    {
      title: 'Phiếu giao hàng',
      dataIndex: 'code',
      key: 'code',
      render: (text: any, record: any) => {
        return <Link to={`/order/${record.code}`}>{record?.code}</Link>;
      },
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Khách hàng',
      dataIndex: 'customer',
      key: 'customer',
    },
    {
      title: 'Tỉnh thành',
      dataIndex: 'city',
      key: 'city',
    },
    {
      title: 'Quận/Huyện',
      dataIndex: 'district',
      key: 'district',
    },
    {
      title: 'Loại đơn',
      dataIndex: 'typeOrder',
      key: 'typeOrder',
    },
    {
      title: 'Giá tiền',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Giá tiền thu',
      dataIndex: 'priceReceived',
      key: 'priceReceived',
    },
    {
      title: 'Phương thức thanh toán',
      dataIndex: 'paymentMethod',
      key: 'paymentMethod',
      render: (text: number, record: any) => {
        const pmCurr = PAYMENT_METHOD.find((pm: any) => record.paymentMethod === pm.id);
        if (!pmCurr) {
          return '';
        }
        return <span style={{ color: pmCurr.color }}>{pmCurr.name}</span>;
      },
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      render: (text: number, record: any) => {
        const statusId = record.status || 1;
        const statusCurr = STATUS_ORDER.find((stt: any) => stt.id === statusId);
        if (!statusCurr) {
          return '';
        }
        return statusCurr.name;
      },
    },
  ];

  useEffect(() => {
    fetchListPost();
    return () => {
      // this now gets called when the component unmounts
      setOrderList([]);
      setPaginateInfo(initPaging);
    };
  }, [paramsFilter]);

  // useEffect(() => {
  //   if (isDoneDelPosts) {
  //     fetchListPost();
  //     dispatch(setDoneDelPosts(false));
  //   }
  // }, [isDoneDelPosts]);

  const fetchListPost = async () => {
    // console.log('Filter post: ', paramsFilter);
    setLoading(true);
    const dataApi = await getByParams(paramsFilter);
    if (!dataApi) {
      setOrderList([]);
      setLoading(false);
      return;
    }
    console.log('Fetch api:', dataApi);

    dataApi.list && setOrderList(dataApi.list);
    dataApi.paging && setPaginateInfo(dataApi.paging);
    setLoading(false);
  };

  const onChangePagination = (page: number, pageSize: number): void => {
    dispatch(setParamFilter({ ...paramsFilter, limit: pageSize, page }));
  };

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[]) => {
      // const idsSelected = selectedRowKeys
      const ids = selectedRowKeys.map((id: any) => Number(id));
      // console.log('Slectd: ', selectedRowKeys, ids, selectedRows);
      dispatch(setPostSelected(ids));
      // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record: any) => ({
      disabled: record.name === 'Disabled', // Column configuration not to be checked
      name: record.code,
    }),
  };

  return (
    <div className="table-panel">
      <Table
        rowSelection={{
          type: 'checkbox',
          ...rowSelection,
        }}
        columns={columns}
        dataSource={orderList}
        rowKey={(record) => record.code}
        loading={loading}
        pagination={false}
      />
      <p />
      <Pagination
        total={paginateInfo.total}
        pageSize={paramsFilter.limit}
        pageSizeOptions={['10', '20', '30', '40', '80']}
        showSizeChanger={true}
        onChange={onChangePagination}
      />
    </div>
  );
}
