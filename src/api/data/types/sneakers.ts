export type Category = 'basketball' | 'lifestyle' | 'running' | 'skateboarding';
export type Brand =
  | 'Air Jordan'
  | 'Champion'
  | 'Converse'
  | 'Gucci'
  | 'Nike'
  | 'Vans'
  | 'adidas';
export type Gender = 'men' | 'youth' | 'women';

export interface Sneaker {
  box_condition: string;
  brand_name: Brand[];
  brand_logo?: string;
  category: Category[];
  collection_slugs: string[];
  color: string;
  designer: string;
  details: string;
  gender: Gender[];
  grid_picture_url: string;
  has_picture: boolean;
  has_stock: boolean;
  id: number;
  keywords: string[];
  main_picture_url: string;
  midsole?: string;
  name: string;
  nickname: string;
  original_picture_url: string;
  product_template_id: number;
  release_date?: string;
  release_date_unix?: number;
  release_year?: number;
  retail_price_cents?: number;
  shoe_condition: string;
  silhouette: string;
  size_range: number[];
  sku: string;
  slug: string;
  status: string;
  description?: string;
  upper_material?: string;
}