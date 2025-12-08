import Icon from '@/components/ui/AppIcon';
import PropTypes from 'prop-types';

export default function CategoryFilter({ categories, activeCategory, onCategoryChange }) {
  return (
    <div className="flex flex-wrap gap-3 mb-6">
      {categories?.map((category) => {
        const isActive = activeCategory === category?.id;
        return (
          <button
            key={category?.id}
            onClick={() => onCategoryChange(category?.id)}
            className={`
              flex items-center space-x-2 px-5 py-3 rounded-lg font-medium
              transition-all duration-200 shadow-sm
              ${isActive
                ? 'bg-primary text-primary-foreground shadow-md scale-105'
                : 'bg-surface text-text-secondary border border-border hover:bg-muted hover:text-text-primary hover:border-primary'
              }
            `}
            aria-label={`Filtrar por ${category?.name}`}
            aria-pressed={isActive}
          >
            <Icon name={category?.icon} size={20} variant={isActive ? 'solid' : 'outline'} />
            <span>{category?.name}</span>
            <span className="text-sm opacity-75">({category?.count})</span>
          </button>
        );
      })}
    </div>
  );
}

CategoryFilter.propTypes = {
  categories: PropTypes?.arrayOf(
    PropTypes?.shape({
      id: PropTypes?.string?.isRequired,
      name: PropTypes?.string?.isRequired,
      icon: PropTypes?.string?.isRequired,
      count: PropTypes?.number?.isRequired
    })
  )?.isRequired,
  activeCategory: PropTypes?.string?.isRequired,
  onCategoryChange: PropTypes?.func?.isRequired
};