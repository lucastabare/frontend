export interface Picture { 
  id: string; 
  url: string; 
}

export interface Shipping { 
  free_shipping: 
  boolean; 
  mode: string; 
}

export interface Stock { 
  available: number; 
  sold: number; 
}

export interface Rating { 
  user: string; 
  stars: number; 
  comment: string; 
  date?: string; 
}

export interface Product {
  id: string;
  title: string;
  price: number;
  currency: string;
  condition: string;
  pictures: Picture[];
  thumbnail: string;
  permalink: string;
  seller_id: string;
  category?: string;
  brand?: string;
  tags?: string[];
  related_ids?: string[];
  shipping: Shipping;
  stock: Stock;
  attributes: string[];
  description: string;
  description_short?: string;
  description_long?: string;
  ratings: Rating[];
  rating_avg: number;
  specs?: ProductSpecs;
}

export interface Seller {
  id: string; nickname: string; city: string;
  sales: number; reputation: string; rating_average: number;
}

export interface PaymentMethod {
  id: string; name: string; type: string; installments: number[];
}

export type SpecGroup = Record<string, string>

export interface ProductSpecs {
  highlights?: SpecGroup;
  groups?: Record<string, SpecGroup>;
}