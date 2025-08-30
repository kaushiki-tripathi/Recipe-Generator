import React from "react";

const RecipeModal = ({ recipe, onClose }) => {
  // Extract ingredients
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(`${measure} ${ingredient}`);
    }
  }

  return (
    <div
      className="fixed inset-0 flex justify-center items-start z-50"
      style={{
        backdropFilter: "blur(8px)",
        backgroundColor: "rgba(0,0,0,0.3)",
        overflowY: "auto",
        paddingTop: "40px",
      }}
      onClick={onClose}
    >
      <div
        className="bg-white p-7 rounded-lg w-11/13 md:w-3/4 lg:w-1/2 relative shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-red-600 font-bold text-3xl cursor-pointer"
          onClick={onClose}
        >
          ×
        </button>

        <h2 className="text-2xl font-bold mb-4 text-pink-600 text-center">{recipe.strMeal}</h2>

        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full h-120 rounded-lg mb-4"
        />

        <h3 className="font-semibold mb-2 text-pink-600">Ingredients:</h3>
        <ul className="list-disc ml-5 mb-4">
          {ingredients.map((ing, index) => (
            <li key={index}>{ing}</li>
          ))}
        </ul>

        <h3 className="font-semibold mb-2 text-pink-600">Instructions:</h3>
        <p className="mb-4">{recipe.strInstructions}</p>

      </div>
    </div>
  );
};

export default RecipeModal;
