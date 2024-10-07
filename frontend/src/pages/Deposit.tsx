import React, { useState } from 'react';
import { Send } from 'lucide-react';
import DashNav from '../components/DashNav';

const Deposit = () => {
  const [amount, setAmount] = useState('');

  const handleDeposit = (e) => {
    e.preventDefault();
    // Add deposit logic here
    console.log(`Depositing: ${amount}`);
  };

  return (
    <div className='bg-primary-100 text-white h-screen w-full'>
      <DashNav />
      <div className="flex items-center justify-center p-8">
        <div className="w-[700px] bg-primary-500 px-8 py-10 mx-auto rounded-2xl shadow-lg">
          <h1 className="text-4xl font-bold mb-4 text-center">Deposit Funds</h1>
          <form onSubmit={handleDeposit} className="space-y-6">
            <div>
              <label className="block text-gray-400 ml-3 mb-2">Amount:</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full bg-transparent border-b border-blue-500 pb-2 p-2 px-5 focus:outline-none"
                placeholder="Enter amount"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-blue-700 border-2 border-white text-white w-full py-3 rounded-full flex items-center justify-center"
            >
              <Send size={20} className="mr-2" />
              Deposit Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Deposit;
