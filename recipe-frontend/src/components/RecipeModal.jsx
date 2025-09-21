import React, { useState, useEffect } from 'react';

const RecipeModal = ({ recipe, onClose }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // A tiny delay allows the CSS transition to apply on mount
    const timer = setTimeout(() => setIsAnimating(true), 50);
    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  // Animate out before closing
  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(onClose, 300); // Wait for animation to finish
  };

  return (
    // Backdrop: Now uses standard Tailwind classes
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4 transition-opacity duration-300"
      style={{ opacity: isAnimating ? 1 : 0 }}
      onClick={handleClose}
    >
      {/* Modal Content: Simplified sizing and added animation */}
      <div
        className="bg-white p-6 rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative transition-all duration-500"
        style={{
          transform: isAnimating ? 'scale(1)' : 'scale(0.95)',
          opacity: isAnimating ? 1 : 0,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button: Using an SVG for a cleaner look */}
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-800 transition-colors"
          onClick={handleClose}
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 cursor-pointer hover:text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-3xl font-bold mb-4 text-pink-600 text-center">{recipe.title}</h2>
        
        {/* Image: Using standard max-height class */}
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full max-h-80 object-cover rounded-lg mb-6 shadow-md"
        />

        <div className="bg-pink-100 rounded-lg p-4 my-6 flex justify-around text-center border border-pink-100">
          <div className="text-gray-700">
            <span className="block text-xl font-bold text-pink-600">{recipe.details?.servings || 'N/A'}</span>
            <span className="text-sm">Servings</span>
          </div>
          <div className="text-gray-700">
            <span className="block text-xl font-bold text-pink-600">{recipe.details?.calories || 'N/A'}</span>
            <span className="text-sm">Calories</span>
          </div>
          <div className="text-gray-700">
            <span className="block text-xl font-bold text-pink-600">{recipe.details?.protein || 'N/A'}</span>
            <span className="text-sm">Protein</span>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3 text-pink-600 border-b-2 border-pink-100 pb-2">Ingredients</h3>
          <ul className="list-disc list-inside grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-gray-700">
            {recipe.ingredients.map((ing, index) => (
              <li key={index}>{`${ing.quantity} ${ing.name}`}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3 text-pink-600 border-b-2 border-pink-100 pb-2">Instructions</h3>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {recipe.instructions}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;