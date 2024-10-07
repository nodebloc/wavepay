import React, { useState } from 'react';
import { ChevronDown, Plus, Send } from 'lucide-react';
import DashNav from '../components/DashNav';

interface Recipient {
  address: string;
  amount: number;
}

const Disbursement: React.FC = () => {
  const [recipients, setRecipients] = useState<Recipient[]>([{ address: '', amount: 0 }]);

  const handleAddRecipient = () => {
    setRecipients([...recipients, { address: '', amount: 0 }]);
  };

  const handleRecipientChange = (index: number, field: keyof Recipient, value: string | number) => {
    const updatedRecipients = [...recipients];
    if (field === 'amount') {
      updatedRecipients[index].amount = Number(value);
    } else {
      updatedRecipients[index].address = value as string;
    }
    setRecipients(updatedRecipients);
  };

  const totalAmount = recipients.reduce((sum, recipient) => sum + recipient.amount, 0).toFixed(2);

  return (
    <div className='bg-primary-100 text-white h-screen w-full'>
      <DashNav />
      <div className="flex items-center justify-center p-8">
        <div className="w-[700px] bg-primary-500 px-8 py-6 mx-auto rounded-2xl shadow-lg overflow-hidden max-h-[80vh]">
          <h1 className="text-4xl font-bold mb-4 text-center">Disbusement</h1>
          <p className="text-center mb-6">Total Amount: ${totalAmount}</p>

          <div className="overflow-y-auto max-h-60 mb-6">
            {recipients.map((recipient, index) => (
              <div key={index} className="mb-4 mt-3 mx-4 flex justify-between space-x-5 items-center">
                <input
                  type="text"
                  placeholder="Recipient Address"
                  className="w-full bg-transparent border-b border-blue-500 pb-2 focus:outline-none pb-2 mr-2"
                  value={recipient.address}
                  onChange={(e) => handleRecipientChange(index, 'address', e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Amount"
                  className="bg-transparent border-b border-blue-500 pb-2 focus:outline-none w-40"
                  value={recipient.amount > 0 ? recipient.amount : ''}
                  onChange={(e) => handleRecipientChange(index, 'amount', e.target.value)}
                />
              </div>
            ))}
          </div>

          <button onClick={handleAddRecipient} className="text-blue-500 mx-auto flex justify-center items-center w-60 mb-4">
            <Plus size={20} className="mr-2" />
            Add Recipient
          </button>

          <button className="bg-gradient-to-r from-blue-500 to-blue-700 border-2 border-white text-white w-full py-3 rounded-full flex items-center justify-center">
            <Send size={20} className="mr-2" />
            Send now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Disbursement;
