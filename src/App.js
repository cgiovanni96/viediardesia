import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { IntlProvider } from "react-intl";

import "mapbox-gl/dist/mapbox-gl.css";

import Home from "./pages/Home";
import Hike from "./pages/Hike/Hike";

import locales from "./languages/locales";
// import Italian from "./languages/it-IT.json";
import English from "./languages/en-US.json";

export const LocaleContext = React.createContext(locales);

const App = () => {
  const [locale, setLocale] = useState(locales.it);
  const value = { locale, setLocale };

  const localeContext = useContext(LocaleContext);

  console.log(localeContext);

  return (
    <LocaleContext.Provider value={value}>
      <IntlProvider locale={value.locale.locale} messages={English}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:hike" element={<Hike />} />
          </Routes>
        </Router>
      </IntlProvider>
    </LocaleContext.Provider>
  );
};

export default App;
