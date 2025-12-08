import PropTypes from 'prop-types';

export default function OrderSummary({ subtotal, tax, total }) {
  return (
    <div className="bg-surface border border-border rounded-lg p-6 sticky top-24">
      <h2 className="text-xl font-bold text-text-primary mb-6">
        Resumen del Pedido
      </h2>
      <div className="space-y-4 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-text-secondary">Subtotal</span>
          <span className="font-semibold text-text-primary">
            ${subtotal?.toLocaleString('es-CO')}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-text-secondary">IVA (19%)</span>
          <span className="font-semibold text-text-primary">
            ${tax?.toLocaleString('es-CO')}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-text-secondary">Envío</span>
          <span className="font-semibold text-success">
            Gratis
          </span>
        </div>

        <div className="border-t border-border pt-4">
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-text-primary">Total</span>
            <span className="text-2xl font-bold text-primary">
              ${total?.toLocaleString('es-CO')}
            </span>
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={() => console.log('Procediendo al checkout con total: $' + total?.toLocaleString('es-CO'))}
        className="w-full py-3 px-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity duration-150 shadow-sm"
      >
        Proceder al Pago
      </button>
      <div className="mt-4 flex items-center justify-center gap-2 text-sm text-text-secondary">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
        </svg>
        <span>Pago seguro garantizado</span>
      </div>
    </div>
  );
}

OrderSummary.propTypes = {
  subtotal: PropTypes?.number?.isRequired,
  tax: PropTypes?.number?.isRequired,
  total: PropTypes?.number?.isRequired
};