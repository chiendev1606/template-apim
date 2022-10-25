export interface FilterListInit {
  page: number;
  limit: number;
  keyword: string;
  sort: string;
  column: string;
}

export interface ObjAny {
  [key: string]: any;
}
