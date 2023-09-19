import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

//pages
import Home from "./Pages/Home.page";
import Sidebar from "./Components/Sidebar/Sidebar";
import MapGet from "./Components/Map/MapGet";
import Response from "./Components/Response/Response.component";
import Register from "./Components/Register/Register.component";
import FileManger from "./Components/FileManager/FileManger";
import Animation from "./Components/Animations/Animation";
import HoverAnimation from "./Components/Animations/HoverAnimation/HoverAnimation";
import Carousel from "./Components/Carousel/Carousel";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <div id="main">
        <Navbar />
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
