import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { IntlProvider } from "react-intl";

import "mapbox-gl/dist/mapbox-gl.css";

import Home from "./pages/Home";
import Hike from "./pages/Hike/Hike";
import Auth from "./pages/Auth";

import locales from "./utils/context/localesContext";
import About from "./pages/About";
import Map from "./pages/Map";
import PathList from "./pages/PathList/PathList";
import { LocaleContext } from "./utils/context";
import getLocalMessages from "./utils/getLocalMessages";

const App = () => {
  const [locale, setLocale] = useState(locales.it);
  const value = { locale, setLocale };
  const [authorized, setAuthorized] = useState(false);

  let messages = getLocalMessages(locales.id);

  return (
    <LocaleContext.Provider value={value}>
      <IntlProvider locale={value.locale.locale} messages={messages}>
        {true ? (
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
