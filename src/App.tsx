import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import Loadable from 'react-loadable';
import loadable from '@loadable/component';
import 'antd/dist/antd.css';
import 'assets/scss/_style.scss';

// const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

const LoginPage = loadable(() => import('pages/auth/views/Login'));
const DefaultLayout = loadable(() => import('layouts/DefaultLayout'));
// const LoginPage = Loadable({
//   loader: () => import('pages/auth/views/Login'),
//   loading,
// });

// const DefaultLayout = Loadable({
//   loader: () => import('layouts/DefaultLayout'),
//   loading,
// });

export const App: React.FC = () => {
  // const { t } = useTranslation();
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/*" element={<DefaultLayout />} />
    </Routes>
  );
};
