import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((uniqueCategory, index) => (
        <button
          type="button"
          key={index}
          className="filter-btn"
          onClick={() => filterItems(uniqueCategory)}
        >
          {uniqueCategory}
        </button>
      ))}
    </div>
  );
};

export default Categories;
