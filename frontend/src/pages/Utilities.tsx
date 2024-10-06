import React from 'react';
import { ChevronDown, Send } from 'lucide-react';

interface UtilitiesProps {
  btcAmount?: number;
}

const Utilities: React.FC<UtilitiesProps> = ({ btcAmount = 0.1824 }) => {
  return (
    <div className="bg-gray-900 text-white min-h-screen w-full p-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Pay Utilities</h1>
        
        <div className="space-y-6">
          <div className="relative">
            <select className="w-full bg-gray-800 border border-blue-500 rounded-md p-3 appearance-none">
              <option value="">Who to pay</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500" size={20} />
          </div>

          <div>
            <label className="block text-gray-400 mb-2">Amount:</label>
            <input type="text" className="w-full bg-transparent border-b border-blue-500 pb-2 focus:outline-none" />
          </div>

          <div className="relative">
            <div className="w-full bg-gray-800 border border-blue-500 rounded-md p-3 flex justify-between items-center">
              <span>{btcAmount.toFixed(4)}</span>
              <div className="flex items-center">
                <img src="/api/placeholder/24/24" alt="Bitcoin" className="w-6 h-6 mr-2" />
                <span className="mr-2">BTC</span>
                <ChevronDown size={20} />
              </div>
            </div>
          </div>

          <button className="bg-blue-500 text-white w-full py-3 rounded-md flex items-center justify-center mt-8">
            <Send size={20} className="mr-2" />
            Pay now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Utilities;