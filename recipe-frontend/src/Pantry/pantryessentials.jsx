// ...existing code...
import React, { useState } from "react";
import pantryimg from '../assets/pantry-essentials.png';

const essentialsList = [
  "butter", "egg", "garlic", "milk", "onion", "sugar", "flour", "olive oil",
  "garlic powder", "white rice", "cinnamon", "ketchup", "soy sauce", "mayonnaise",
  "vegetable oil", "+30 More"
];

const moreIngredients = [
  "bread", "baking powder", "brown sugar", "oregano", "potato", "honey", "paprika",
  "baking soda", "vanilla", "spaghetti", "peanut butter", "chili powder", "cumin",
  "mustard", "basil"
];

const PantryEssentials = ({ selectedIngredients, setSelectedIngredients }) => {
  const [showMore, setShowMore] = useState(false);
  const [search, setSearch] = useState("");

  const handleIngredientClick = (item) => {
    if (item === "+30 More") {
      setShowMore(true);
      return;
    }
    setSelectedIngredients((prev) =>
      prev.includes(item)
        ? prev.filter((i) => i !== item)
        : [...prev, item]
    );
  };

  // Filter ingredients by search
  const filteredEssentials = essentialsList.filter(item =>
    item.toLowerCase().includes(search.toLowerCase()) || item === "+30 More"
  );
  const filteredMore = moreIngredients.filter(item =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white shadow-xl rounded-lg p-4 mb-4">
      <div className="flex items-center mb-2">
        <img src={pantryimg} alt="Pantry" className="w-7 h-7 mr-2" />
        <h3 className="font-semibold text-pink-600">Pantry Essentials</h3>
        <span className="ml-auto text-gray-500 text-sm">{selectedIngredients.length}/40 Ingredients</span>
      </div>
      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="add/remove/paste ingredients"
        className="w-full p-2 border rounded mb-4 text-sm"
      />
      <div className="grid grid-cols-3 gap-2">
        {(showMore ? [...essentialsList.slice(0, -1), ...moreIngredients] : filteredEssentials).map((item, idx) => (
          item === "+30 More" ? (
            <button
              key={item}
              className="bg-gray-200 px-2 py-1 rounded text-sm text-gray-700 cursor-pointer hover:bg-pink-100"
              onClick={() => handleIngredientClick(item)}
            >
              +30 More
            </button>
          ) : (
            <button
              key={item}
              className={`px-2 py-1 rounded text-sm border cursor-pointer ${selectedIngredients.includes(item) ? "bg-pink-200 border-pink-400" : "bg-gray-100 border-gray-300"}`}
              onClick={() => handleIngredientClick(item)}
            >
              {item}
            </button>
          )
        ))}
        {showMore && filteredMore.map(item => (
          <button
            key={item}
            className={`px-2 py-1 rounded text-sm border cursor-pointer ${selectedIngredients.includes(item) ? "bg-pink-200 border-pink-400" : "bg-gray-100 border-gray-300"}`}
            onClick={() => handleIngredientClick(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PantryEssentials;