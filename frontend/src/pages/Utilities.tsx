import React, { useState, useEffect } from 'react';
import { ChevronDown, Send } from 'lucide-react';
import DashNav from '../components/DashNav';

interface UtilitiesProps {
  btcAmount?: number;
}

interface Category {
  identifier: string;
  name: string;
}

const Utilities: React.FC<UtilitiesProps> = ({ btcAmount = 0.1824 }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedNetwork, setSelectedNetwork] = useState('');
  const [amount, setAmount] = useState(0);
  const [phoneNumber, setNumber] = useState('');
  const [meterNumber, setMeterNumber] = useState('');
  const [subscriptionDetails, setSubscriptionDetails] = useState('');
  const [tvSubscriptionPlans, setTvSubscriptionPlans] = useState<{ name: string, variation_code: string, variation_amount: string }[]>([]);
  const [selectedProvider, setSelectedProvider] = useState('');
  const [variationCodes, setVariationCodes] = useState<{ code: string, amount: string }[]>([]);
  const [cardNumber, setCardNumber] = useState(''); 
  const [selectedVariationAmount, setSelectedVariationAmount] = useState<number | null>(null); 

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/vtpass-categories");
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setCategories(data.content);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const fetchCableVariationCodes = async (provider: string) => {
    try {
      const response = await fetch(`http://localhost:5000/api/get-cable-variation-code?cableType=${encodeURIComponent(provider)}`);
      if (!response.ok) throw new Error('Failed to fetch subscription plans');

      const data = await response.json();
      setTvSubscriptionPlans(data.content.varations);
      setVariationCodes(data.content.varations.map((variation) => ({ code: variation.variation_code, amount: variation.variation_amount })));
    } catch (error) {
      console.error('Error fetching cable variation codes:', error);
    }
  };

  const handleProviderChange = (provider: string) => {
    setSelectedProvider(provider);
    fetchCableVariationCodes(provider);
  };

  const handlePayment = async () => {
    if (!selectedCategory || (amount <= 0 && selectedCategory !== 'tv-subscription')) {
      alert('Please select a category and enter a valid amount.');
      return;
    }

    const paymentData: Record<string, any> = {
      serviceID: selectedProvider,
      amount: selectedCategory === 'tv-subscription' ? selectedVariationAmount : amount, 
    };

    if (selectedCategory === 'airtime') {
      paymentData.phone = phoneNumber;
      paymentData.network = selectedNetwork;
      paymentData.serviceID= selectedNetwork;
    } else if (selectedCategory === 'electricity') {
      paymentData.meterNumber = meterNumber;
    } else if (selectedCategory === 'tv-subscription') {
      paymentData.provider = selectedProvider;
      paymentData.plan = subscriptionDetails;
      // Adding card number to payment data for TV subscription
      paymentData.cardNumber = cardNumber;
      paymentData.phone = phoneNumber;
      // Also include billersCode and variation_code for the TV subscription
      paymentData.billersCode = cardNumber;
      paymentData.variation_code = subscriptionDetails; 
    }

    try {
      console.log(paymentData)
      const response = await fetch("http://localhost:5000/api/vtpass-cablesubscription", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData),
      });

      // console.log(response)
      if (!response.ok) throw new Error('Payment processing failed.');
      const result = await response.json();
      console.log(result.code)
      if (result.data.code === '000') {
        alert(`Payment Successful: ${result.data.response_description}`);
        // Reset all fields
        setSelectedCategory('');
        setAmount(0);
        setNumber('');
        setMeterNumber('');
        setSelectedNetwork('');
        setSelectedProvider('');
        setSubscriptionDetails('');
        setCardNumber(''); 
        setSelectedVariationAmount(null);
      }
    } catch (error) {
      console.error('Error processing payment:', error);
      alert('Payment failed. Please try again.');
    }
  };

  const renderCategorySpecificFields = () => {
    switch (selectedCategory) {
      case 'airtime':
        return (
          <>
            <select
              value={selectedNetwork}
              onChange={(e) => setSelectedNetwork(e.target.value)}
              className="w-full bg-primary-600 border border-blue-500 rounded-full p-3 appearance-none"
            >
              <option value="">Select Network</option>
              {['mtn', 'airtel', 'glo', 'etisalat'].map((net) => (
                <option key={net} value={net}>
                  {net}
                </option>
              ))}
            </select>

            {selectedNetwork && (
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="Enter Phone Number"
                className="w-full bg-transparent border-b border-blue-500 pb-2 focus:outline-none mt-4"
              />
            )}

            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(parseFloat(e.target.value))}
              placeholder="Enter Amount"
              className="w-full bg-transparent border-b border-blue-500 pb-2 focus:outline-none mt-4"
            />
          </>
        );
      case 'electricity':
        return (
          <>
            <input
              type="text"
              value={meterNumber}
              onChange={(e) => setMeterNumber(e.target.value)}
              placeholder="Enter Meter Number"
              className="w-full bg-transparent border-b border-blue-500 pb-2 focus:outline-none mt-4"
            />
          </>
        );
      case 'tv-subscription':
        return (
          <>
            <select
              value={selectedProvider}
              onChange={(e) => handleProviderChange(e.target.value)}
              className="w-full bg-primary-600 border border-blue-500 rounded-full p-3 appearance-none"
            >
              <option value="">Choose Cable Provider</option>
              {['dstv', 'startimes', 'gotv'].map((provider) => (
                <option key={provider} value={provider}>
                  {provider.toUpperCase()}
                </option>
              ))}
            </select>

            {selectedProvider && variationCodes.length > 0 && (
              <select
                value={subscriptionDetails}
                onChange={(e) => {
                  const selectedCode = variationCodes.find(v => v.code === e.target.value);
                  if (selectedCode) {
                    setSubscriptionDetails(selectedCode.code);
                    setSelectedVariationAmount(parseFloat(selectedCode.amount)); // Set amount to the selected variation amount
                  }
                }}
                className="w-full bg-primary-600 border border-blue-500 rounded-full p-3 appearance-none mt-4"
              >
                <option value="">Choose Variation Code</option>
                {variationCodes.map(({ code, amount }) => (
                  <option key={code} value={code}>
                    {code} - N{amount}
                  </option>
                ))}
              </select>
            )}
            {selectedVariationAmount !== null && ( 
              <input
                type="text"
                value={`N${selectedVariationAmount}`}
                readOnly
                className="w-full bg-transparent border-b border-blue-500 pb-2 focus:outline-none mt-4"
              />
            )}
            {subscriptionDetails && ( 
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                placeholder="Enter Card Number"
                className="w-full bg-transparent border-b border-blue-500 pb-2 focus:outline-none mt-4"
              />
            )}
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="Enter Phone Number"
                className="w-full bg-transparent border-b border-blue-500 pb-2 focus:outline-none mt-4"
              />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-primary-100 text-white h-screen w-full">
      <DashNav />
      <div className="flex items-center justify-center p-8">
        <div className="w-[700px] bg-primary-500 px-8 py-10 mx-auto rounded-2xl shadow-lg">
          <h1 className="text-4xl font-bold mb-4 text-center">Pay Utilities</h1>

          <div className="space-y-6">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-primary-600 border border-blue-500 rounded-full p-3 appearance-none"
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category.identifier} value={category.identifier}>
                  {category.name}
                </option>
              ))}
            </select>

            {renderCategorySpecificFields()}

            <button
              onClick={handlePayment}
              className="w-full flex items-center justify-center bg-blue-700 text-white p-4 rounded-full transition duration-200 hover:bg-blue-600"
            >
              <Send className="mr-2" /> Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Utilities;

