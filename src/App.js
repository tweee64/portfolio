import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import NavBar from "./NavBar";
function App() {
  return (
    <BrowserRouter>
      {/* <MainLayout> */}

      <div className="relative z-0">
        <div>
          <NavBar />
          <Home />
        </div>
        <div className="bg-about bg-cover bg-center bg-no-repeat">
          <About />
        </div>

        {/* <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
          <Tech />
        </div> */}

        {/* <Projects /> */}

        <div
          className="bg-experience bg-cover bg-center bg-no-repeat 
        rounded-tl-[150px] rounded-br-[150px]"
        >
          <div
            className="bg-experienceLight bg-cover bg-center 
        bg-no-repeat rounded-tl-[150px] rounded-br-[130px]"
          >
            <Experience />
          </div>
        </div>
        <div>
          <Contact />
        </div>
      </div>
      {/* </MainLayout> */}
    </BrowserRouter>
  );
}

export default App;
