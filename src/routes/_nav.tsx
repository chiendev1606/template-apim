import { AppstoreOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';

export default {
  items: [
    { id: 1, name: '대시보드', url: '/', icon: <AppstoreOutlined /> },
    {
      id: 2,
      name: '  에이전트 관리  ',
      url: '/agents',
      icon: <ShoppingCartOutlined />,
      children: [
        {
          id: 3,
          name: ' 에이전트 트리뷰 ',
          url: '/agents/list',
          icon: <AppstoreOutlined />,
        },
        {
          id: 4,
          name: ' 에이전트 목록 ',
          url: '/agents/point_transactions',
          icon: <AppstoreOutlined />,
        },
      ],
    },
    { id: 7, name: ' 대시보드 ', url: '/transactions', icon: <UserOutlined /> },
  ],
};
