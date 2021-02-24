import React, { useEffect, useState } from "react";
import { IntlProvider } from "react-intl";

import "mapbox-gl/dist/mapbox-gl.css";

import Router from "./Router";
import Auth from "./pages/Auth";

import localesContext from "./utils/context/localesContext";
import { LocaleContext } from "./utils/context";
import getLocalMessages from "./utils/getLocalMessages";

const App = () => {
  const [locale, setLocale] = useState(localesContext.it);
  const value = { locale, setLocale };
  const [authorized, setAuthorized] = useState(false);

  const [messages, setMessages] = useState();

  useEffect(() => {
    const localMessages = getLocalMessages(locale.id);
    setMessages(localMessages);
  }, [locale]);

  // let messages = getLocalMessages(locales.id);

  return (
    <LocaleContext.Provider value={value}>
      <IntlProvider locale={value.locale.locale} messages={messages}>
        {authorized ? <Router /> : <Auth setAuthorized={setAuthorized} />}
      </IntlProvider>
    </LocaleContext.Provider>
  );
};

export default App;
