import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="top-0 py-1 lg:py-2 w-full bg-[#00796B] lg:relative z-50 dark:bg-gray-900 shadow-md shadow-black">
      <div className="z-10 sticky top-0 left-0 right-0 max-w-4xl xl:max-w-5xl mx-auto px-5 py-2.5 lg:border-none lg:py-4">
        <div className="flex items-center justify-between">
          <button>
            <div className="flex items-center space-x-2">
              <h2 className="text-white font-bold text-2xl">E-Learning</h2>
            </div>
          </button>
          <div className="hidden lg:block">
            <ul className="flex space-x-10 text-base font-bold text-white">
              <li className="hover:text-[#E0F7FA] hover:underline hover:underline-offset-4 transition-all duration-100 ease-linear">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-[#E0F7FA] hover:underline hover:underline-offset-4 transition-all duration-100 ease-linear">
                <Link to="/about">About</Link>
              </li>
              <li className="hover:text-[#E0F7FA] hover:underline hover:underline-offset-4 transition-all duration-100 ease-linear">
                <Link to="/courses">Courses</Link>
              </li>
              <li className="hover:text-[#E0F7FA] hover:underline hover:underline-offset-4 transition-all duration-100 ease-linear">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="hidden lg:flex lg:items-center gap-x-2">
            <button className="flex items-center justify-center rounded-md bg-[#004D40] text-white px-6 py-2.5 font-semibold shadow-lg shadow-black hover:bg-[#00796B] transition duration-200">
              Sign Up
            </button>
            <button className="flex items-center justify-center rounded-md bg-[#00796B] text-white px-6 py-2.5 font-semibold shadow-lg shadow-black hover:bg-[#004D40] transition duration-200">
              Login
            </button>
          </div>
          <div className="flex items-center justify-center lg:hidden">
            <button
              className="focus:outline-none text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="text-2xl focus:outline-none active:scale-110 active:text-red-500"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4">
            <ul className="flex flex-col space-y-4 text-base font-bold text-white">
              <li className="hover:text-[#E0F7FA] hover:underline hover:underline-offset-4 transition-all duration-100 ease-linear">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-[#E0F7FA] hover:underline hover:underline-offset-4 transition-all duration-100 ease-linear">
                <Link to="/about">About</Link>
              </li>
              <li className="hover:text-[#E0F7FA] hover:underline hover:underline-offset-4 transition-all duration-100 ease-linear">
                <Link to="/courses">Courses</Link>
              </li>
              <li className="hover:text-[#E0F7FA] hover:underline hover:underline-offset-4 transition-all duration-100 ease-linear">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="hover:text-[#E0F7FA] hover:underline hover:underline-offset-4 transition-all duration-100 ease-linear">
                <Link to="/signin">Sign In</Link>
              </li>
              <li className="hover:text-[#E0F7FA] hover:underline hover:underline-offset-4 transition-all duration-100 ease-linear">
                <Link to="/signup">Sign Up</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
