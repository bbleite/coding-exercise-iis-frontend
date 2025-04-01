import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";
import CloseAccount from "./CloseAccount";
import CreateAccount from "./CreateAccount";

function App() {
  return (
    <>
      <Router>
        <div style={{ textAlign: "center", padding: "20px" }}>
          <h2>Banking Operations</h2>
          <nav>
            <Link to="/deposit" style={{ margin: "10px" }}>
              Deposit
            </Link>
            <Link to="/withdraw" style={{ margin: "10px" }}>
              Withdraw
            </Link>
            <Link to="/create-account" style={{ margin: "10px" }}>
              Open Account
            </Link>
            <Link to="/close-account" style={{ margin: "10px" }}>
              Close Account
            </Link>
          </nav>

          <Routes>
            <Route path="/deposit" element={<Deposit />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/close-account" element={<CloseAccount />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
