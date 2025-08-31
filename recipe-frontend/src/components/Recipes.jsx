import React, { useState, useEffect } from "react";
import RecipeCard from "../components/Card";
import RecipeModal from "../components/RecipeModal";

const Recipes = ({ ingredients: selectedIngredients, dietaryPreference }) => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      if (!selectedIngredients || selectedIngredients.length === 0) return;

      try {
        const allRecipes = [];

        // Fetch meals for each ingredient
        for (let ingredient of selectedIngredients) {
          const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
          );
          const data = await response.json();
          if (data.meals) {
            for (let meal of data.meals) {
              const detailRes = await fetch(
                `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`
              );
              const detailData = await detailRes.json();
              if (detailData.meals && detailData.meals.length > 0) {
                allRecipes.push(detailData.meals[0]);
          }
        }
      }
    }

        setRecipes(allRecipes);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, [selectedIngredients]);


  const filteredRecipes = recipes.filter((recipe) => {
    if (!dietaryPreference) return true; // no filter selected

    const tags = recipe.strTags?.toLowerCase() || "";
    const category = recipe.strCategory?.toLowerCase() || "";

    if (dietaryPreference === "Vegetarian") {
      return category === "vegetarian" || tags.includes("vegetarian");
    }
    if (dietaryPreference === "Vegan") {
      return category === "vegan" || tags.includes("vegan");
    }
    if (dietaryPreference === "Non-Vegetarian") {
      return category !== "vegetarian" && category !== "vegan";
    }
    if (dietaryPreference === "Gluten-Free") {
         return tags.includes("gluten-free");

    }
    if (dietaryPreference === "Pescatarian") {
      return category === "seafood";
    }

    return true;
  });


  const handleCardClick = async (id) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await response.json();
      if (data.meals && data.meals.length > 0) {
        setSelectedRecipe(data.meals[0]);
      }
    } catch (error) {
      console.error("Error fetching recipe details:", error);
    }
  };

  const closeModal = () => setSelectedRecipe(null);


  return (
    <>
      <div className="recipes-container" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
       {filteredRecipes.length > 0 ? (
  filteredRecipes.map((recipe) => (
    <RecipeCard
      key={recipe.idMeal}
      recipe={recipe}
      onClick={() => handleCardClick(recipe.idMeal)}
    />
  ))
) : (
  <p>No recipes to show</p>
)}
      </div>

      {selectedRecipe && (
        <RecipeModal recipe={selectedRecipe} onClose={closeModal} />
      )}
    </>
  );
};

export default Recipes;
