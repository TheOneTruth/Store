'use client';

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import HeroBanner from './HeroBanner';
import FeaturedProducts from './FeaturedProducts';
import CategoryGrid from './CategoryGrid';
import PromotionalSection from './PromotionalSection';
import Footer from '@/app/product-catalog/components/Footer';

export default function HomeInteractive({ heroBanners, featuredProducts, categories }) {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-rotate hero banners every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying || !heroBanners?.length) return;

    const interval = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => 
        (prevIndex + 1) % heroBanners?.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, heroBanners?.length]);

  const handleBannerChange = (index) => {
    setCurrentBannerIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds of manual interaction
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handlePrevBanner = () => {
    const newIndex = currentBannerIndex === 0 
      ? heroBanners?.length - 1 
      : currentBannerIndex - 1;
    handleBannerChange(newIndex);
  };

  const handleNextBanner = () => {
    const newIndex = (currentBannerIndex + 1) % heroBanners?.length;
    handleBannerChange(newIndex);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner Section */}
      <section className="relative pt-16">
        <HeroBanner 
          banners={heroBanners}
          currentIndex={currentBannerIndex}
          onPrev={handlePrevBanner}
          onNext={handleNextBanner}
          onDotClick={handleBannerChange}
        />
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Featured Products Section */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-text-primary mb-3">
              Productos Destacados
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Los productos tecnológicos más vendidos en Amazon Colombia
            </p>
          </div>
          <FeaturedProducts products={featuredProducts} />
        </section>

        {/* Category Grid Section */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-text-primary mb-3">
              Explora por Categoría
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Encuentra exactamente lo que necesitas
            </p>
          </div>
          <CategoryGrid categories={categories} />
        </section>

        {/* Promotional Section */}
        <section>
          <PromotionalSection />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

HomeInteractive.propTypes = {
  heroBanners: PropTypes?.arrayOf(
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
  featuredProducts: PropTypes?.arrayOf(
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
  )?.isRequired,
  categories: PropTypes?.arrayOf(
    PropTypes?.shape({
      id: PropTypes?.string?.isRequired,
      name: PropTypes?.string?.isRequired,
      description: PropTypes?.string?.isRequired,
      icon: PropTypes?.string?.isRequired,
      productCount: PropTypes?.number?.isRequired,
      image: PropTypes?.string?.isRequired,
      alt: PropTypes?.string?.isRequired
    })
  )?.isRequired
};