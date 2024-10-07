import React from 'react';
import { ChevronDown, Send } from 'lucide-react';
import DashNav from '../components/DashNav';

const Transfer: React.FC = () => {
  return (
    <div className='bg-primary-100 text-white h-screen w-full'>
      <DashNav />
      <div className="flex items-center justify-center p-8">
        {/* Increased the max-w-lg for a larger card */}
        <div className="w-[700px] bg-primary-500 px-8 py-10 mx-auto rounded-2xl shadow-lg">
          <h1 className="text-4xl font-bold mb-4 text-center">Transfer Funds</h1>
          
          <div className="space-y-6">
            <div>
              <label className="block text-gray-400 mb-2">Recipient Address:</label>
              <input type="text" className="w-full bg-transparent border-b border-blue-500 pb-2 focus:outline-none" />
            </div>

            <div>
              <label className="block text-gray-400 mb-2">Amount:</label>
              <input type="text" className="w-full bg-transparent border-b border-blue-500 pb-2 focus:outline-none" />
            </div>

            <div className="relative">
              <div className="w-full bg-primary-600 border border-blue-500 rounded-full p-3 flex justify-between items-center">
                <span>0.0000</span> {/* Replace with the actual BTC amount if needed */}
                <div className="flex items-center">
                  <img src="/api/placeholder/24/24" alt="Bitcoin" className="w-6 h-6 mr-2" />
                  <span className="mr-2">BTC</span>
                  <ChevronDown size={20} />
                </div>
              </div>
            </div>

            <button className="bg-gradient-to-r from-blue-500 to-blue-700 border-2 border-white text-white w-full py-3 rounded-full flex items-center justify-center mt-8">
              <Send size={20} className="mr-2" />
              Transfer now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transfer;
