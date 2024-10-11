import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const DashNav = () => {
  const location = useLocation(); // To track the active button by route path
  const [activeButton, setActiveButton] = useState(location.pathname); // Track active button

  // Function to handle button click and set the active button
  const handleButtonClick = (path) => {
    setActiveButton(path);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="w-full mt-16 lg:mt-24 px-6 py-8 md:px-52 text-white grid grid-cols-3 gap-4 md:flex md:space-x-2 md:justify-start">
        {/* Dashboard Button */}
        <Link to="/dashboard" onClick={() => handleButtonClick('/dashboard')}>
          <button
            className={`w-full px-8  py-2 text-xs rounded-full border-2 shadow-lg transition-all ${
              activeButton === '/dashboard' ? 'bg-gradient-to-r from-blue-500 to-blue-700 border-2 border-gray-300' : 'bg-gray-500 border-gray-500'
            }`}
          >
            Dashboard
          </button>
        </Link>

        {/* Disburse Button */}
        <Link to="/dashboard/disbursment" onClick={() => handleButtonClick('/dashboard/disbursment')}>
          <button
            className={`w-full px-8 py-2 text-xs rounded-full border-2 shadow-lg transition-all ${
              activeButton === '/dashboard/disbursment' ? 'bg-gradient-to-r from-blue-500 to-blue-700 border-2 border-gray-300' : 'bg-gray-500 border-gray-500'
            }`}
          >
            Disburse
          </button>
        </Link>

        {/* Utilities Button */}
        <Link to="/dashboard/utility" onClick={() => handleButtonClick('/dashboard/utility')}>
          <button
            className={`w-full px-8  py-2 text-xs rounded-full border-2 shadow-lg transition-all ${
              activeButton === '/dashboard/utility' ? 'bg-gradient-to-r from-blue-500 to-blue-700 border-2 border-gray-300' : 'bg-gray-500 border-gray-500'
            }`}
          >
            Utilities
          </button>
        </Link>

        {/* Transfer Button */}
        <Link to="/dashboard/transfer" onClick={() => handleButtonClick('/dashboard/transfer')}>
          <button
            className={`w-full px-8  py-2 text-xs rounded-full border-2 shadow-lg transition-all ${
              activeButton === '/dashboard/transfer' ? 'bg-gradient-to-r from-blue-500 to-blue-700 border-2 border-gray-300' : 'bg-gray-500 border-gray-500'
            }`}
          >
            Transfer
          </button>
        </Link>

        {/* Deposit Button */}
        <Link to="/dashboard/deposit" onClick={() => handleButtonClick('/dashboard/deposit')}>
          <button
            className={`w-full px-8 py-2 text-xs rounded-full border-2 border-gray-300 shadow-lg transition-all ${
              activeButton === '/dashboard/deposit' ? 'bg-gradient-to-r from-blue-500 to-blue-700 border-2 border-gray-300' : 'bg-gray-500 border-gray-500'
            }`}
          >
            Deposit
          </button>
        </Link>
      </nav>
    </div>
  );
};

export default DashNav;
