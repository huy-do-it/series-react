import React from 'react';

const CategoryFilter = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <select 
      value={selectedCategory} 
      onChange={(e) => setSelectedCategory(e.target.value)}
      className="category-select"
    >
      <option value="">All Categories</option>
      {/* Cập nhật ở đây: cat bây giờ là object, cần lấy cat.name hoặc cat.id */}
      {categories.map((cat) => (
        <option key={cat.id} value={cat.name}>
          {cat.name.toUpperCase()}
        </option>
      ))}
    </select>
  );
};

export default CategoryFilter;