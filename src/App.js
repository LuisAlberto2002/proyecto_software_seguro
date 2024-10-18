import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./assets/pages/Login";
import Dashboard from "./assets/pages/Dashboard";
import Constancias from "./assets/pages/Constancias";
//
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Dashboard" element={<Dashboard />} />

        <Route path="Constancias" element={<Constancias />} />
      </Routes>
    </Router>
  );
}

export default App;
