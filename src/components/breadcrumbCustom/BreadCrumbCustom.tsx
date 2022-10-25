import { Breadcrumb } from 'antd';
import React from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

import { RightOutlined } from '@ant-design/icons';

export const breadcrumbNameMap: { [name: string]: string } = {
  '/': 'Trang chủ',
  '/master-data': 'Master Data',
  '/master-data/warehouse-group': 'Nhóm kho',
  '/master-data/learning-packages': 'Danh sách gói học',
};

const BreadCrumbCustom = () => {
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter((i) => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });

  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">Trang chủ</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);

  return (
    <div>
      <Breadcrumb separator={<RightOutlined />}>{breadcrumbItems}</Breadcrumb>
    </div>
  );
};

export default BreadCrumbCustom;
