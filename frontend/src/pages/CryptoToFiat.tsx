import React, { useState, useEffect } from 'react';
import { Send } from 'lucide-react';
import DashNav from '../components/DashNav';
import { toast } from 'react-toastify';

const CryptoToFiat = () => {
  const [amount, setAmount] = useState<string>('');
  const [nairaEquivalent, setNairaEquivalent] = useState<number>(0);
  const [bankAccounts, setBankAccounts] = useState<string[]>([]);
  const [selectedBankAccount, setSelectedBankAccount] = useState<string>('');
  const [exchangeRate, setExchangeRate] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  // Simulate fetching bank accounts
  const fetchBankAccounts = async () => {
    const accounts = await fetch('/api/bankAccounts');
    setBankAccounts(await accounts.json());
  };

  // Simulate setting an exchange rate
  useEffect(() => {
    setExchangeRate(500); 
  }, []);

  useEffect(() => {
    fetchBankAccounts();
  }, []);

  useEffect(() => {
    if (amount && exchangeRate) {
      setNairaEquivalent(parseFloat(amount) * exchangeRate);
    } else {
      setNairaEquivalent(0);
    }
  }, [amount, exchangeRate]);

  // Handle form submission
  const handleConvert = (e: React.FormEvent) => {
    e.preventDefault();

    if (!amount || parseFloat(amount) <= 0) {
      toast.error('Please enter a valid amount');
      return;
    }

    if (!selectedBankAccount) {
      toast.error('Please select a bank account');
      return;
    }

    setLoading(true);
    // Simulate successful conversion request
    setTimeout(() => {
      toast.success('Conversion request submitted');
      setLoading(false);
    }, 1000);
  };

  return (
    <div className='bg-primary-100 text-white min-h-screen w-full'>
      <DashNav />
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-lg bg-primary-500 px-8 py-10 mx-auto rounded-2xl shadow-lg">
          <h1 className="text-4xl font-bold mb-4 text-center">Convert Crypto to Naira</h1>
          <form onSubmit={handleConvert} className="space-y-6">
            <div>
              <label className="block text-gray-400 ml-3 mb-2">Amount (USDT):</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full bg-transparent border-b border-blue-500 pb-2 p-2 px-5 focus:outline-none"
                placeholder="Enter amount in USDT"
                required
              />
            </div>
            <div>
              <label className="block text-gray-400 ml-3 mb-2">Equivalent (NGN):</label>
              <input
                type="text"
                value={nairaEquivalent}
                readOnly
                className="w-full bg-transparent border-b border-blue-500 pb-2 p-2 px-5 focus:outline-none"
                placeholder="Naira equivalent"
              />
            </div>
            <div>
              <label className="block text-gray-400 ml-3 mb-2">Select Bank Account:</label>
              <select
                value={selectedBankAccount}
                onChange={(e) => setSelectedBankAccount(e.target.value)}
                className="w-full bg-transparent border-b border-blue-500 pb-2 p-2 px-5 focus:outline-none"
                required
              >
                <option value="">-- Select Bank Account --</option>
                {bankAccounts.map((account, index) => (
                  <option key={index} value={account}>
                    {account}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className={`bg-gradient-to-r from-blue-500 to-blue-700 border-2 border-gray-300 text-white w-full py-3 rounded-full flex items-center justify-center ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={loading}
            >
              <Send size={20} className="mr-2" />
              {loading ? 'Processing...' : 'Convert and Send'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CryptoToFiat;
