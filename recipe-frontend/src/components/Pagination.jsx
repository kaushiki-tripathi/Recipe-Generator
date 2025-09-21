import React from 'react';

const Pagination = ({ recipesPerPage, totalRecipes, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRecipes / recipesPerPage); i++) {
    pageNumbers.push(i);
  }

  // Don't show pagination if there's only one page
  if (pageNumbers.length <= 1) {
    return null;
  }

  return (
    <nav>
      <ul className="flex justify-center items-center space-x-2 mt-8">
        {pageNumbers.map(number => (
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              className={`px-4 py-2 rounded-md transition-colors text-sm font-medium
                ${currentPage === number 
                  ? 'bg-pink-600 text-white shadow-sm' 
                  : 'bg-white text-gray-700 cursor-pointer hover:bg-pink-50 border'
                }`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;