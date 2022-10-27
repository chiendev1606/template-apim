import { Avatar, Col, Dropdown, Menu, Row, Select, Space, Typography } from 'antd';
// import { useAppDispatch } from 'hooks/hookStore';
// import { changeLanguage } from 'i18next';
// import { useTranslation } from 'react-i18next';
// import { useSelector } from 'react-redux';
// import { history } from 'utils/history';
// import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// import { changeLanguageInput, collapseSidebar } from 'store/common/commonSlice';
// import { changeLanguageInput } from 'store/common/commonSlice';
import './styles/_header.scss';

const { Option } = Select;

const items = [
  { label: 'Logout', key: 'item-1' }, // remember to pass the key prop
];

const Header = () => {
  // const { i18n } = useTranslation();
  // const dispatch = useAppDispatch();O
  // const navigate = useNavigate();
  const location = useLocation();
  // const collapsed = useSelector((state: any) => state.common.isCloseSidebar);

  // const toggleLayout: void = () => {
  //   dispatch(collapseSidebar());
  // };
  // useEffect(() => {
  //   console.log('Location change', params, location);
  // }, [location]);

  // const onChangeLang = (key: string): void => {
  //   switch (key) {
  //     case 'vi':
  //       i18n.changeLanguage(key);
  //       dispatch(changeLanguageInput('vi'));
  //       break;
  //     case 'en':
  //       i18n.changeLanguage(key);
  //       dispatch(changeLanguageInput('en'));
  //       break;
  //   }
  // };

  // const menuProfile: JSX.Element = ;
  // const logout = async () => {
  //   await destroyLogged();
  //   saveAuth(null);
  //   // console.log(getAccessToken(), 'TOKEN');
  //   // history.push('/login');
  //   navigate('/login');
  // };

  return (
    <>
      <header
        style={{ position: 'sticky', zIndex: '10000000000' }}
        className="header d-flex justify-content-between align-items-center bg-color-light top-0">
        <Row>
          <Col span={12}>
            <Typography.Title level={3} className="margin-0">
              {location.pathname === '/order' ? 'Danh sách đơn hàng' : ''}
            </Typography.Title>
            {/* <a href="javscript:;" className="header__toggle" onClick={toggleLayout}>
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </a> */}
          </Col>
          <Col span={12} className="text-right">
            <Space>
              <div>
                <Select
                  dropdownStyle={{ padding: '0.7rem 0' }}
                  defaultValue="vi"
                  className="language__select  antd-select-custom"
                  bordered={false}
                  style={{ width: 150, zIndex: '10000000000' }}>
                  <Option value="vi">Korean</Option>
                  <Option value="en">English</Option>
                </Select>
              </div>
              <Dropdown overlay={() => <Menu items={items} />} placement="bottom">
                <Avatar
                  size="large"
                  src={'https://i.pravatar.cc/300'}
                  style={{ backgroundColor: '#87d068' }}
                  icon={<i className="icon icon-bell2" />}
                />
              </Dropdown>
            </Space>
          </Col>
        </Row>
      </header>
    </>
  );
};

export default Header;
