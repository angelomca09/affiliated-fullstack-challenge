export type SaleType = "1" | "2" | "3" | "4"

export interface ISale {
  sale_id?: number;
  date: string;
  product: string;
  seller: string;
  type: SaleType;
  value: number;
}

export type ISellerSale = Omit<ISale, "seller">

export interface ISeller {
  name: string;
  sales: ISellerSale[];
  total: number;
}

export default ISale