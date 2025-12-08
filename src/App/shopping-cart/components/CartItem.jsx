'use client';

import { useState } from 'react';
import PropTypes from 'prop-types';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export default function CartItem({ item, onQuantityChange, onRemove }) {
  const [quantity, setQuantity] = useState(item?.quantity);

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity < 1) return;
    setQuantity(newQuantity);
    onQuantityChange(item?.id, newQuantity);
    console.log(`Cantidad actualizada para ${item?.name}: ${newQuantity}`);
  };

  const handleRemove = () => {
    onRemove(item?.id);
    console.log(`Producto eliminado del carrito: ${item?.name}`);
  };

  const itemTotal = (item?.price * quantity);

  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 bg-surface border border-border rounded-lg hover:shadow-md transition-shadow duration-200">
      {/* Product Image */}
      <div className="flex-shrink-0 w-full sm:w-32 h-32 overflow-hidden rounded-lg bg-muted">
        <AppImage
          src={item?.image}
          alt={item?.alt}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Product Details */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-text-primary mb-1">
            {item?.name}
          </h3>
          <p className="text-sm text-text-secondary mb-2">
            {item?.category}
          </p>
          <p className="text-lg font-bold text-primary">
            ${item?.price?.toLocaleString('es-CO')}
          </p>
        </div>

        {/* Quantity Controls */}
        <div className="flex items-center gap-4 mt-4">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleQuantityChange(quantity - 1)}
              disabled={quantity <= 1}
              className="flex items-center justify-center w-8 h-8 rounded-md bg-muted hover:bg-border disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-150"
              aria-label="Disminuir cantidad"
            >
              <Icon name="MinusIcon" size={16} variant="outline" />
            </button>
            <span className="w-12 text-center font-semibold text-text-primary">
              {quantity}
            </span>
            <button
              type="button"
              onClick={() => handleQuantityChange(quantity + 1)}
              className="flex items-center justify-center w-8 h-8 rounded-md bg-muted hover:bg-border transition-colors duration-150"
              aria-label="Aumentar cantidad"
            >
              <Icon name="PlusIcon" size={16} variant="outline" />
            </button>
          </div>

          <button
            type="button"
            onClick={handleRemove}
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-destructive hover:bg-destructive hover:text-destructive-foreground rounded-md transition-colors duration-150"
            aria-label={`Eliminar ${item?.name} del carrito`}
          >
            <Icon name="TrashIcon" size={16} variant="outline" />
            <span className="hidden sm:inline">Eliminar</span>
          </button>
        </div>
      </div>
      {/* Item Total (Desktop) */}
      <div className="hidden sm:flex flex-col items-end justify-between">
        <p className="text-xl font-bold text-text-primary">
          ${itemTotal?.toLocaleString('es-CO')}
        </p>
      </div>
      {/* Item Total (Mobile) */}
      <div className="sm:hidden flex justify-between items-center pt-2 border-t border-border">
        <span className="text-sm text-text-secondary">Subtotal:</span>
        <p className="text-xl font-bold text-text-primary">
          ${itemTotal?.toLocaleString('es-CO')}
        </p>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes?.shape({
    id: PropTypes?.number?.isRequired,
    name: PropTypes?.string?.isRequired,
    category: PropTypes?.string?.isRequired,
    price: PropTypes?.number?.isRequired,
    quantity: PropTypes?.number?.isRequired,
    image: PropTypes?.string?.isRequired,
    alt: PropTypes?.string?.isRequired
  })?.isRequired,
  onQuantityChange: PropTypes?.func?.isRequired,
  onRemove: PropTypes?.func?.isRequired
};