import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import PropTypes from 'prop-types';

export default function ProductCard({ product, onAddToCart }) {
  return (
    <article className="group bg-surface rounded-xl border border-border shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="relative h-64 overflow-hidden bg-slate-100">
        <AppImage
          src={product?.image}
          alt={product?.alt}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {product?.isNew && (
          <span className="absolute top-3 right-3 px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full shadow-md">
            Nuevo
          </span>
        )}
        {product?.discount > 0 && (
          <span className="absolute top-3 left-3 px-3 py-1 bg-destructive text-destructive-foreground text-xs font-semibold rounded-full shadow-md">
            -{product?.discount}%
          </span>
        )}
      </div>
      <div className="p-5 space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-text-primary line-clamp-2 group-hover:text-primary transition-colors duration-200">
            {product?.name}
          </h3>
          <p className="text-sm text-text-secondary line-clamp-2">
            {product?.description}
          </p>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            {[...Array(5)]?.map((_, index) => (
              <Icon
                key={index}
                name="StarIcon"
                size={16}
                variant={index < Math.floor(product?.rating) ? 'solid' : 'outline'}
                className={index < Math.floor(product?.rating) ? 'text-yellow-500' : 'text-slate-300'}
              />
            ))}
          </div>
          <span className="text-sm text-text-secondary">
            ({product?.reviews} reseñas)
          </span>
        </div>
        
        <div className="flex items-center justify-between pt-2 border-t border-border">
          <div className="space-y-1">
            {product?.discount > 0 && (
              <p className="text-sm text-text-secondary line-through">
                ${product?.originalPrice?.toLocaleString('es-CO')}
              </p>
            )}
            <p className="text-2xl font-bold text-primary">
              ${product?.price?.toLocaleString('es-CO')}
            </p>
          </div>
          
          <button
            onClick={() => onAddToCart(product)}
            className="flex items-center space-x-2 px-5 py-3 bg-primary text-primary-foreground rounded-lg font-semibold shadow-md hover:bg-blue-700 hover:scale-105 transition-all duration-200"
            aria-label={`Añadir ${product?.name} al carrito`}
          >
            <Icon name="ShoppingCartIcon" size={20} variant="outline" />
            <span className="hidden sm:inline">Añadir</span>
          </button>
        </div>
      </div>
    </article>
  );
}

ProductCard.propTypes = {
  product: PropTypes?.shape({
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
  })?.isRequired,
  onAddToCart: PropTypes?.func?.isRequired
};