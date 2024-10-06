import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Disbursment from "./pages/Disbursement"
import Dashboard from "./pages/Dashboard";
import Utility from "./pages/Utilities"
import Tranfer from "./pages/Transfer";
import Deposit from "./pages/Deposit";
import Hero from "./pages/Hero";
import Navbar from "./components/Navbar";

function App() {
  

  return (
    <Router>
    <div className="App min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Utility" element={<Utility/>} />
          <Route path="/tranfer" element={<Tranfer />} />
          <Route path="/disbursment" element={<Disbursment />} />
          <Route path="/deposit" element={<Deposit />} />
        </Routes>
      </div>
    </div>
  </Router>
  )
}

export default App
