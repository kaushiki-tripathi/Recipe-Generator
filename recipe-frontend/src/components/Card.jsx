import React from 'react';

const Card = ({ recipe, onClick }) => {
  return (
    // The main card container
    <div
      className="w-full bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
      onClick={onClick}
    >
      {/* Image container - with 'overflow-hidden' for the zoom effect */}
      <div className="relative overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-50 object-cover transition-transform duration-300 group-hover:scale-110 rounded-2xl" // <-- Image zoom on hover
        />
      </div>

      {/* Card Content */}
      <div className="p-3">
        <span className="inline-block bg-pink-100 text-pink-700 text-xs font-semibold px-2 py-1 rounded-full mb-2">
          {recipe.category}
        </span>
        <h3 className="text-lg font-bold text-gray-800 truncate">
          {recipe.title}
        </h3>
      </div>
    </div>
  );
};

export default Card;