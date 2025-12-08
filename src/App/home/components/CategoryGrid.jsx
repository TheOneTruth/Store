'use client';

import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';
import Icon from '@/components/ui/AppIcon';

export default function CategoryGrid({ categories }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories?.map((category) => (
        <Link
          key={category?.id}
          href={`/product-catalog?category=${category?.id}`}
          className="group relative h-64 bg-surface border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={category?.image}
              alt={category?.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative h-full p-6 flex flex-col justify-end text-white">
            <div className="mb-3">
              <Icon 
                name={category?.icon} 
                size={32} 
                variant="outline"
                className="text-cyan-400"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">
              {category?.name}
            </h3>
            <p className="text-sm text-white/90 mb-2">
              {category?.description}
            </p>
            <p className="text-xs text-cyan-400 font-medium">
              {category?.productCount} productos disponibles
            </p>
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
        </Link>
      ))}
    </div>
  );
}

CategoryGrid.propTypes = {
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