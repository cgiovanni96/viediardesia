import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { IntlProvider } from "react-intl";

import "mapbox-gl/dist/mapbox-gl.css";

import Home from "./pages/Home";
import Hike from "./pages/Hike/Hike";
import Auth from "./pages/Auth";

import locales from "./languages/locales";
import Italian from "./languages/it-IT.json";
import English from "./languages/en-US.json";
import About from "./pages/About";
import Map from "./pages/Map";
import PathList from "./pages/PathList/PathList";

export const LocaleContext = React.createContext(locales);

const App = () => {
  const [locale, setLocale] = useState(locales.it);
  const value = { locale, setLocale };
  const [authorized, setAuthorized] = useState(false);

  let messages = locale.id === "it" ? Italian : English;

  return (
    <LocaleContext.Provider value={value}>
      <IntlProvider locale={value.locale.locale} messages={messages}>
        {authorized ? (
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/map" element={<Map />} />
              <Route path="/about" element={<About />} />
              <Route path="/:hike" element={<Hike />} />
              <Route path="/paths" element={<PathList />} />
            </Routes>
          </Router>
        ) : (
          <Auth setAuthorized={setAuthorized} />
        )}
      </IntlProvider>
    </LocaleContext.Provider>
  );
};

export default App;
