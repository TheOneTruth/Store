import ProductCard from './ProductCard';
import PropTypes from 'prop-types';

export default function ProductGrid({ products, onAddToCart }) {
  if (products?.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-xl text-text-secondary">
          No se encontraron productos en esta categoría
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products?.map((product) => (
        <ProductCard
          key={product?.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}

ProductGrid.propTypes = {
  products: PropTypes?.arrayOf(
    PropTypes?.shape({
      id: PropTypes?.number?.isRequired,
      name: PropTypes?.string?.isRequired,
      description: PropTypes?.string?.isRequired,
      price: PropTypes?.number?.isRequired,
      originalPrice: PropTypes?.number,
      discount: PropTypes?.number,
      image: PropTypes?.string?.isRequired,
      alt: PropTypes?.string?.isRequired,
      category: PropTypes?.string?.isRequired,
      rating: PropTypes?.number?.isRequired,
      reviews: PropTypes?.number?.isRequired,
      isNew: PropTypes?.bool,
      popularity: PropTypes?.number?.isRequired
    })
  )?.isRequired,
  onAddToCart: PropTypes?.func?.isRequired
};