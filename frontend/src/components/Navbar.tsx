import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-8 lg:px-24 bg-primary-100">
      {/* Logo */}
      <div className="text-white text-lg sm:text-xl md:text-2xl font-bold">
        WAVE-PAY
      </div>

      {/* Connect Wallet Button */}
      <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-sm md:text-base rounded-full border-2 border-white shadow-lg hover:from-blue-400 hover:to-blue-600 transition-all">
        Connect Wallet
      </button>
    </nav>
  );
};

export default Navbar;
