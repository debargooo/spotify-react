import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = ({ setSearchQuery }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isSearchPage = location.pathname === '/search';

  const [searchInput, setSearchInput] = useState('');

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchInput.trim()) {
      setSearchQuery(searchInput);
    }
  };

  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2 w-[28rem]">
          <img
            onClick={() => navigate(-1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_left}
            alt="arrow_left"
          />
          <img
            onClick={() => navigate(1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_right}
            alt="arrow_right"
          />
          {isSearchPage && (
            <form className="w-full" onSubmit={handleSearchSubmit}>
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-white dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 ps-10 text-sm text-white border-2 border-white rounded-full bg-inherit dark:placeholder-[#808080]"
                  placeholder="What do you want to play?"
                  value={searchInput}
                  onChange={handleSearchChange}
                  required
                />
              </div>
            </form>
          )}
        </div>
        <div className="flex items-center gap-4">
          <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer">
            Explore Premium
          </p>
          <p className="bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer">
            Install App
          </p>
          <p className="bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center">
            D
          </p>
        </div>
      </div>
      {isSearchPage && (
        <div className="flex items-center gap-2 mt-4">
          <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">All</p>
          <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">Music</p>
          <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">Podcasts</p>
        </div>
      )}
    </>
  );
};

export default Navbar;
