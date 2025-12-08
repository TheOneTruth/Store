import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import PropTypes from 'prop-types';

export default function HeroSection({ onExploreClick }) {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-2xl shadow-lg mb-8">
      <div className="absolute inset-0">
        <AppImage
          src="https://images.unsplash.com/photo-1612534472774-a7d52cdf4836"
          alt="Modern gaming setup with RGB keyboard, wireless mouse, and premium headphones on dark desk"
          className="w-full h-full object-cover"
          priority />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent" />
      </div>
      
      <div className="relative h-full flex items-center px-6 md:px-12 lg:px-16">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Accesorios Electrónicos Premium
          </h1>
          <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
            Descubre nuestra colección exclusiva de periféricos de alta calidad para gaming, trabajo y entretenimiento
          </p>
          <button
            onClick={onExploreClick}
            className="inline-flex items-center space-x-3 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg shadow-lg hover:bg-blue-700 transition-all duration-200 hover:scale-105"
            aria-label="Explorar catálogo de productos">

            <span>Explorar Catálogo</span>
            <Icon name="ArrowRightIcon" size={24} variant="outline" />
          </button>
        </div>
      </div>
    </section>);

}

HeroSection.propTypes = {
  onExploreClick: PropTypes?.func?.isRequired
};