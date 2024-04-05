import { Sneaker } from '@/api/data/types/sneakers';

export interface ProductCardType
  extends Pick<
    Sneaker,
    | 'slug'
    | 'brand_logo'
    | 'original_picture_url'
    | 'name'
    | 'gender'
    | 'category'
    | 'retail_price_cents'
  > {}
