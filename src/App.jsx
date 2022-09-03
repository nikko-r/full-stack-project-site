import "./App.scss";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import API from "./pages/API/API.jsx";
import UserSubmissions from "./pages/UserSubmissions/UserSubmissions.jsx";
import TrueRNG from "./pages/TrueRNG/TrueRNG.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/api" element={<API />} />
        <Route path="/usersubmissions" element={<UserSubmissions />} />
        <Route path="/truerng" element={<TrueRNG />} />
      </Routes>
    </Router>
  );
}

export default App;
