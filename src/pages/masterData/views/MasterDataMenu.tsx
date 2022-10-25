import { Col, Row, Space, Typography } from 'antd';
import BreadCrumbCustom from 'components/breadcrumbCustom/BreadCrumbCustom';
import { Link } from 'react-router-dom';
import './../styles/master-data.scss';

const { Title } = Typography;

const MasterDataMenu = () => {
  return (
    <Space direction="vertical" size={20} className="full-width">
      <BreadCrumbCustom />

      <Title level={3}>Master Data</Title>

      <div className="width-100 master-data__menu-box">
        <Row gutter={[20, 40]}>
          <Col span={8}>
            <Space className="full-width" direction="vertical" size={10}>
              <Title level={4}>Quản lý tồn kho</Title>
              <Link to="/master-data/warehouse-group" className="master-data__menu">
                Nhóm kho
              </Link>
              <Link to="/master-data" className="master-data__menu">
                Kho hàng
              </Link>
              <Link to="/master-data" className="master-data__menu">
                Đơn vị tính
              </Link>
            </Space>
          </Col>
          <Col span={8}>
            <Space className="full-width" direction="vertical" size={10}>
              <Title level={4}>Quản lý khách hàng</Title>
              <Link to="/master-data" className="master-data__menu">
                Nhóm khách hàng
              </Link>
              <Link to="/master-data" className="master-data__menu">
                Kho hàng
              </Link>
              <Link to="/master-data" className="master-data__menu">
                Số địa chỉ khách hàng
              </Link>
            </Space>
          </Col>
          <Col span={8}>
            <Space className="full-width" direction="vertical" size={10}>
              <Title level={4}>Quản lý sản phẩm và gói học</Title>
              <Link to="/master-data" className="master-data__menu">
                Môn học
              </Link>
              <Link to="/master-data" className="master-data__menu">
                Nhóm sản phẩm
              </Link>
              <Link to="/master-data" className="master-data__menu">
                Loại sản phẩm
              </Link>
              <Link to="/master-data" className="master-data__menu">
                Sản phẩm
              </Link>
              <Link to="/master-data" className="master-data__menu">
                Gói học
              </Link>
            </Space>
          </Col>
        </Row>
      </div>
    </Space>
  );
};

export default MasterDataMenu;
