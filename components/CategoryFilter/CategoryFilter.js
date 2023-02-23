import React from 'react';
import styles from './CategoryFilter.module.css';

const CategoryFilter = ({ categories, handleFilterChange }) => {
    return (
      <div className={styles.categoryFilter}>
        <h3 className={styles.categoryFilterTitle}>Filtrar por categoría:</h3>
        <select className={styles.categoryFilterSelect} onChange={handleFilterChange}>
          <option key="all" value="all">Todas las categorías</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    );
  };

export default CategoryFilter;
