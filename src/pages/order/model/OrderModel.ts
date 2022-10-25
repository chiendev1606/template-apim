import { ObjAny } from 'store/common/interface';

export interface ParamFilterOrder {
  code: string;
  type: number;
}

export type ParamFilter = ParamFilterOrder & ObjAny;

export interface OrderTableItem {
  code: string;
  phone: string;
  customer: string;
  city: string;
  district: string;
  typeOrder: number;
  price: number;
  priceReceived: number;
  paymentMethod: number;
  status: number;
}
