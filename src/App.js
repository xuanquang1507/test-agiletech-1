import "./App.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./Pages/Profile/SignIn";
import Table from "./Pages/Table/Table";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/post" element={<Table />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
