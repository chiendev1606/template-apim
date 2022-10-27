import React, { useCallback, useMemo, useState } from 'react';
import { Button, Col, DatePicker, Divider, Form, Radio, Row, Select, Space, Typography } from 'antd';
import { CheckOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import './../styles/dashboard.scss';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const { Title } = Typography;
const { Option } = Select;

const filterParams = {
  comparator: (filterLocalDateAtMidnight: Date, cellValue: string) => {
    const dateAsString = cellValue;
    if (dateAsString == null) return -1;
    const dateParts = dateAsString.split('/');
    const cellDate = new Date(Number(dateParts[2]), Number(dateParts[1]) - 1, Number(dateParts[0]));
    if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
      return 0;
    }
    if (cellDate < filterLocalDateAtMidnight) {
      return -1;
    }
    if (cellDate > filterLocalDateAtMidnight) {
      return 1;
    }
  },
  browserDatePicker: true,
};

const Dashboard: React.FC = (): JSX.Element => {
  // const { t } = useTranslation();
  const [hasCalc, setHasCalc] = useState(false);
  const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
  const gridStyle = useMemo(() => ({ height: '500px', width: '100%' }), []);
  const [rowData, setRowData] = useState();
  const [columnDefs, setColumnDefs] = useState([
    { field: 'athlete', sortable: true },
    { field: 'age', filter: 'agNumberColumnFilter', maxWidth: 100, sortable: true },
    { field: 'country', sortable: true },
    { field: 'year', maxWidth: 100, sortable: true },
    {
      field: 'date',
      filter: 'agDateColumnFilter',
      filterParams: filterParams,
      sortable: true,
    },
    { field: 'sport' },
    { field: 'gold', filter: 'agNumberColumnFilter', sortable: true },
    { field: 'silver', filter: 'agNumberColumnFilter', sortable: true },
    { field: 'bronze', filter: 'agNumberColumnFilter', sortable: true },
    { field: 'total', filter: false, sortable: true },
  ]);
  const defaultColDef = useMemo(() => {
    return {
      editable: true,
    };
  }, []);

  const onGridReady = useCallback((params) => {
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then((resp) => resp.json())
      .then((data) => setRowData(data));
  }, []);

  const toggleCalc = () => setHasCalc(!hasCalc);

  return (
    <div className="dashboard">
      <div className="dashboard__wrap panel full-width">
        <Form>
          <div style={{ padding: '1rem' }}>
            <Title level={2}>게임 내역</Title>
            <Title level={4}>검색</Title>

            <Row gutter={[10, 10]} style={{ width: '100%', marginTop: '20px' }}>
              <Col span={9}>소속 에이전트</Col>
              <Col span={15}>
                <Form.Item
                  initialValue={'lucy'}
                  name={'ok'}
                  rules={[{ required: true, message: 'Field is required!' }]}>
                  <Select allowClear size="large" style={{ width: '100%' }}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>
                      Disabled
                    </Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Divider />
              <Col span={9}>벤더</Col>
              <Col span={15}>
                <Form.Item
                  initialValue={'lucy'}
                  name={'ok2'}
                  rules={[{ required: true, message: 'Field is required!' }]}>
                  <Select allowClear size="large" style={{ width: '100%' }}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>
                      Disabled
                    </Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Divider />
              <Col span={9}>기간</Col>
              <Col span={15}>
                <Row gutter={[20, 0]}>
                  <Col span={12}>
                    <Form.Item name={'ok4'} rules={[{ required: true, message: 'Field is required!' }]}>
                      <DatePicker size="large" style={{ width: '100%' }} showTime />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item name={'ok3424'} rules={[{ required: true, message: 'Field is required!' }]}>
                      <DatePicker size="large" style={{ width: '100%' }} showTime />
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
              <Divider />
              <Col span={9}>타입</Col>
              <Col span={15}>
                <Form.Item initialValue={1} name={'ok3'} rules={[{ required: true, message: 'Field is required!' }]}>
                  <Radio.Group>
                    <Radio value={1}>전체</Radio>
                    <Radio value={2}>BET</Radio>
                    <Radio value={3}>WIN</Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>
              <Divider />
              <Col span={9}>상태</Col>
              <Col span={15}>
                <Form.Item initialValue={1} name={'ok3'} rules={[{ required: true, message: 'Field is required!' }]}>
                  <Radio.Group>
                    <Radio value={1}>전체</Radio>
                    <Radio value={2}>성공</Radio>
                    <Radio value={3}>베팅취소</Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>
              <Divider />
              <Col span={9}>상세내역 여부</Col>
              <Col span={15}>
                <Form.Item initialValue={1} name={'ok3'} rules={[{ required: true, message: 'Field is required!' }]}>
                  <Radio.Group>
                    <Radio value={1}>전체</Radio>
                    <Radio value={2}>성공</Radio>
                    <Radio value={3}>대기</Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>
            </Row>
          </div>
          <Button
            htmlType="submit"
            style={{ marginTop: '20px', fontSize: '20px', fontWeight: 700 }}
            size="large"
            type={'primary'}
            onClick={toggleCalc}
            className="full-width">
            검색
          </Button>
        </Form>
        {hasCalc && (
          <Row className="dashboard__calc">
            <Col style={{ padding: '15px 45px' }} flex={1}>
              <Space className="full-width" direction={'vertical'} size={35}>
                <Space size={50}>
                  <Space className="full-width" direction={'vertical'} size={10}>
                    <Title style={{ margin: 0 }} level={5}>
                      베팅 금액
                    </Title>
                    <Title style={{ margin: 0 }} level={5}>
                      0
                    </Title>
                  </Space>

                  <div>
                    <MinusOutlined />
                  </div>

                  <Space className="full-width" direction={'vertical'} size={10}>
                    <Title style={{ margin: 0 }} level={5}>
                      당첨 금액
                    </Title>
                    <Title style={{ margin: 0 }} level={5}>
                      0
                    </Title>
                  </Space>
                </Space>

                <Space size={50}>
                  <Space className="full-width" direction={'vertical'} size={10}>
                    <Title style={{ margin: 0 }} level={5}>
                      베팅 금액
                    </Title>
                    <Title style={{ margin: 0 }} level={5}>
                      0
                    </Title>
                  </Space>

                  <div>
                    <PlusOutlined />
                  </div>

                  <Space className="full-width" direction={'vertical'} size={10}>
                    <Title style={{ margin: 0 }} level={5}>
                      베팅 금액
                    </Title>
                    <Title style={{ margin: 0 }} level={5}>
                      0
                    </Title>
                  </Space>
                </Space>
              </Space>
            </Col>
            <Col style={{ backgroundColor: ' rgba(64, 169, 255, 0.4)', padding: '15px' }} span={4}>
              <Space className="full-width" direction={'vertical'} size={35}>
                <Space className="full-width" direction={'vertical'} size={10}>
                  <Title style={{ margin: 0 }} level={5}>
                    손익 금액
                  </Title>
                  <Title style={{ margin: 0, textAlign: 'right' }} level={5}>
                    0
                  </Title>
                </Space>
                <Space className="full-width" direction={'vertical'} size={10}>
                  <Title style={{ margin: 0 }} level={5}>
                    RTP
                  </Title>
                  <Title level={5} className="text-right">
                    NaN %
                  </Title>
                </Space>
              </Space>
            </Col>
          </Row>
        )}
      </div>
      <div style={{ marginTop: '10px' }}>
        <Title level={4}>게임 내역</Title>
        <div className="dashboard__alert display-flex align-items-center">
          <div className="display-flex">
            <CheckOutlined style={{ fontSize: '20px', color: 'black' }} />
            <div style={{ marginLeft: '5px' }}>
              <p>
                트랜잭션 상세내역은 <a href="/">에볼루션 (evolution)</a> 만 지원 중 이며 클릭 시 조회 가능합니다.
              </p>
              <p>WIN 내역 이후 5~10분 사이 갱신됩니다.</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: '30px', paddingBottom: '50px' }}>
        {/*<Table*/}
        {/*  columns={columns}*/}
        {/*  rowKey={'key'}*/}
        {/*  pagination={{ defaultPageSize: 5, showSizeChanger: true, pageSizeOptions: ['5', '10', '20', '30'] }}*/}
        {/*  dataSource={dataSource}*/}
        {/*/>*/}
        <div style={containerStyle}>
          <div style={gridStyle} className="ag-theme-alpine">
            <AgGridReact
              rowData={rowData}
              columnDefs={columnDefs}
              defaultColDef={defaultColDef}
              onGridReady={onGridReady}
              pagination={true}></AgGridReact>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
