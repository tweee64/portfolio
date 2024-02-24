import "./App.css";
import Home from "./Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";
import { useState } from "react";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <BrowserRouter>
      <div className={`${darkMode ? "dark" : ""} `}>
        <div className=" dark:bg-gray-900">
          <div>
            <NavBar onDarkMode={handleDarkMode} />
          </div>
          <div className="mt-16">
            <Home />
          </div>
          <div className="bg-about bg-cover bg-center bg-no-repeat">
            <About />
          </div>
          <div
            className="bg-experience bg-cover bg-center bg-no-repeat 
        rounded-tl-[150px] rounded-br-[150px]"
          >
            <div
              className="bg-experienceLight bg-cover bg-center 
        bg-no-repeat rounded-tl-[150px] rounded-br-[130px] mt-16"
            >
              <Experience />
            </div>
          </div>
          <div>
            <Contact />
          </div>{" "}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
