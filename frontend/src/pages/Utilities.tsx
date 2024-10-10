import React from 'react';
import { ChevronDown, CodeSquare, Send } from 'lucide-react';
import DashNav from '../components/DashNav';
import  { useState, useEffect } from "react";
interface UtilitiesProps {
  btcAmount?: number;
}
interface Category {
  identifier: string;
  name: string;
}

const network:Array<string> = ["mtn","airtel", "glo", "etisalat"]

const Utilities: React.FC<UtilitiesProps> = ({ btcAmount = 0.1824 }) => {
  const [categories, setCategories] = useState<Category[]>([]); // State for categories
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedNetwork, setSelectedNetwork] = useState('');  
  const [amount, setAmount] = useState('');  
  const [phoneNumber, setNumber] = useState('');  
 

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        // Fetching balance from the backend
        const response = await fetch("http://localhost:5000/api/vtpass-categories");
        // console.log(response)
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        
        setCategories(data.content);
      } catch (error) {
        console.error("Error fetching balance:", error); // Handle any errors
      }
    };

    fetchBalance(); // Call the function when the component loads
  }, [selectedCategory]);

  const handlePayment = async () => {
    if (!selectedCategory || !selectedNetwork || !amount) {
      alert("Please select a category, network, and enter an amount.");
      return;
    }

    const paymentData = {
      // category: selectedCategory,
      serviceId: selectedNetwork,
      phone:phoneNumber,
      amount: parseFloat(amount),
    };

    try {
      const response = await fetch("http://localhost:5000/api/vtpass-purchase", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentData),
      });

      if (!response.ok) {
        throw new Error("Payment processing failed.");
      }

      const result = await response.json();
      console.log(result)
      // Handle the response as needed
      if(result.code === "000")
      {
      alert(`Payment Successful: ${result.response_description}`);
      }
      // Optionally reset the form
      setSelectedCategory('');
      setSelectedNetwork('');
      setAmount('');
    } catch (error) {
      console.error("Error processing payment:", error);
      alert("Payment failed. Please try again.");
    }
  };

  return (
    <div className='bg-primary-100 text-white h-screen w-full'>
      <DashNav />
      <div className="flex items-center justify-center p-8">
        {/* Increased the max-w-lg for a larger card */}
        <div className="w-[700px] bg-primary-500 px-8 py-10 mx-auto rounded-2xl shadow-lg">
          <h1 className="text-4xl font-bold mb-4 text-center">Pay Utilities</h1>
          
          <div className="space-y-6">
            <div className="relative">
              <select 
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-primary-600 border border-blue-500 rounded-full p-3 appearance-none">
                {/* <option value="">Who to pay</option>
                <option value="">Who to pay</option>
                <option value="">Who to pay</option> */}
                <option value="">Who to pay</option>
                {categories.map((category) => (
                  <option key={category.identifier} value={category.identifier}>
                    {category.name}
                  </option>
                ))}
               
              </select>
             
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500" size={20} />
              
            </div>
            {/* console.log({selectedCategory}) */}
            <div>
              {selectedCategory === 'airtime' ? (
               <div className="relative">
               <select 
                 value={selectedNetwork} 
                 onChange={(e) => setSelectedNetwork(e.target.value)}
                 className="w-full bg-primary-600 border border-blue-500 rounded-full p-3 appearance-none"
               >
                 <option value="">Select Network</option>
                 {network.map((net) => (
                   <option key={net} value={net}>
                     {net}
                   </option>
                 ))}
               </select>
               <div>
                  <label className="block text-gray-400 mb-2">Amount:</label>
                  <input 
                    type="text" 
                    value={amount} 
                    onChange={(e) => setAmount(e.target.value)} // Control the input
                    className="w-full bg-transparent border-b border-blue-500 pb-2 focus:outline-none" 
                  />
                  
                  <label className="block text-gray-400 mb-2">Phone Number:</label>
                  <input 
                    type="text" 
                    value={phoneNumber} 
                    onChange={(e) => setNumber(e.target.value)} // Control the input
                    className="w-full bg-transparent border-b border-blue-500 pb-2 focus:outline-none" 
                  />
                </div>
               {/* console.log({selectedNetwork}) */}
               {/* <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500" size={20} /> */}
             </div>): null }
              {/* <label className="block text-gray-400 mb-2">Amount:</label>
              <input type="text" className="w-full bg-transparent border-b border-blue-500 pb-2 focus:outline-none" />
             */}
             {/* console.log({amount}) */}
             </div>

            {/* <div className="relative">
              <div className="w-full bg-primary-600 border border-blue-500 rounded-full p-3 flex justify-between items-center">
                <span>{btcAmount.toFixed(4)}</span>
                <div className="flex items-center">
                  <img src="/api/placeholder/24/24" alt="Bitcoin" className="w-6 h-6 mr-2" />
                  <span className="mr-6">BTC</span>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500" size={20} />
                </div>
              </div>
            </div> */}

            <button onClick={handlePayment} 
            className="bg-gradient-to-r from-blue-500 to-blue-700 border-2 border-white text-white w-full py-3 rounded-full flex items-center justify-center mt-8">
              <Send size={20} className="mr-2" />
              Pay now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Utilities;
