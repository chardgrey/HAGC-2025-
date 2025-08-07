import React, { useState, useRef } from "react";

const Navbar = ({ adminName = "Admin" }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  React.useEffect(() => {
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <nav className="w-full bg-white shadow flex items-center justify-end px-8 py-4 relative z-30">
      <div className="flex items-center gap-4 relative" ref={dropdownRef}>
        <button
          onClick={() => setDropdownOpen((open) => !open)}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FDF8F1] hover:bg-gray-100 border border-gray-200 shadow-sm"
        >
          <span className="w-10 h-10 rounded-full bg-[#4FA3D1] flex items-center justify-center text-white font-bold text-lg">
            {adminName[0]}
          </span>
          <span className="font-semibold text-gray-800">{adminName}</span>
          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </button>
        {dropdownOpen && (
          <div className="absolute right-0 top-14 bg-white rounded-lg shadow-lg border border-gray-100 min-w-[180px] py-2">
            <button className="w-full text-left px-6 py-2 hover:bg-gray-50 text-gray-700">Profile Settings</button>
            <button className="w-full text-left px-6 py-2 hover:bg-gray-50 text-red-500">Log Out</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
