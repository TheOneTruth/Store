'use client';

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import CartItem from './CartItem';
import OrderSummary from './OrderSummary';
import EmptyCart from './EmptyCart';

export default function ShoppingCartInteractive({ initialCartItems }) {
  const [cartItems, setCartItems] = useState(initialCartItems);

  useEffect(() => {
    console.log('Carrito de compras cargado con', cartItems?.length, 'productos');
  }, []);

  const handleQuantityChange = (itemId, newQuantity) => {
    setCartItems(prevItems =>
      prevItems?.map(item =>
        item?.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (itemId) => {
    setCartItems(prevItems => prevItems?.filter(item => item?.id !== itemId));
  };

  const calculateSubtotal = () => {
    return cartItems?.reduce((sum, item) => sum + (item?.price * item?.quantity), 0);
  };

  const calculateTax = (subtotal) => {
    return subtotal * 0.21; // 21% IVA
  };

  const subtotal = calculateSubtotal();
  const tax = calculateTax(subtotal);
  const total = subtotal + tax;

  if (cartItems?.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm" aria-label="Breadcrumb">
            <Link
              href="/product-catalog"
              className="text-text-secondary hover:text-primary transition-colors duration-150"
            >
              Catálogo
            </Link>
            <Icon name="ChevronRightIcon" size={16} variant="outline" className="text-text-secondary" />
            <span className="text-text-primary font-medium">Carrito de Compras</span>
          </nav>
        </div>
      </div>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-text-primary mb-2">
            Carrito de Compras
          </h1>
          <p className="text-text-secondary">
            {cartItems?.length} {cartItems?.length === 1 ? 'producto' : 'productos'} en tu carrito
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems?.map(item => (
              <CartItem
                key={item?.id}
                item={item}
                onQuantityChange={handleQuantityChange}
                onRemove={handleRemoveItem}
              />
            ))}

            {/* Continue Shopping Link */}
            <Link
              href="/product-catalog"
              className="flex items-center gap-2 text-primary hover:underline font-medium mt-6"
            >
              <Icon name="ArrowLeftIcon" size={20} variant="outline" />
              <span>Continuar Comprando</span>
            </Link>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <OrderSummary
              subtotal={subtotal}
              tax={tax}
              total={total}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

ShoppingCartInteractive.propTypes = {
  initialCartItems: PropTypes?.arrayOf(
    PropTypes?.shape({
      id: PropTypes?.number?.isRequired,
      name: PropTypes?.string?.isRequired,
      category: PropTypes?.string?.isRequired,
      price: PropTypes?.number?.isRequired,
      quantity: PropTypes?.number?.isRequired,
      image: PropTypes?.string?.isRequired,
      alt: PropTypes?.string?.isRequired
    })
  )?.isRequired
};