import React from 'react';
import { Link } from 'react-router-dom';

const DashNav = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="w-full mt-16 lg:mt-24 px-6 py-8 md:px-52 text-white flex justify-start space-x-4 md:space-x-6">
      <Link to="/dashboard">
          <button className="px-4 py-3 md:px-6 bg-gradient-to-r from-blue-500 to-blue-700 text-sm md:text-base rounded-full border-2 border-white shadow-lg hover:bg-blue-400 transition-all">
            Dashboard
          </button>
        </Link>
        <Link to="/dashboard/disbursment">
          <button className="px-4 py-3 md:px-6 bg-gradient-to-r from-blue-500 to-blue-700 text-sm md:text-base rounded-full border-2 border-white shadow-lg hover:bg-blue-400 transition-all">
            Disburse
          </button>
        </Link>
        <Link to="/dashboard/utility">
          <button className="px-4 py-3 md:px-6 bg-gradient-to-r from-blue-500 to-blue-700 text-sm md:text-base rounded-full border-2 border-white shadow-lg hover:bg-blue-400 transition-all">
            Utilities
          </button>
        </Link>
        <Link to="/dashboard/transfer">
          <button className="px-4 py-3 md:px-6 bg-gradient-to-r from-blue-500 to-blue-700 text-sm md:text-base rounded-full border-2 border-white shadow-lg hover:bg-blue-400 transition-all">
            Transfer
          </button>
        </Link>
        <Link to="/dashboard/deposit">
          <button className="px-4 py-3 md:px-6 bg-gradient-to-r from-blue-500 to-blue-700 text-sm md:text-base rounded-full border-2 border-white shadow-lg hover:bg-blue-400 transition-all">
            Deposit
          </button>
        </Link>
      </nav>
    </div>
  );
};

export default DashNav;
