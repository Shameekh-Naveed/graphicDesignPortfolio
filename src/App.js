import "./App.css";
// import About from "./Component/About";
import { Routes, Route} from "react-router-dom";
import Footer from "./Component/Footer";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import Projects from "./Component/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="projects" element={<Projects />} />
      </Routes>
      {/* <About /> */}
      <Footer/>
    </div>
  );
}

export default App;
