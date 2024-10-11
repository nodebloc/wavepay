import React from 'react';
import { ChevronDown, CodeSquare, Send } from 'lucide-react';
import DashNav from '../components/DashNav';
import  { useState, useEffect } from "react";
interface UtilitiesProps {
  btcAmount?: number;
}

const Utilities: React.FC<UtilitiesProps> = ({ btcAmount = 0.1824 }) => {
  const [service, setService] = useState<string>('');
  const [provider, setProvider] = useState<string>('');
  const [plans, setPlans] = useState<{ id: string; name: string; variation_amount: string; variation_code: string }[]>([]);
  const [plan, setPlan] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [smartCardNumber, setSmartCardNumber] = useState<string>('');
  const [meterNumber, setMeterNumber] = useState<string>('');
  const [amount, setAmount] = useState<number | string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');

  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setService(e.target.value);
    setProvider('');
    setPlan('');
    setPhoneNumber('');
    setSmartCardNumber('');
    setMeterNumber('');
    setAmount('');
  };

  const handleProviderChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedProvider = e.target.value;
    setProvider(selectedProvider);
    setPlan('');
    setAmount('');

    if (service === 'data') {
      try {
        const response = await fetch(`http://127.0.0.1:5000/get-data-variation-code/${selectedProvider}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();

        if (data.status) {
          setPlans(data.data);
        } else {
          console.error('Failed to fetch data plans:', data);
        }
      } catch (error) {
        console.error('Error fetching data plans:', error);
      }
    }
  };

  const handlePlanChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedPlan = plans.find(p => p.variation_amount.toString() === e.target.value);
    setPlan(selectedPlan ? selectedPlan.variation_code : '');
    setAmount(selectedPlan ? selectedPlan.variation_amount : 0);
  };

  const handleSubmit = async () => {
    if (!amount) {
      setErrorMessage("Please select a valid plan to proceed.");
      return;
    }

    const payload = {
      phone: phoneNumber,
      serviceId: provider,
      variationCode: plan,
    };

    try {
      const response = await fetch('http://127.0.0.1:5000/api/vtpass-purchase-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccessMessage("Payment successful!");
        setErrorMessage('');
      } else {
        setErrorMessage(result.error || "An error occurred during the payment process.");
        setSuccessMessage('');
      }
    } catch (error) {
      setErrorMessage("Network error, please try again.");
      setSuccessMessage('');
    }
  };

  return (
    <div className='bg-primary-100 text-white h-screen w-full'>
      <DashNav />
      <div className="flex items-center justify-center p-8">
        <div className="w-[700px] bg-primary-500 px-8 py-10 mx-auto rounded-2xl shadow-lg">
          <h1 className="text-4xl font-bold mb-4 text-center">Pay Utilities</h1>

          <div className="space-y-6">
            {/* Service Select Box */}
            <div className="relative">
              <select
                className="w-full bg-primary-600 border border-blue-500 rounded-full p-3 appearance-none"
                value={service}
                onChange={handleServiceChange}
              >
                <option value="">What to pay</option>
                <option value="airtime">Airtime</option>
                <option value="data">Data</option>
                <option value="tv">TV</option>
                <option value="electricity">Electricity</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500" size={20} />
            </div>

            {/* Conditional Rendering Based on Selected Service */}
            {service === 'airtime' && (
              <>
                <div className="relative">
                  <select
                    className="w-full bg-primary-600 border border-blue-500 rounded-full p-3 appearance-none"
                    value={provider}
                    onChange={handleProviderChange}
                  >
                    <option value="">Select Provider</option>
                    <option value="mtn">MTN</option>
                    <option value="airtel">Airtel</option>
                    <option value="glo">Glo</option>
                    <option value="9mobile">9Mobile</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500" size={20} />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Phone Number:</label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-blue-500 pb-2 focus:outline-none"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Amount:</label>
                  <input
                    type="number"
                    className="w-full bg-transparent border-b border-blue-500 pb-2 focus:outline-none"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
              </>
            )}

            {service === 'data' && (
              <>
                <div className="relative">
                  <select
                    className="w-full bg-primary-600 border border-blue-500 rounded-full p-3 appearance-none"
                    value={provider}
                    onChange={handleProviderChange}
                  >
                    <option value="">Select Provider</option>
                    <option value="mtn">MTN</option>
                    <option value="airtel">Airtel</option>
                    <option value="glo">Glo</option>
                    <option value="9mobile">9Mobile</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500" size={20} />
                </div>
                <div className="relative">
                  <select
                    className="w-full bg-primary-600 border border-blue-500 rounded-full p-3 appearance-none"
                    value={plan}
                    onChange={handlePlanChange}
                  >
                    <option value="">Select Data Plan</option>
                    {plans.map((p, index) => (
                      <option key={index} value={p.variation_amount}>
                        {p.name} - ₦{p.variation_amount}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500" size={20} />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Phone Number:</label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-blue-500 pb-2 focus:outline-none"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Amount:</label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-blue-500 pb-2 focus:outline-none"
                    value={amount}
                    disabled
                  />
                </div>
              </>
            )}

            {service === 'tv' && (
              <>
                <div className="relative">
                  <select
                    className="w-full bg-primary-600 border border-blue-500 rounded-full p-3 appearance-none"
                    value={provider}
                    onChange={handleProviderChange}
                  >
                    <option value="">Select Provider</option>
                    <option value="gotv">GoTV</option>
                    <option value="dstv">DSTV</option>
                    <option value="startimes">Startimes</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500" size={20} />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Smart Card Number:</label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-blue-500 pb-2 focus:outline-none"
                    value={smartCardNumber}
                    onChange={(e) => setSmartCardNumber(e.target.value)}
                  />
                </div>
                {/* Verification step can go here */}
                <div>
                  <label className="block text-gray-400 mb-2">Amount:</label>
                  <input
                    type="number"
                    className="w-full bg-transparent border-b border-blue-500 pb-2 focus:outline-none"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
              </>
            )}

            {service === 'electricity' && (
              <>
                <div className="relative">
                  <select
                    className="w-full bg-primary-600 border border-blue-500 rounded-full p-3 appearance-none"
                    value={provider}
                    onChange={handleProviderChange}
                  >
                    <option value="">Select Provider</option>
                    <option value="jed">JED</option>
                    <option value="aedc">AEDC</option>
                    <option value="keds">KEDS</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500" size={20} />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Meter Number:</label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-blue-500 pb-2 focus:outline-none"
                    value={meterNumber}
                    onChange={(e) => setMeterNumber(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Amount:</label>
                  <input
                    type="number"
                    className="w-full bg-transparent border-b border-blue-500 pb-2 focus:outline-none"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
              </>
            )}

            {errorMessage && <p className="text-red-500 text-center mt-4">{errorMessage}</p>}
            {successMessage && <p className="text-green-500 text-center mt-4">{successMessage}</p>}

            {/* Submit Button */}
            <div className="text-center mt-6">
              <button
                className="bg-blue-500 text-white w-52 p-3 rounded-full"
                onClick={handleSubmit}
              >
                <Send className="inline-block mr-2" size={20} /> Pay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Utilities;
