import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

//Web3 Modal imports
import { createAppKit } from "@reown/appkit/react";

import { WagmiProvider } from "wagmi";
import { arbitrum, baseSepolia, mainnet } from "@reown/appkit/networks";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";

import Disbursment from "./pages/Disbursement";
import Utility from "./pages/Utilities";
import Tranfer from "./pages/Transfer";
import Deposit from "./pages/Deposit";
import Hero from "./pages/Hero";
import Navbar from "./components/Navbar";

// 0. Setup queryClient
const queryClient = new QueryClient();

// 1. Get projectId from https://cloud.reown.com
const projectId = "5d73160471ad9e4c0707a901a089044c";

// 3. Set the networks
const networks = [mainnet, baseSepolia, arbitrum];

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
    "--w3m-font-size-master": "0.6rem",
    "--wui-color-gray-glass-010": "0",
  },
});

export function AppKitProvider({ children }) {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
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
              <Route path="/utility" element={<Utility />} />
              <Route path="/tranfer" element={<Tranfer />} />
              <Route path="/disbursment" element={<Disbursment />} />
              <Route path="/deposit" element={<Deposit />} />
            </Routes>
          </div>
        </div>
      </Router>
    </AppKitProvider>
  );
}

export default App;
