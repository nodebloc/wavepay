import React from "react";
import { Send, Plus, ChevronDown } from "lucide-react";
import DashNav from "../components/DashNav";

const Dashboard = () => {
  return (
    <div className="bg-primary-100 min-h-screen flex flex-col ">
      <DashNav/>
      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 py-6 grid grid-cols-1 md:grid-cols-3 gap-8 mt-5">
        {/* My Wallet Card */}
        <div className="bg-primary-500 text-white  p-6 rounded-3xl space-y-40  shadow-lg h-[340px]">
          <div>
          <h2 className="text-xl font-semibold mb-4">My Wallet</h2>
          <p className="text-4xl font-bold mb-6">₦200,101</p>
          </div>
          <div className="flex gap-4">
            <button className="bg-gradient-to-r from-blue-500 to-blue-700 border-2 border-white text-white px-6 py-2 rounded-full hover:bg-blue-400 transition-all">
              Withdraw
            </button>
            <button className="bg-gradient-to-r from-blue-500 to-blue-700 border-2 border-white text-white px-6 py-2 rounded-full hover:bg-blue-400 transition-all">
              Deposit
            </button>
          </div>
        </div>

        {/* Quick Transfer Card */}
        <div className="bg-primary-500 text-white  p-6 rounded-3xl shadow-lg h-[340px]">
          <h2 className="text-xl font-semibold mb-4">Quick Transfer</h2>
          <div className="space-y-6">
          <div className="mb-4">
            <label className="block text-sm mb-2">Amount</label>
            <input
              type="text"
              className="w-full bg-primary-600 p-3 rounded-full focus:outline-none"
              placeholder="Enter amount"
            />
          </div>
          <div className="flex flex-col mb-6">
      <label className="block text-sm mb-2">Asset</label>
      <div className="relative">
        <select className="bg-primary-600 p-3 pr-10 rounded-full w-full appearance-none">
          <option>USDC</option>
          <option>USDT</option>
        </select>
        {/* Dropdown Icon */}
        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
          <ChevronDown className="text-gray-400" size={20} />
        </div>
      </div>
    </div>
         
          <button className="bg-gradient-to-r from-blue-500 to-blue-700 border-2 border-white w-full py-3 rounded-full flex justify-center items-center text-white hover:bg-blue-400 transition-all">
            <Send className="mr-2" size={18} /> Send now
          </button>
          </div>
        </div>

        {/* My Assets Card */}
        <div className="bg-primary-500 text-white  p-6 rounded-3xl space-y-12  shadow-lg h-[340px]">
          <h2 className="text-xl font-semibold mb-4">My Assets</h2>
          <ul>
            <li className="flex justify-between items-center mb-2">
              <span>Bitcoin</span>
              <span className="text-blue-400">0.52 BTC</span>
            </li>
            <li className="flex justify-between items-center mb-2">
              <span>Ethereum</span>
              <span className="text-blue-400">5.13 ETH</span>
            </li>
            <li className="flex justify-between items-center mb-2">
              <span>USDT</span>
              <span className="text-blue-400">820 USDT</span>
            </li>
          </ul>
          dic
          <button className="bg-gradient-to-r from-blue-500 to-blue-700 border-2 border-white w-full mt-6 py-3 rounded-full flex justify-center items-center text-white hover:bg-blue-400 transition-all">
            <Plus className="mr-2" size={18} /> Deposit
          </button>
        </div>

        {/* Activity Card */}
        <div className="col-span-1 md:col-span-3 bg-primary-500 text-white  p-6 rounded-3xl shadow-lg h-auto mt-6">
          <h2 className="text-xl font-semibold mb-4">Activity</h2>
          <ul className="space-y-4">
            <li className="flex justify-between items-center bg-primary-600 p-3 rounded-full">
              <div className="flex items-center">
                <div className="bg-gray-600 w-10 h-10 rounded-full mr-4"></div>
                <div>
                  <p>Someone sent you a transaction request</p>
                  <p className="text-gray-400 text-sm">23 Apr, 2023 - 21:22</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="bg-gray-600 px-4 py-2 rounded-full hover:bg-gray-500 transition-all">
                  Reject
                </button>
                <button className="bg-gradient-to-r from-blue-500 to-blue-700 border-2 border-white px-4 py-2 rounded-full hover:bg-blue-400 transition-all">
                  Accept
                </button>
              </div>
            </li>
            <li className="flex justify-between items-center bg-primary-600 p-3 rounded-full">
              <div className="flex items-center">
                <div className="bg-gray-600 w-10 h-10 rounded-full mr-4"></div>
                <div>
                  <p>Someone canceled your transaction request</p>
                  <p className="text-blue-400 text-sm">Overtime short</p>
                </div>
              </div>
              <button className="bg-gradient-to-r from-blue-500 to-blue-700 border-2 border-white px-4 py-2 rounded-full hover:bg-blue-400 transition-all">
                Resend
              </button>
            </li>
            <li className="flex justify-between items-center bg-primary-600 p-3 rounded-full">
              <div className="flex items-center">
                <div className="bg-gray-600 w-10 h-10 rounded-full mr-4"></div>
                <div>
                  <p>Someone sent you 5023 Pi</p>
                  <p className="text-blue-400 text-sm">Overtime short</p>
                </div>
              </div>
              <button className="bg-gradient-to-r from-blue-500 to-blue-700 border-2 border-white px-4 py-2 rounded-full hover:bg-blue-400 transition-all">
                Detail
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
