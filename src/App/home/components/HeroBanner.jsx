'use client';

import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';
import Icon from '@/components/ui/AppIcon';

export default function HeroBanner({ banners, currentIndex, onPrev, onNext, onDotClick }) {
  const currentBanner = banners?.[currentIndex];

  if (!currentBanner) return null;

  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden bg-slate-900">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <Image
          src={currentBanner?.bgImage}
          alt={currentBanner?.bgAlt}
          fill
          priority
          className="object-cover"
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${currentBanner?.gradient}`} />
      </div>
      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl space-y-6 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {currentBanner?.title}
          </h1>
          <p className="text-xl md:text-2xl font-medium">
            {currentBanner?.subtitle}
          </p>
          <p className="text-lg md:text-xl text-white/90">
            {currentBanner?.description}
          </p>
          <Link
            href={currentBanner?.ctaLink}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200 shadow-lg"
          >
            <span>{currentBanner?.ctaText}</span>
            <Icon name="ArrowRightIcon" size={20} variant="outline" />
          </Link>
        </div>
      </div>
      {/* Navigation Arrows */}
      <button
        type="button"
        onClick={onPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all duration-200"
        aria-label="Banner anterior"
      >
        <Icon name="ChevronLeftIcon" size={28} variant="outline" className="text-white" />
      </button>
      <button
        type="button"
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all duration-200"
        aria-label="Siguiente banner"
      >
        <Icon name="ChevronRightIcon" size={28} variant="outline" className="text-white" />
      </button>
      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-3">
        {banners?.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => onDotClick(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? 'w-8 h-3 bg-white' :'w-3 h-3 bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Ir al banner ${index + 1}`}
            aria-current={index === currentIndex}
          />
        ))}
      </div>
    </div>
  );
}

HeroBanner.propTypes = {
  banners: PropTypes?.arrayOf(
    PropTypes?.shape({
      id: PropTypes?.number?.isRequired,
      title: PropTypes?.string?.isRequired,
      subtitle: PropTypes?.string?.isRequired,
      description: PropTypes?.string?.isRequired,
      ctaText: PropTypes?.string?.isRequired,
      ctaLink: PropTypes?.string?.isRequired,
      bgImage: PropTypes?.string?.isRequired,
      bgAlt: PropTypes?.string?.isRequired,
      gradient: PropTypes?.string?.isRequired
    })
  )?.isRequired,
  currentIndex: PropTypes?.number?.isRequired,
  onPrev: PropTypes?.func?.isRequired,
  onNext: PropTypes?.func?.isRequired,
  onDotClick: PropTypes?.func?.isRequired
};