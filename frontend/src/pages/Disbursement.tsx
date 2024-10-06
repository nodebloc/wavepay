import React from 'react';
import { ChevronDown, Plus, Send } from 'lucide-react';

interface DisbursementProps {
  amount?: number;
  recipientCount?: number;
  btcAmount?: number;
}

const Disbursement: React.FC<DisbursementProps> = ({
  amount = 0,
  recipientCount = 0,
  btcAmount = 0
}) => {
  return (
    <div className="bg-gray-900 text-white min-h-screen w-full p-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">Disbursement</h1>
        
        <p className="text-center mb-6">
          Sending ${amount.toFixed(2)} to {recipientCount} {recipientCount === 1 ? 'person' : 'people'}
        </p>
        
        <div className="flex justify-center space-x-4 mb-6">
          <div className="bg-blue-500 rounded-full p-2">
            <img src="/api/placeholder/40/40" alt="PlayStation" className="w-10 h-10" />
          </div>
          <div className="bg-blue-500 rounded-full p-2">
            <img src="/api/placeholder/40/40" alt="User" className="w-10 h-10" />
          </div>
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-400 mb-2">Address:</label>
          <div className="relative">
            <input type="text" className="w-full bg-gray-800 rounded-md p-2 pr-10" />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500">
              <Plus size={20} />
            </button>
          </div>
        </div>
        
        <div className="bg-gray-800 rounded-md p-3 flex justify-between items-center mb-6">
          <span>{btcAmount.toFixed(4)}</span>
          <div className="flex items-center">
            <img src="/api/placeholder/24/24" alt="Bitcoin" className="w-6 h-6 mr-2" />
            <span className="mr-2">BTC</span>
            <ChevronDown size={20} />
          </div>
        </div>
        
        <div className="mb-6">
          <p className="text-blue-500">Amount: <span className="text-white text-2xl font-bold">${amount.toFixed(2)}</span></p>
        </div>
        
        <button className="text-blue-500 block mx-auto mb-6">Review recipients</button>
        
        <button className="bg-blue-500 text-white w-full py-3 rounded-md flex items-center justify-center">
          <Send size={20} className="mr-2" />
          Send now
        </button>
      </div>
    </div>
  );
};

export default Disbursement;