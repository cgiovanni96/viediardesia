import React from "react";
import { BrowserRouter as RouterDOM, Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Hike from "./pages/Hike/Hike";
import Home from "./pages/Home";
import Map from "./pages/Map";
import PathList from "./pages/PathList/PathList";

const Router = () => {
  return (
    <RouterDOM>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/about" element={<About />} />
        <Route path="/:hike" element={<Hike />} />
        <Route path="/paths" element={<PathList />} />
      </Routes>
    </RouterDOM>
  );
};

export default Router;
