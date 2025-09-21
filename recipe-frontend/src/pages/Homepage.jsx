import React, { useEffect, useState } from "react";
import recipeimg from "../assets/recipe-book_9273848.png";
import Card from "../components/Card";
import allRecipes from "../data/recipes.json";
import RecipeModal from "../components/RecipeModal";
import IngredientSection from "../pantry/IngredientSection";
import Pagination from "../components/Pagination";
import {
  pantry,
  vegetables,
  fruits,
  nuts,
  dairy,
  meat,
  poultry,
} from "../pantry/pantrydata";

const Homepage = () => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [dietaryPreference, setDietaryPreference] = useState("");
  const [matchedRecipes, setMatchedRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]); // Removed favorite logic for now to match your code
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 8;
  const handleClearAll = () => {
    setSelectedIngredients([]);
  };

  useEffect(() => {
    if (selectedIngredients.length === 0) {
      setMatchedRecipes([]);
      return;
    }
    const foundRecipes = allRecipes
      .map((recipe) => {
        let matchCount = 0;
        recipe.ingredients.forEach((ing) => {
          if (selectedIngredients.includes(ing.name.toLowerCase())) {
            matchCount++;
          }
        });
        const matchScore = (matchCount / recipe.ingredients.length) * 100;
        return { ...recipe, matchScore };
      })
      .filter((recipe) => recipe.matchScore > 0)
      .sort((a, b) => b.matchScore - a.matchScore);

    setMatchedRecipes(foundRecipes);
    setCurrentPage(1);
  }, [selectedIngredients]);

  const handleCardClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const closeModal = () => {
    setSelectedRecipe(null);
  };

  const filteredRecipes = matchedRecipes.filter((recipe) => {
  if (!dietaryPreference) return true;

  const tags = recipe.tags?.map((t) => t.toLowerCase()) || [];
  const category = recipe.category?.toLowerCase() || "";

  switch (dietaryPreference) {
    case "Vegetarian":
      return (
        category === "vegetarian" ||
        tags.includes("vegetarian") ||
        (!["non-vegetarian", "seafood"].includes(category) &&
          !tags.some((t) => ["chicken", "beef", "fish", "pork", "egg"].includes(t)))
      );

    case "Vegan":
      return category === "vegan" || tags.includes("vegan");

    case "Non-Vegetarian":
      return category === "non-vegetarian" || category === "seafood";

    case "Gluten-Free":
      return tags.includes("gluten-free");

    case "Pescatarian":
  return (
    category === "seafood" ||
    category === "vegetarian" ||
    (!["non-vegetarian", "poultry"].includes(category) &&
      !tags.some((t) =>
        ["chicken", "beef", "pork", "lamb", "mutton"].includes(t)
      ))
  );

    default:
      return true;
  }
});

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = filteredRecipes.slice( indexOfFirstRecipe, indexOfLastRecipe );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flex flex-col md:flex-row items-start">
      {/* Sidebar */}
      <aside className="w-full md:w-1/3 bg-blend-hard-light p-3">
        <div className="bg-white shadow-xl rounded-lg p-4 mb-4 overflow-y-auto custom-scroll h-[115vh]">
          <h2 className="text-xl text-pink-600 text-center font-semibold mb-2">
            Pantry
          </h2>

          <div className="relative flex justify-center items-center mb-4 flex-shrink-0 h-5">
          <p className="text-center text-gray-500 ">
            You have {selectedIngredients.length} ingredient
            {selectedIngredients.length !== 1 ? "s" : ""}
          </p>
              <button
                onClick={handleClearAll}
                className="absolute right-5 text-sm font-semibold text-pink-600 hover:text-pink-700 hover:underline cursor-pointer"
              >
                Clear All
              </button>
          </div>

          {/* Ingredient Sections */}
          <div className=" bg-pink-100 p-3 shadow-lg rounded-lg mb-5">
          
          <IngredientSection
            title={<span className="text-pink-600 ">Pantry Essentials</span>}
            ingredients={pantry}
            selectedIngredients={selectedIngredients}
            setSelectedIngredients={setSelectedIngredients}
          />
          </div>
          <div className=" bg-pink-100 p-3 scroll shadow-lg rounded-lg mb-5">
          <IngredientSection
            title={<span className="text-pink-600">Vegetables & Greens</span>}
            ingredients={vegetables}
            selectedIngredients={selectedIngredients}
            setSelectedIngredients={setSelectedIngredients}
          />
          </div>
          <div></div>
          <div className=" bg-pink-100 p-3 scroll shadow-lg rounded-lg mb-5">
          <IngredientSection
            title={<span className="text-pink-600">Fruits</span>}
            ingredients={fruits}
            selectedIngredients={selectedIngredients}
            setSelectedIngredients={setSelectedIngredients}
          />
          </div>

          <div className=" bg-pink-100 p-3 scroll shadow-lg rounded-lg mb-5">
          <IngredientSection
            title={<span className="text-pink-600">Nuts</span>}
            ingredients={nuts}
            selectedIngredients={selectedIngredients}
            setSelectedIngredients={setSelectedIngredients}
          />
          </div>

          <div className=" bg-pink-100 p-3 scroll shadow-lg rounded-lg mb-5">
          <IngredientSection
            title={<span className="text-pink-600">Dairy & Eggs</span>}
            ingredients={dairy}
            selectedIngredients={selectedIngredients}
            setSelectedIngredients={setSelectedIngredients}
          />
          </div>


          <div className=" bg-pink-100 p-3 scroll shadow-lg rounded-lg mb-5">
          <IngredientSection
            title={<span className="text-pink-600">Meat</span>}
            ingredients={meat}
            selectedIngredients={selectedIngredients}
            setSelectedIngredients={setSelectedIngredients}
          />
          </div>

          <div className=" bg-pink-100 p-3 scroll shadow-lg rounded-lg mb-5">
          <IngredientSection
            title={<span className="text-pink-600">Poultry</span>}
            ingredients={poultry}
            selectedIngredients={selectedIngredients}
            setSelectedIngredients={setSelectedIngredients}
          />
          </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col items-center p-4 sm:p-6">
        <div className="w-full max-w-2xl mb-8">
          <h2 className="text-xl font-semibold mb-5 text-pink-600 text-center">Dietary Preferences</h2>
          <div className="flex gap-2 sm:gap-3 flex-wrap justify-center md:justify-start">
            {["Vegetarian", "Non-Vegetarian","Vegan", "Gluten-Free","Pescatarian"].map((pref) => (
              <button
                key={pref}
                onClick={() => setDietaryPreference(dietaryPreference === pref ? "" : pref)}
                className={`px-4 py-1 rounded border transition cursor-pointer
                  ${dietaryPreference === pref
                    ? "bg-pink-500 text-white border-pink-600"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300 cursor-pointer"}`}
              >
                {pref}
              </button>
            ))}
          </div>
        </div>

        <div className="w-full max-w-7xl mx-auto">
          {selectedIngredients.length > 0 ? (
            filteredRecipes.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  {currentRecipes.map((recipe) => (
                    <Card
                      key={recipe.id}
                      recipe={recipe}
                      onClick={() => handleCardClick(recipe)}
                      
                    />
                  ))}
                </div>
                
                <Pagination
                  recipesPerPage={recipesPerPage}
                  totalRecipes={filteredRecipes.length}
                  paginate={paginate}
                  currentPage={currentPage}
                />
              </>
            ) : (
              <div className="text-center py-10">
                <p className="text-gray-500">No recipes match your current selection.</p>
              </div>
            )
          ) : (
            <div className="text-center py-10 sm:py-20">
              <img src={recipeimg} alt="Recipe Book" className="mx-auto h-24 w-24 sm:w-32 mb-4 opacity-50"/>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-700">Add ingredients to get started</h3>
              <p className="text-gray-500 mt-2">Every ingredient you add unlocks more recipes!</p>
            </div>
          )}
        </div>
      </main>

      {selectedRecipe && <RecipeModal recipe={selectedRecipe} onClose={closeModal} />}
    </div>
  );
};

export default Homepage;