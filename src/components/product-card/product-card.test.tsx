import { ProductCard } from '@/components/product-card';
import { translateCategory } from '@/helpers/map-translations/translate-sneaker-category';
import { translateGender } from '@/helpers/map-translations/translate-sneaker-gender';
import { formatPrice } from '@/utils/format-price';
import { render, screen } from '@testing-library/react';
import { ImgHTMLAttributes } from 'react';
import { mockProduct } from './test-mock';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: ImgHTMLAttributes<HTMLImageElement>) => <img {...props} />,
}));

describe('ProductCard Component', () => {
  beforeEach(() => {
    render(<ProductCard product={mockProduct} />);
  });

  it('Deve renderizar o card de Produto com as informações corretas', () => {
    expect(screen.getByText(mockProduct.name)).toBeInTheDocument();

    expect(
      screen.getByText(translateGender(mockProduct.gender[0]))
    ).toBeInTheDocument();

    expect(
      screen.getByText(translateCategory(mockProduct.category[0]))
    ).toBeInTheDocument();

    expect(screen.getByTestId('card-price')).toHaveTextContent(
      formatPrice((mockProduct.retail_price_cents ?? 0) / 100)
    );
  });

  it('Deve renderizar a imagem do produto', () => {
    const productImage = screen.getByAltText(mockProduct.name);

    expect(productImage).toBeInTheDocument();
    expect(productImage).toHaveAttribute(
      'src',
      mockProduct.original_picture_url
    );
  });
});
