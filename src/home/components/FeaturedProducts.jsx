'use client';

import PropTypes from 'prop-types';

import Image from 'next/image';
import Icon from '@/components/ui/AppIcon';

export default function FeaturedProducts({ products }) {
  const formatPrice = (price) => {
    return `$${price?.toLocaleString('es-CO')}`;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products?.map((product) => (
        <div
          key={product?.id}
          className="group bg-surface border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          {/* Product Image */}
          <div className="relative aspect-square bg-muted overflow-hidden">
            <Image
              src={product?.image}
              alt={product?.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            
            {/* Badge */}
            {product?.badge && (
              <div className="absolute top-3 left-3 px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                {product?.badge}
              </div>
            )}

            {/* Discount Badge */}
            {product?.discount > 0 && (
              <div className="absolute top-3 right-3 px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded-full">
                -{product?.discount}%
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="p-5 space-y-3">
            <h3 className="font-semibold text-text-primary line-clamp-2 group-hover:text-primary transition-colors">
              {product?.name}
            </h3>
            
            <p className="text-sm text-text-secondary line-clamp-2">
              {product?.description}
            </p>

            {/* Rating */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                {[...Array(5)]?.map((_, i) => (
                  <Icon
                    key={i}
                    name="StarIcon"
                    size={16}
                    variant={i < Math.floor(product?.rating) ? 'solid' : 'outline'}
                    className={i < Math.floor(product?.rating) ? 'text-yellow-400' : 'text-gray-300'}
                  />
                ))}
              </div>
              <span className="text-xs text-text-secondary">
                ({product?.reviews?.toLocaleString('es-CO')})
              </span>
            </div>

            {/* Price */}
            <div className="space-y-1">
              {product?.originalPrice > 0 && (
                <p className="text-sm text-text-secondary line-through">
                  {formatPrice(product?.originalPrice)}
                </p>
              )}
              <p className="text-2xl font-bold text-primary">
                {formatPrice(product?.price)}
              </p>
            </div>

            {/* Add to Cart Button */}
            <button
              type="button"
              className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-200"
            >
              <Icon name="ShoppingCartIcon" size={20} variant="outline" />
              <span>Añadir al Carrito</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

FeaturedProducts.propTypes = {
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
      rating: PropTypes?.number?.isRequired,
      reviews: PropTypes?.number?.isRequired,
      badge: PropTypes?.string
    })
  )?.isRequired
};