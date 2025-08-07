import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "@/assets/Logo.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Dummy auth state for future use
  const isAuthenticated = false;

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 rounded-b-2xl left-0 z-50 px-2 sm:px-0">
      <div className="max-w-7xl mx-auto fredoka">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img src={Logo} alt="Logo" className="h-8 w-auto" />
              <span className=" text-[#F2786D] ml-2">Stray to Safe</span>
            </Link>
          </div>

          {/* Burger menu for mobile */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Nav links & buttons */}
          <div className="hidden lg:flex flex-1 items-center justify-center">
            <ul className="flex space-x-6">
              <li><Link to={"/"} className="text-gray-700 hover:text-[#4FA3D1] hover:underline transition-all ease-in-out duration-300 font-medium">Home</Link></li>
              <li><Link to={"/adopt-a-pet"} className="text-gray-700 hover:text-[#4FA3D1] hover:underline transition-all ease-in-out duration-300 font-medium">Adopt a Pet</Link></li>
              <li><a href="#" className="text-gray-700 hover:text-[#4FA3D1] hover:underline transition-all ease-in-out duration-300 font-medium">Blog</a></li>
              <li><Link to={"/donate"} className="text-gray-700 hover:text-[#4FA3D1] hover:underline transition-all ease-in-out duration-300 font-medium">Donate</Link></li>
            </ul>
          </div>

          {/* Auth buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to={"/login"} className="px-4 py-2 text-[#4FA3D1] rounded hover:bg-blue-50 font-medium">Login</Link>
            <Link to={"/register"} className="px-6 py-2 bg-[#4FA3D1] text-white rounded-2xl hover:bg-[#4f94d1] font-medium">Sign Up</Link>
            
            {/* Hidden for future auth */}
            {isAuthenticated && (
              <>
                <button className="px-4 py-2 text-[#4FA3D1] border border-[#4FA3D1] rounded hover:bg-gray-100 font-medium">Profile</button>
                <button className="px-4 py-2 text-red-600 border border-red-600 rounded hover:bg-red-50 font-medium">Log Out</button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden ">
          <ul className="px-2 pt-2 pb-3 space-y-1">
            <li><Link to={"/"} className="text-gray-700 hover:text-[#4FA3D1] hover:underline transition-all ease-in-out duration-300 font-medium">Home</Link></li>
            <li><Link to={"/adopt-a-pet"} className="text-gray-700 hover:text-[#4FA3D1] hover:underline transition-all ease-in-out duration-300 font-medium">Adopt a Pet</Link></li>
            <li><a href="#" className="text-gray-700 hover:text-[#4FA3D1] hover:underline transition-all ease-in-out duration-300 font-medium">Blog</a></li>
            <li><a href="#" className="text-gray-700 hover:text-[#4FA3D1] hover:underline transition-all ease-in-out duration-300 font-medium">Donate</a></li>
          </ul>
          <div className="px-4 pb-4 flex flex-col space-y-2">
            <button className="w-full px-4 py-2 text-[#4FA3D1] border border-[#4FA3D1] rounded hover:bg-blue-50 font-medium">Login</button>
            <button className="w-full px-4 py-2 bg-[#4FA3D1] text-white rounded hover:bg-blue-700 font-medium">Sign Up</button>
            
            {/* Hidden for future auth */}
            {isAuthenticated && (
              <>
                <button className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded hover:bg-gray-100 font-medium">Profile</button>
                <button className="w-full px-4 py-2 text-red-600 border border-red-600 rounded hover:bg-red-50 font-medium">Log Out</button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
