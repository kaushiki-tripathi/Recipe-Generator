import React from "react";
import Recipes from "../components/Recipes";

const IngredientSection = ({ title, ingredients, selectedIngredients, setSelectedIngredients }) => {
  const handleIngredientClick = (ingredient) => {
    if (selectedIngredients.includes(ingredient)) {
      setSelectedIngredients(selectedIngredients.filter((item) => item !== ingredient));
    } else {
      setSelectedIngredients([...selectedIngredients, ingredient]);
    }
  };

  return (
    <div className="mb-4">
      <h3 className="font-semibold text-gray-700 mb-2">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {ingredients.map((ingredient) => (
          <button
            key={ingredient}
            className={`px-2 py-1 rounded-full border text-sm cursor-pointer ${selectedIngredients.includes(ingredient) ? "bg-pink-200 border-pink-400" : "bg-gray-100 border-gray-300"}`}
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
