// import HttpService from 'utils/http';
import { ParamFilter } from '../model/OrderModel';

export const getByParams = async (params: ParamFilter) => {
  // Fake for FE pass Login:
  if (!params) {
    return Promise.reject({ code: 400, data: null, message: ['Email/Password invalid'] });
  }
  const numOrder = 10;
  const orders = [];
  for (let i = 1; i <= numOrder; i++) {
    const itemOrder = {
      code: `order${i}`,
      phone: '0123456789',
      customer: `Nguyen ${i}`,
      city: 'Hà Nội',
      district: 'Cầu giấy',
      typeOrder: 1,
      price: 150900 + i,
      priceReceived: 190000 + i,
      paymentMethod: i % 2 === 0 ? 2 : 1,
      status: Math.floor(Math.random() * 5),
    };
    orders.push(itemOrder);
  }
  return Promise.resolve({ list: orders, paging: { total: 1, limit: 10, pageIndex: 1, totalRecord: numOrder } });
};
