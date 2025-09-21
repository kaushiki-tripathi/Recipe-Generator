import React from "react";

const IngredientSection = ({ title, ingredients, selectedIngredients, setSelectedIngredients }) => {
  const handleIngredientClick = (ingredient) => {
    const lowerCaseIngredient=ingredient.toLowerCase();
    if (selectedIngredients.includes(lowerCaseIngredient)) {
      setSelectedIngredients(selectedIngredients.filter((item) => item !== lowerCaseIngredient));
    } else {
      setSelectedIngredients([...selectedIngredients, lowerCaseIngredient]);
    }
  };

  return (
    <div className="mb-4">
      <h3 className="font-semibold text-gray-700 mb-2">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {ingredients.map((ingredient) => (
          <button
            key={ingredient}
            className={`px-2 py-1 rounded border text-sm cursor-pointer ${selectedIngredients.includes(ingredient.toLowerCase()) ? "bg-pink-200 border-pink-400" : "bg-gray-200 border"}`}
            onClick={() => handleIngredientClick(ingredient)} 
          >
            {ingredient}
          </button>
        ))}
      </div>
    </div>
  );
};

export default IngredientSection;
