import React, { useState } from "react";
import recipeimg from '../assets/recipe-book_9273848.png'
import IngredientSection from "../pantry/IngredientSection";
import Recipes from '../components/Recipes';
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

  return (

    <div className="flex">
      {/* Sidebar */}
      
      <aside className="w-1/3 bg-blend-hard-light p-3 scroll">
        <div className="bg-white shadow-xl rounded-lg p-4 mb-4">
          <h2 className="text-xl text-pink-600 text-center font-semibold mb-2">
            Pantry
          </h2>

          <div className="text-center text-gray-500 mb-2">
            You have {selectedIngredients.length} ingredient
            {selectedIngredients.length !== 1 ? "s" : ""}
          </div>

          {/* Ingredient Sections */}
          <div className=" bg-pink-50 p-3 scroll shadow-lg rounded-lg mb-5">
          
          <IngredientSection
            title={<span className="text-pink-600 ">Pantry Essentials</span>}
            ingredients={pantry}
            selectedIngredients={selectedIngredients}
            setSelectedIngredients={setSelectedIngredients}
          />
          </div>
          <div className=" bg-pink-50 p-3 scroll shadow-lg rounded-lg mb-5">
          <IngredientSection
            title={<span className="text-pink-600">Vegetables & Greens</span>}
            ingredients={vegetables}
            selectedIngredients={selectedIngredients}
            setSelectedIngredients={setSelectedIngredients}
          />
          </div>

          <div className=" bg-pink-50 p-3 scroll shadow-lg rounded-lg mb-5">
          <IngredientSection
            title={<span className="text-pink-600">Fruits</span>}
            ingredients={fruits}
            selectedIngredients={selectedIngredients}
            setSelectedIngredients={setSelectedIngredients}
          />
          </div>

          <div className=" bg-pink-50 p-3 scroll shadow-lg rounded-lg mb-5">
          <IngredientSection
            title={<span className="text-pink-600">Nuts</span>}
            ingredients={nuts}
            selectedIngredients={selectedIngredients}
            setSelectedIngredients={setSelectedIngredients}
          />
          </div>

          <div className=" bg-pink-50 p-3 scroll shadow-lg rounded-lg mb-5">
          <IngredientSection
            title={<span className="text-pink-600">Dairy & Eggs</span>}
            ingredients={dairy}
            selectedIngredients={selectedIngredients}
            setSelectedIngredients={setSelectedIngredients}
          />
          </div>


          <div className=" bg-pink-50 p-3 scroll shadow-lg rounded-lg mb-5">
          <IngredientSection
            title={<span className="text-pink-600">Meat</span>}
            ingredients={meat}
            selectedIngredients={selectedIngredients}
            setSelectedIngredients={setSelectedIngredients}
          />
          </div>

          <div className=" bg-pink-50 p-3 scroll shadow-lg rounded-lg mb-5">
          <IngredientSection
            title={<span className="text-pink-600">Poultry</span>}
            ingredients={poultry}
            selectedIngredients={selectedIngredients}
            setSelectedIngredients={setSelectedIngredients}
          />
          </div>
        </div>
      </aside>
      
      

      {/* Right Content */}
      <main className="flex-1 flex flex-col justify-center items-center">
        {selectedIngredients.length===0?(
          <>
        <img src={recipeimg} alt="Recipe Img" className='w-10 h-10 mr-2'/>
        <h2 className="text-3xl font-semibold">
          Add your ingredients to get started
        </h2>
        <p className="text-gray-500 text-xl">
          Every ingredient you add unlocks more recipes
        </p>
        </>
        ):(<Recipes ingredients={selectedIngredients}/>
        )}
      </main>
    </div>
  );
};

export default Homepage;
