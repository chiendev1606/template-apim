import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout, Spin } from 'antd';
// import { isLogin } from 'utils/jwt';
// // import Loadable from 'react-loadable';
import routes from '../routes/routes';
// import PermissionContent from './../middleware/PermissionContent';

const Header = React.lazy(() => import('./Header'));
const Sidebar = React.lazy(() => import('./Sidebar'));

const { Content } = Layout;

const loading = () => (
  // <div className="animated fadeIn text-center">Loading 1...</div>
  <Spin />
);

// const Page404 = Loadable({
//   loader: () => import('modules/Commons/_views/Page404'),
//   loading
// });

const DefaultLayout = () => {
  // const navigate = useNavigate();
  // const authLogged = isLogin();

  // useEffect((): void => {
  //   // console.log('Â', authLogged, location);
  //   if (!authLogged) {
  //     navigate('/login');
  //   }
  // }, []);
  // if (!authLogged) {
  //   return <></>;
  // }

  return (
    <Layout className="site-layout" style={{ minHeight: '100vh' }}>
      <Suspense fallback={loading()}>
        <Sidebar />
      </Suspense>
      <Layout className="main-layout">
        <Suspense fallback={loading()}>
          <Header />
        </Suspense>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div className="bg-main position-rel">
            <Suspense fallback={loading()}>
              <Routes>
                {routes.map((route, idx) => {
                  if (route.component) {
                    return <Route key={idx} path={route.path} element={<route.component />} />;
                  }
                  return null;
                })}
                {/* <Route element={<div />} /> */}
              </Routes>
            </Suspense>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;
