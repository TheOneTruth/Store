'use client';

import { useState, useEffect } from 'react';
import HeroSection from './HeroSection';
import CategoryFilter from './CategoryFilter';
import SortControls from './SortControls';
import ProductGrid from './ProductGrid';
import Footer from './Footer';
import Icon from '@/components/ui/AppIcon';
import PropTypes from 'prop-types';

export default function ProductCatalogInteractive({ initialProducts, initialCategories }) {
  const [products, setProducts] = useState(initialProducts);
  const [categories] = useState(initialCategories);
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');
  const [cartCount, setCartCount] = useState(0);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationProduct, setNotificationProduct] = useState(null);

  useEffect(() => {
    const savedCart = localStorage.getItem('electrostore_cart');
    if (savedCart) {
      try {
        const cartItems = JSON.parse(savedCart);
        setCartCount(cartItems?.length);
      } catch (error) {
        console.error('Error loading cart:', error);
      }
    }
  }, []);

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };

  const handleSortChange = (sortOption) => {
    setSortBy(sortOption);
  };

  const handleExploreClick = () => {
    const catalogSection = document.getElementById('catalog-section');
    if (catalogSection) {
      catalogSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleAddToCart = (product) => {
    console.log('Producto añadido al carrito:', {
      id: product?.id,
      nombre: product?.name,
      precio: product?.price,
      cantidad: 1,
      timestamp: new Date()?.toISOString()
    });

    try {
      const savedCart = localStorage.getItem('electrostore_cart');
      const cartItems = savedCart ? JSON.parse(savedCart) : [];
      
      const existingItemIndex = cartItems?.findIndex(item => item?.id === product?.id);
      
      if (existingItemIndex > -1) {
        cartItems[existingItemIndex].quantity += 1;
      } else {
        cartItems?.push({
          id: product?.id,
          name: product?.name,
          price: product?.price,
          image: product?.image,
          alt: product?.alt,
          quantity: 1
        });
      }
      
      localStorage.setItem('electrostore_cart', JSON.stringify(cartItems));
      setCartCount(cartItems?.length);
      
      setNotificationProduct(product);
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    } catch (error) {
      console.error('Error saving to cart:', error);
    }
  };

  const getFilteredProducts = () => {
    let filtered = activeCategory === 'all' 
      ? initialProducts 
      : initialProducts?.filter(p => p?.category === activeCategory);

    switch (sortBy) {
      case 'price-low':
        return [...filtered]?.sort((a, b) => a?.price - b?.price);
      case 'price-high':
        return [...filtered]?.sort((a, b) => b?.price - a?.price);
      case 'newest':
        return [...filtered]?.sort((a, b) => (b?.isNew ? 1 : 0) - (a?.isNew ? 1 : 0));
      case 'popularity':
      default:
        return [...filtered]?.sort((a, b) => b?.popularity - a?.popularity);
    }
  };

  const filteredProducts = getFilteredProducts();

  return (
    <div className="min-h-screen bg-background">
      {showNotification && notificationProduct && (
        <div className="fixed top-20 right-4 z-50 bg-success text-success-foreground px-6 py-4 rounded-lg shadow-xl flex items-center space-x-3 animate-slide-in">
          <Icon name="CheckCircleIcon" size={24} variant="solid" />
          <div>
            <p className="font-semibold">¡Añadido al carrito!</p>
            <p className="text-sm opacity-90">{notificationProduct?.name}</p>
          </div>
        </div>
      )}
      <div className="pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HeroSection onExploreClick={handleExploreClick} />
          
          <div id="catalog-section" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-text-primary">
                Nuestros Productos
              </h2>
              <p className="text-text-secondary">
                {filteredProducts?.length} productos encontrados
              </p>
            </div>

            <CategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
            />

            <SortControls
              sortBy={sortBy}
              onSortChange={handleSortChange}
            />

            <ProductGrid
              products={filteredProducts}
              onAddToCart={handleAddToCart}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

ProductCatalogInteractive.propTypes = {
  initialProducts: PropTypes?.arrayOf(
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
  initialCategories: PropTypes?.arrayOf(
    PropTypes?.shape({
      id: PropTypes?.string?.isRequired,
      name: PropTypes?.string?.isRequired,
      icon: PropTypes?.string?.isRequired,
      count: PropTypes?.number?.isRequired
    })
  )?.isRequired
};