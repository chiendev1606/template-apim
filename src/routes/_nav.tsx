import { AppstoreOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';

export default {
  items: [
    { id: 1, name: '대시보드', url: '/', icon: <AppstoreOutlined /> },
    { id: 2, name: ' 최대 베팅금 제한 ', url: '/', icon: <AppstoreOutlined /> },
    {
      id: 3,
      name: '  에이전트 관리 ',
      url: '/',
      icon: <AppstoreOutlined />,
      children: [
        {
          id: 4,
          name: '  에이전트 트리뷰 ',
          url: '/agents/list',
          icon: <AppstoreOutlined />,
        },
        {
          id: 5,
          name: '  에이전트 목록  ',
          url: '/agents/point_transactions',
          icon: <AppstoreOutlined />,
        },
        {
          id: 6,
          name: '   포인트 트랜잭션 내역   ',
          url: '/agents/point_transactions',
          icon: <AppstoreOutlined />,
        },
        {
          id: 7,
          name: '    캐쉬 트랜잭션 내역   ',
          url: '/agents/point_transactions',
          icon: <AppstoreOutlined />,
        },
      ],
    },
    {
      id: 8,
      name: '   유저 관리   ',
      url: '/agents',
      icon: <ShoppingCartOutlined />,
      children: [
        {
          id: 9,
          name: '  유저 목록 ',
          url: '/agents/list',
          icon: <AppstoreOutlined />,
        },
        {
          id: 10,
          name: '  트랜잭션 내역 ',
          url: '/agents/point_transactions',
          icon: <AppstoreOutlined />,
        },
      ],
    },
    {
      id: 11,
      name: '  에이전트 보유금 관리  ',
      url: '/transactions',
      icon: <UserOutlined />,
      children: [
        {
          id: 12,
          name: '  신청 처리 내역  ',
          url: '/agents/list',
          icon: <AppstoreOutlined />,
        },
        {
          id: 13,
          name: ' 포인트 입금 신청  ',
          url: '/agents/point_transactions',
          icon: <AppstoreOutlined />,
        },
        {
          id: 14,
          name: '  캐쉬 출금 신청  ',
          url: '/agents/point_transactions',
          icon: <AppstoreOutlined />,
        },
      ],
    },
    {
      id: 15,
      name: ' 게임 내역 ',
      url: '/transactions',
      icon: <UserOutlined />,
    },
    {
      id: 16,
      name: ' 포인트 리포트 ',
      url: '/transactions',
      icon: <UserOutlined />,
      children: [
        {
          id: 17,
          name: ' 일자별 ',
          url: '/agents/list',
          icon: <AppstoreOutlined />,
        },
      ],
    },
    {
      id: 18,
      name: ' 벤더 ',
      url: '/transactions',
      icon: <UserOutlined />,
    },
    {
      id: 19,
      name: ' API ',
      url: '/transactions',
      icon: <UserOutlined />,
      children: [
        {
          id: 20,
          name: ' 기본 API (트랜스퍼) ',
          url: '/agents/list',
          icon: <AppstoreOutlined />,
        },
        {
          id: 21,
          name: ' 콜백 API (심리스) ',
          url: '/agents/list',
          icon: <AppstoreOutlined />,
        },
        {
          id: 22,
          name: ' 콜백 API 테스트 ',
          url: '/agents/list',
          icon: <AppstoreOutlined />,
        },
        {
          id: 22,
          name: ' 콜백 API 테스트 로그  ',
          url: '/agents/list',
          icon: <AppstoreOutlined />,
        },
        {
          id: 23,
          name: ' API 에러 로그  ',
          url: '/agents/list',
          icon: <AppstoreOutlined />,
        },
      ],
    },
  ],
};
