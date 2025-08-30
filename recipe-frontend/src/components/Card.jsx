import React from "react";

const Card = ({ recipe, onClick }) => {
  const image = recipe.strMealThumb || "https://via.placeholder.com/150";

  return (
    <div
      className="recipe-card border-2 border-gray-300 p-4 rounded-lg w-52 m-2 cursor-pointer"
      onClick={onClick}
    >
      <img src={image} alt={recipe.strMeal} className="w-full rounded-xl" />
      <h3 className="text-pink-600 text-center mt-2">{recipe.strMeal}</h3>
    </div>
  );
};

export default Card;
