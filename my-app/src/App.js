import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Navbars from "./Components/Navbar";
import About from "./Pages/About";
import Business from "./Pages/Business";
import Entertaiment from "./Pages/Entertaiment";
import Health from "./Pages/Health";
import HomePage from "./Pages/HomePage";
import Science from "./Pages/Science";
import Sports from "./Pages/Sports";
import Technology from "./Pages/Technology";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbars />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/business" element={<Business />} />
          <Route path="/entertainment" element={<Entertaiment />} />
          <Route path="/health" element={<Health />} />
          <Route path="/science" element={<Science />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/technology" element={<Technology />} />

          <Route path="/hakkımda" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
