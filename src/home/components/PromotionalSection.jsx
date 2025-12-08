'use client';

import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function PromotionalSection() {
  const promotions = [
    {
      id: 1,
      icon: 'TruckIcon',
      title: 'Envío Gratis',
      description: 'En compras superiores a $200.000',
      color: 'text-green-500'
    },
    {
      id: 2,
      icon: 'ShieldCheckIcon',
      title: 'Compra Segura',
      description: 'Protección del comprador garantizada',
      color: 'text-blue-500'
    },
    {
      id: 3,
      icon: 'RefreshIcon',
      title: 'Devoluciones Fáciles',
      description: 'Hasta 30 días para devoluciones',
      color: 'text-purple-500'
    },
    {
      id: 4,
      icon: 'SupportIcon',
      title: 'Soporte 24/7',
      description: 'Atención al cliente siempre disponible',
      color: 'text-cyan-500'
    }
  ];

  return (
    <div className="space-y-12">
      {/* Benefits Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {promotions?.map((promo) => (
          <div
            key={promo?.id}
            className="bg-surface border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-200"
          >
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 flex items-center justify-center bg-muted rounded-full">
                <Icon 
                  name={promo?.icon} 
                  size={32} 
                  variant="outline"
                  className={promo?.color}
                />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              {promo?.title}
            </h3>
            <p className="text-sm text-text-secondary">
              {promo?.description}
            </p>
          </div>
        ))}
      </div>

      {/* Call to Action Banner */}
      <div className="relative bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl overflow-hidden">
        <div className="relative px-6 py-12 sm:px-12 sm:py-16 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            ¿Listo para comprar?
          </h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            Explora nuestro catálogo completo de productos tecnológicos con los mejores precios del mercado
          </p>
          <Link
            href="/product-catalog"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200 shadow-lg"
          >
            <span>Ver Todos los Productos</span>
            <Icon name="ArrowRightIcon" size={20} variant="outline" />
          </Link>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>
    </div>
  );
}