import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Disbursment from "./pages/Disbusement"
import Utility from "./pages/Utility";
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
          <Route path="/utility" element={<Utility />} />
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
