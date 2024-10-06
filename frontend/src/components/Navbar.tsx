import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center py-4 px-8 lg:px-24 bg-primary-100 relative">
      {/* Logo */}
      <div className="text-white text-lg sm:text-xl md:text-2xl font-bold">
        WAVE-PAY
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="lg:hidden flex">
        <button
          className="px-4 py-3 rounded-full border-2 border-white shadow-lg hover:bg-gray-100 transition-all"
          onClick={() => setIsOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Desktop Connect Wallet Button */}
      <div className="hidden lg:block">
        <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-sm md:text-base rounded-full border-2 border-white shadow-lg hover:from-blue-400 hover:to-blue-600 transition-all">
          Connect Wallet
        </button>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="absolute top-0 right-0 h-screen w-60 bg-gray-900 z-20 p-8 shadow-lg">
          {/* Close Icon */}
          <div className="flex justify-end mb-4">
            <button
              className="px-4 py-3 rounded-full border-2 border-white shadow-lg hover:bg-gray-100 transition-all"
              onClick={() => setIsOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Connect Wallet Button */}
          <div className="flex justify-end mt-10">
          <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-sm md:text-base rounded-full border-2 border-white shadow-lg hover:from-blue-400 hover:to-blue-600 transition-all">
            Connect Wallet
          </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;