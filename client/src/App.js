import "./App.css";
import { Routes, Route, Navigate, useNavigate, Link } from "react-router-dom";
//logo
import logo from "./assests/logo_tp.svg";
//pages
import Home from "./Pages/Home.page";
import Sidebar from "./Components/Siderbar/Sidebar";
import MapGet from "./Components/Map/MapGet";
import Response from "./Components/Response/Response.component";
import Register from "./Components/Register/Register.component";
import FileManger from "./Components/FileManager/FileManger";
import Animation from "./Components/Animations/Animation";
import HoverAnimation from "./Components/Animations/HoverAnimation/HoverAnimation";
import Carousel from "./Components/Carousel/Carousel";

function App() {
  const navigate = useNavigate();

  return (
    <>
      <div id="main">
        <div
          className="px-10 w-full flex flex-row gap-5 justify-between items-center bg-slate-500"
          onClick={() => {
            navigate("/");
          }}
        >
          <div id="logocontainer">
            <div id="logowrapper">
              {" "}
              <img src={logo} alt="logo" />
            </div>
          </div>
          <div
            id="navbar"
            className="flex gap-4 justify-center items-center flex-row font-normal text-xl"
          >
            <Link to="/"> Home </Link>
            <a
              href="https://www.linkedin.com/in/shiva-kanchi-17888019b"
              target="_blank"
            >
              About
            </a>
            <a href="https://shivakanchi.netlify.app/contact" target="_blank">
              Contact
            </a>
          </div>
        </div>
        <Sidebar />

        <Routes>
          {/* default */}
          <Route path="/" element={<Navigate to="/home" />} />
          {/* Home */}
          <Route path="/home" element={<Home />} />
          {/* Components */}
          <Route path="/form" element={<Register />} />
          <Route path="/response" element={<Response />} />
          <Route path="/mappoint" element={<MapGet />} />
          <Route path="/filemanager" element={<FileManger />} />
          <Route path="/animation" element={<Animation />} />
          <Route path="/hoveranimation" element={<HoverAnimation />} />
          <Route path="/carousel" element={<Carousel />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
