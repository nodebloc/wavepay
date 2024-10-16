import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";


//Web3 Modal imports

import { createAppKit } from '@reown/appkit/react'

import { WagmiProvider } from 'wagmi'
import { arbitrum, baseSepolia, mainnet, base } from "@reown/appkit/networks";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'

//Pages Imports
import Disbursment from "./pages/Disbursement";
import Utility from "./pages/Utilities";
import Tranfer from "./pages/Transfer";
import Deposit from "./pages/Deposit";
import CryptoFiat from "./pages/CryptoToFiat";
import Hero from "./pages/Hero";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";


// 0. Setup queryClient
const queryClient = new QueryClient()

// 1. Get projectId from https://cloud.reown.com
const projectId = '5d73160471ad9e4c0707a901a089044c'

// 2. Create a metadata object - optional
const metadata = {
  name: 'wavepay',
  description: 'AppKit Example',
  url: 'https://reown.com/appkit', // origin must match your domain & subdomain
  icons: ['https://assets.reown.com/reown-profile-pic.png']
}

// 3. Set the networks
const networks = [baseSepolia, base];

// 4. Create Wagmi Adapter
const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: true,
});

// 5. Create modal
createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  features: {
    analytics: true,
  },
  themeVariables: {
    "--w3m-accent": "transparent",
    "--w3m-color-mix-strength": 0,
    "--w3m-font-size-master": "0.5rem",
  },
});

export function AppKitProvider({ children }) {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}


function App() {
  return (
    <AppKitProvider>
      <Router>
        <div className="App min-h-screen flex flex-col">
          <Navbar />
          <div className="flex-grow overflow-hidden">
            <Routes>
              <Route path="/" element={<Hero />} />

              <Route path="/hero" element={<Hero />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashboard/utility" element={<Utility />} />
              <Route path="/dashboard/transfer" element={<Tranfer />} />
              <Route path="/dashboard/disbursment" element={<Disbursment />} />
              <Route path="/dashboard/deposit" element={<Deposit />} />
              <Route path="/dashboard/cryptofiat" element={<CryptoFiat />} />
            </Routes>
          </div>
        </div>
      </Router>
      </AppKitProvider>

  );
}

export default App;
