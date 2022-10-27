import React, { useState } from 'react';
import { Button, Col, DatePicker, Divider, Radio, Row, Select, Space, Table, Typography } from 'antd';
import { CheckOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import './../styles/dashboard.scss';
import { ColumnsType } from 'antd/es/table';

const { Title } = Typography;
const { Option } = Select;

interface DataType {
  key: string | number;
  name: string;
  age: number;
  address: string;
  tags: string;
  [props: string]: any;
}

const dataSource: DataType[] = [];

for (let i = 0; i < 100; i++) {
  dataSource.push({
    key: i,
    name: 'Mike' + i,
    age: i + 10,
    address: '10 Downing Street' + i,
    tags: '123',
    tags1: '234',
    tags2: '234',
    tags3: '36534',
    tags4: '345',
    tags5: '345345',
    tags6: '35435',
  });
}

const columns: ColumnsType<DataType> = [
  {
    title: '트랜잭션ID',
    dataIndex: 'name',
    key: 'name',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: '소속 에이전트',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '유저',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '타입',
    key: 'tags',
    dataIndex: 'tags',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: '상태',
    key: 'tags',
    dataIndex: 'tags1',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: '벤더',
    key: 'tags',
    dataIndex: 'tags2',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: '게임',
    key: 'tags',
    dataIndex: 'tags3',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: '처리금액',
    key: 'tags',
    dataIndex: 'tags4',
  },
  {
    title: '이전금액',
    key: 'tags',
    dataIndex: 'tags5',
  },
  {
    title: '처리일',
    key: 'tags',
    dataIndex: 'tags6',
  },
];

const Dashboard: React.FC = (): JSX.Element => {
  // const { t } = useTranslation();
  const [hasCalc, setHasCalc] = useState(false);

  const toggleCalc = () => setHasCalc(!hasCalc);

  return (
    <div className="dashboard">
      <div className="dashboard__wrap panel full-width">
        <div style={{ padding: '1rem' }}>
          <Title level={2}>게임 내역</Title>
          <Title level={4}>검색</Title>
          <Row gutter={[10, 10]} style={{ width: '100%', marginTop: '20px' }}>
            <Col span={9}>소속 에이전트</Col>
            <Col span={15}>
              <Select size="large" defaultValue="lucy" style={{ width: '100%' }}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                  Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </Col>
            <Divider />
            <Col span={9}>벤더</Col>
            <Col span={15}>
              <Select size="large" defaultValue="lucy" style={{ width: '100%' }}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                  Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </Col>
            <Divider />
            <Col span={9}>기간</Col>
            <Col span={15}>
              <Row gutter={[20, 0]}>
                <Col span={12}>
                  <DatePicker size="large" style={{ width: '100%' }} showTime />
                </Col>
                <Col span={12}>
                  <DatePicker size="large" style={{ width: '100%' }} showTime />
                </Col>
              </Row>
            </Col>
            <Divider />
            <Col span={9}>타입</Col>
            <Col span={15}>
              <Radio.Group>
                <Radio value={1}>전체</Radio>
                <Radio value={2}>BET</Radio>
                <Radio value={3}>WIN</Radio>
              </Radio.Group>
            </Col>
            <Divider />
            <Col span={9}>상태</Col>
            <Col span={15}>
              <Radio.Group>
                <Radio value={1}>전체</Radio>
                <Radio value={2}>성공</Radio>
                <Radio value={3}>베팅취소</Radio>
              </Radio.Group>
            </Col>
            <Divider />
            <Col span={9}>상세내역 여부</Col>
            <Col span={15}>
              <Radio.Group>
                <Radio value={1}>전체</Radio>
                <Radio value={2}>성공</Radio>
                <Radio value={3}>대기</Radio>
              </Radio.Group>
            </Col>
          </Row>
        </div>
        <Button
          style={{ marginTop: '20px', fontSize: '20px', fontWeight: 700 }}
          size="large"
          type={'primary'}
          onClick={toggleCalc}
          className="full-width">
          검색
        </Button>
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
      <div style={{ marginTop: '10px' }}>
        <Table
          columns={columns}
          rowKey={'key'}
          pagination={{ defaultPageSize: 5, showSizeChanger: true, pageSizeOptions: ['5', '10', '20', '30'] }}
          dataSource={dataSource}
        />
      </div>
    </div>
  );
};

export default Dashboard;
