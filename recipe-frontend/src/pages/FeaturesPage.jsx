import React from 'react';
import { Link } from 'react-router-dom';
import scanImageUrl from "../assets/scan.jpg";
import recipeImageUrl from '../assets/recipe-meal.jpg';
import filterImageUrl from "../assets/recipe-bowl.jpg";
import cookbookImageUrl from "../assets/favourite.jpg";


const FeaturesPage = () => {
  return (
    // Page container with vertical padding
    <div className="py-8 lg:py-16 bg-white">
      
      {/* SECTION 1: HERO SECTION */}
      <section className="text-center px-4 mb-24">
        <h1 className="md:text-4xl text-4xl mb-4 text-pink-600 font-semibold hover:underline">
          Stop Wondering. Start Cooking.
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8">
          Turn the ingredients you have into meals you love with our Recipe generator.
        </p>
        <Link to={'/register'} className="bg-pink-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-pink-600 transition duration-300 transform hover:scale-105 cursor-pointer">
          Get Started for Free
        </Link>
      </section>

      {/* SECTION 2: FEATURES SHOWCASE */}
      <section className="max-w-6xl mx-auto px-4">
        
        {/* Feature 1: Scan Ingredients (Image Left) */}
        {/* On mobile: stacks vertically. On large screens: row layout. */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <div className="w-full lg:w-1/2">
            <img src={scanImageUrl} className="rounded-xl shadow-lg w-full aspect-video object-cover" />
          </div>
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-4 text-pink-600">Scan Your Pantry with Your Camera</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Simply snap a photo of your ingredients. Our smart AI will instantly identify them 
              and add them to your virtual pantry, saving you time and effort.
            </p>
          </div>
        </div>

        {/* Feature 2: Instant Matching (Image Right) */}
        {/* 'lg:flex-row-reverse' changes the order on large screens for the alternating effect */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 mb-20">
          <div className="w-full lg:w-1/2">
            <img src={recipeImageUrl} className="rounded-xl shadow-lg w-full aspect-video object-cover" />
          </div>
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-4 text-pink-600">Get Instant Meal Ideas</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Based on your ingredients, we'll show you a list of delicious recipes 
              you can start cooking right now. Reduce food waste and discover new favorites.
            </p>
          </div>
        </div>
        
        {/* Feature 3: Dietary Filters (Image Left) */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <div className="w-full lg:w-1/2">
            <img src={filterImageUrl} className="rounded-xl shadow-lg w-full aspect-video object-cover" />
          </div>
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-4 text-pink-600">Recipes That Fit Your Lifestyle</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you're vegetarian, vegan, or gluten-free, our powerful filters 
              help you find the perfect meal that caters to your specific needs and preferences.
            </p>
          </div>
        </div>

        {/* Feature 4: Personal Cookbook (Image Right) */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 mb-20">
          <div className="w-full lg:w-1/2">
            <img src={cookbookImageUrl} className="rounded-xl shadow-lg w-full aspect-video object-cover" />
          </div>
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-4 text-pink-600">Save Your Favorites</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Found a recipe you love? Save it to your personal cookbook with a single click. 
              Build your own collection of go-to meals for any occasion.
            </p>
          </div>
        </div>

      </section>

    </div>
  );
}

export default FeaturesPage;