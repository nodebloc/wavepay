# **WavePay**
### WavePay is a decentralized financial platform designed to bridge the gap between cryptocurrency and traditional fiat services. 
### It provides users with a seamless experience for depositing and converting cryptocurrencies into fiat, making payments for utility services, transferring and disbursing funds, and more. This platform leverages both cryptocurrency and fiat to enable a wide range of financial operations, empowering users to manage their digital assets efficiently.
## Features & Functionalities

### 1. Accept Deposit of Cryptocurrency
Users can deposit various supported cryptocurrencies (e.g., Bitcoin, Ethereum, USDT) directly into the platform.
- Users select the cryptocurrency they want to deposit.
- They transfer the crypto to their unique wallet address.
- Real-time balance updates once the blockchain confirms the transaction.
- Support for multiple cryptocurrencies.

### 2. Convert Crypto to Fiat
After depositing cryptocurrency, users can convert it into local fiat currency for further use (e.g., USD, NGN).
- Users select the amount of crypto they want to convert.
- The platform calculates the equivalent fiat value based on current exchange rates.
- Upon confirmation, the converted fiat is credited to the user's fiat balance.
- Real-time exchange rates for crypto-to-fiat conversions.
- Secure and fast conversion process.
- Transparent fees applied during conversion.

### 3. Utility Payment Services
WavePay allows users to pay for a variety of utility services such as:
- Airtime Recharge
- TV Subscription (e.g., DSTV, GoTV)
- Data Subscription
- Electricity Bill Payments
- Water Bill Payments

#### Flow:
- Users select the service they want to pay for (e.g., Airtime, TV Subscription).
- They enter the required details (e.g., phone number, customer ID).
- Users choose to pay either with their fiat balance (converted from crypto) or directly with cryptocurrency.
- Upon successful payment, the platform confirms the transaction, and the service is activated.

#### Key Details:
- Integration with major utility providers and payment APIs (e.g., Yellowcard, Paystack).
- Instant confirmation of payment to service providers.
- Option to pay directly in crypto or convert crypto to fiat before payment.

### 4. Disbursement of Funds
Users can disburse funds to multiple recipients at once, useful for businesses or individuals making bulk payments.

#### Flow:
- Users upload a list of recipients and the respective amounts.
- The total funds to be disbursed are deducted from the user's wallet (crypto).
- The platform handles the distribution of funds to each recipient.
- Support for bulk payments to multiple recipients.

### 5. Transfers of Funds
Users can transfer funds (crypto ) to other users on the platform or external wallet addresses.
- Users input the recipient’s wallet address and the amount to be transferred.
- The transaction is processed and confirmed on-chain (for crypto transfers) or via the platform's fiat system.
- Secure transfer of crypto between WavePay users or to external wallets.
- Blockchain confirmations for crypto transfers.
- Transaction history available for all transfers.

### 6. Deposit of Fiat
Users can deposit fiat currency (e.g., USD, NGN) directly into the platform via supported payment methods.

#### Flow:
- Users select their preferred payment method (e.g., bank transfer, credit card, Paystack).
- They deposit the desired amount into their WavePay fiat wallet.
- Once the deposit is confirmed, the fiat balance is updated, allowing users to make payments, disbursements, or transfers.

#### Key Details:
- Integration with payment gateways for fiat deposits (e.g., Paystack, Yellowcard).
- Fast and secure deposit methods.
- Transparent deposit fees (if applicable).
  
## API Integrations

The WavePay platform integrates with several third-party services to provide seamless payment processing, crypto-to-fiat conversions, and more.

- **Yellowcard API**: Used for crypto-to-fiat conversions and fiat withdrawals to local bank accounts.
- **Paystack API**: Facilitates fiat deposits and payments for utility services like airtime, TV, and data subscriptions.
- **Blockchain Networks**: Handles all cryptocurrency transactions securely, ensuring transparency and immutability.

## Technology Used

### Smart Contracts
- **Solidity**: Used to develop smart contracts that enable decentralized functionalities such as cryptocurrency transfers, bulk disbursements, and utility payments on the blockchain.
- **Hardhat**: A development environment and task runner used for compiling, testing, and deploying smart contracts on Ethereum and Ethereum-compatible networks.
- **Base Network for Deployment**: Ethereum Layer 2 network used to deploy the smart contracts for WavePay’s decentralized functionalities.
  
### Backend
- **Flask**: A lightweight Python web framework for building the server-side logic and handling requests.
- **Python**: As the programming language for backend development.
 - **Yellowcard API**: For crypto-to-fiat conversion and fiat withdrawals.
- **Paystack API**: For fiat deposits and utility payments.
- **Blockchain Networks**: To securely handle all cryptocurrency-related transactions.
 
### Frontend
- **React.js**: For building the user interface, providing a responsive and intuitive user experience.
- **Tailwind CSS**: For rapid UI styling and design, ensuring a clean and responsive layout.
 - **Web3Modal**: For seamless wallet connection, allowing users to connect various wallets like MetaMask, WalletConnect, etc.
- **Ethers.js**: For interacting with Ethereum wallets and handling blockchain transactions, ensuring smooth integration with smart contracts.

