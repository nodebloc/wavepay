import React from 'react';
import { Send, Plus } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">WAVE-PAY</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Connect wallet</button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* My Wallet */}
        <div className="bg-gray-800 p-4 rounded-2xl">
          <h2 className="text-lg mb-2">My Wallet</h2>
          <p className="text-3xl font-bold mb-4">$200,101</p>
          <div className="flex items-center">
            <button className="bg-blue-500 text-white px-3 py-1 rounded-full mr-2">T</button>
            <button className="bg-blue-500 text-white px-3 py-1 rounded-full mr-2">↑↓</button>
            <button className="bg-gray-700 text-white p-1 rounded-full">
              <Plus size={20} />
            </button>
          </div>
        </div>

        {/* Quick Payment */}
        <div className="bg-gray-800 p-4 rounded-2xl">
          <h2 className="text-lg mb-2">Quick Payment</h2>
          <div className="flex items-center mb-4">
            <div className="bg-blue-500 p-2 rounded-full mr-2">
              <img src="/api/placeholder/24/24" alt="PlayStation" className="w-6 h-6" />
            </div>
            <div className="bg-blue-500 p-2 rounded-full mr-2">
              <img src="/api/placeholder/24/24" alt="User" className="w-6 h-6" />
            </div>
            <button className="border-2 border-dashed border-gray-600 p-2 rounded-full">
              <Plus size={24} className="text-gray-600" />
            </button>
          </div>
          <p className="text-blue-400 mb-2">Amount: $3.25</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full flex items-center justify-center">
            <Send size={16} className="mr-2" />
            Pay now
          </button>
        </div>

        {/* Invoices */}
        <div className="bg-gray-800 p-4 rounded-2xl">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg">Invoices</h2>
            <a href="#" className="text-gray-400 text-sm">See all &gt;</a>
          </div>
          <ul className="space-y-2">
            <li className="flex justify-between items-center">
              <div className="flex items-center">
                <img src="/api/placeholder/24/24" alt="Apple" className="w-6 h-6 mr-2" />
                <span>Apple store</span>
              </div>
              <span>$320.00</span>
            </li>
            <li className="flex justify-between items-center">
              <div className="flex items-center">
                <img src="/api/placeholder/24/24" alt="John" className="w-6 h-6 mr-2 rounded-full" />
                <span>John Smith</span>
              </div>
              <span>$2800.00</span>
            </li>
            <li className="flex justify-between items-center">
              <div className="flex items-center">
                <img src="/api/placeholder/24/24" alt="PlayStation" className="w-6 h-6 mr-2" />
                <span>Playstation</span>
              </div>
              <span>$80.20</span>
            </li>
            <li className="flex justify-between items-center">
              <div className="flex items-center">
                <img src="/api/placeholder/24/24" alt="Megogo" className="w-6 h-6 mr-2" />
                <span>Megogo</span>
              </div>
              <span>$12.99</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Activity */}
      <div className="mt-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg">Activity</h2>
          <a href="#" className="text-blue-400 text-sm">View All</a>
        </div>
        <ul className="space-y-2">
          <li className="bg-gray-800 p-3 rounded-lg flex justify-between items-center">
            <div className="flex items-center">
              <div className="bg-gray-700 w-8 h-8 rounded-full mr-3"></div>
              <div>
                <p>Someone send you Transaction Request</p>
                <p className="text-gray-400 text-sm">23 Apr, 2023 - 21:22</p>
              </div>
            </div>
            <div>
              <button className="bg-gray-700 text-white px-3 py-1 rounded mr-2">Reject</button>
              <button className="bg-blue-500 text-white px-3 py-1 rounded">Accept</button>
            </div>
          </li>
          <li className="bg-gray-800 p-3 rounded-lg flex justify-between items-center">
            <div className="flex items-center">
              <div className="bg-gray-700 w-8 h-8 rounded-full mr-3"></div>
              <div>
                <p>Someone cancel your Transaction Request</p>
                <p className="text-blue-400 text-sm">Overtime short</p>
              </div>
            </div>
            <button className="bg-blue-500 text-white px-3 py-1 rounded">Resend</button>
          </li>
          <li className="bg-gray-800 p-3 rounded-lg flex justify-between items-center">
            <div className="flex items-center">
              <div className="bg-gray-700 w-8 h-8 rounded-full mr-3"></div>
              <div>
                <p>Someone send you 5023 Pi</p>
                <p className="text-blue-400 text-sm">Overtime short</p>
              </div>
            </div>
            <button className="bg-blue-500 text-white px-3 py-1 rounded">Detail</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;