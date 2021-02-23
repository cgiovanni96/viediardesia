import { createContext } from "react";

import legend from "./legendContext";
import locales from "./localesContext";

export const LocaleContext = createContext(locales);
export const LegendContext = createContext(legend);
