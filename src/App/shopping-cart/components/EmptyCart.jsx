import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-6">
        <Icon name="ShoppingCartIcon" size={48} variant="outline" className="text-text-secondary" />
      </div>

      <h2 className="text-2xl font-bold text-text-primary mb-2">
        Tu carrito está vacío
      </h2>

      <p className="text-text-secondary text-center mb-8 max-w-md">
        Parece que aún no has agregado ningún producto a tu carrito. ¡Explora nuestro catálogo y encuentra los mejores accesorios electrónicos!
      </p>

      <Link
        href="/product-catalog"
        className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity duration-150 shadow-sm"
      >
        <Icon name="ArrowLeftIcon" size={20} variant="outline" />
        <span>Continuar Comprando</span>
      </Link>
    </div>
  );
}