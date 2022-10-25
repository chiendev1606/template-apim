import React from 'react';
const Dashboard = React.lazy(() => import('pages/dashboard/views/Dashboard'));

const routes = [{ path: '/', name: '대시보드', component: Dashboard }];

export default routes;
