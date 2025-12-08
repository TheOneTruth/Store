import Icon from '@/components/ui/AppIcon';
import PropTypes from 'prop-types';

export default function SortControls({ sortBy, onSortChange }) {
  const sortOptions = [
    { id: 'popularity', label: 'Más Popular', icon: 'FireIcon' },
    { id: 'price-low', label: 'Precio: Menor a Mayor', icon: 'ArrowUpIcon' },
    { id: 'price-high', label: 'Precio: Mayor a Menor', icon: 'ArrowDownIcon' },
    { id: 'newest', label: 'Más Recientes', icon: 'SparklesIcon' }
  ];

  return (
    <div className="flex items-center justify-between mb-6 p-4 bg-surface rounded-lg border border-border shadow-sm">
      <div className="flex items-center space-x-2 text-text-secondary">
        <Icon name="AdjustmentsIcon" size={20} variant="outline" />
        <span className="font-medium">Ordenar por:</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {sortOptions?.map((option) => {
          const isActive = sortBy === option?.id;
          return (
            <button
              key={option?.id}
              onClick={() => onSortChange(option?.id)}
              className={`
                flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium
                transition-all duration-200
                ${isActive
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-muted text-text-secondary hover:bg-slate-200 hover:text-text-primary'
                }
              `}
              aria-label={`Ordenar por ${option?.label}`}
              aria-pressed={isActive}
            >
              <Icon name={option?.icon} size={16} variant={isActive ? 'solid' : 'outline'} />
              <span className="hidden sm:inline">{option?.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

SortControls.propTypes = {
  sortBy: PropTypes?.string?.isRequired,
  onSortChange: PropTypes?.func?.isRequired
};