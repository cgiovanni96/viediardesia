import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { IntlProvider } from "react-intl";

import "mapbox-gl/dist/mapbox-gl.css";

import About from "./pages/About";
// import Auth from "./pages/Auth";
import Hike from "./pages/Hike/Hike";
import Home from "./pages/Home";
import Map from "./pages/Map";
import PathList from "./pages/PathList/PathList";

import localesContext from "./utils/context/localesContext";
import { LocaleContext } from "./utils/context";
import getLocalMessages from "./utils/getLocalMessages";

const App = () => {
  const [locale, setLocale] = useState(localesContext.it);
  const value = { locale, setLocale };
  // const [authorized, setAuthorized] = useState(false);

  const [messages, setMessages] = useState();

  useEffect(() => {
    const localMessages = getLocalMessages(locale.id);
    setMessages(localMessages);
  }, [locale]);

  // let messages = getLocalMessages(locales.id);

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
        ) : // <Auth setAuthorized={setAuthorized} />
        null}
      </IntlProvider>
    </LocaleContext.Provider>
  );
};

export default App;
