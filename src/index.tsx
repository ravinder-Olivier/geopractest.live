import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import LocaleProvider from "./i18n";
import BodyStyle from "./components/BodyStyle";

import { Provider } from 'react-redux';
import store from './redux/store'
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <ThemeProvider>
        <LocaleProvider>
          <App />
          <BodyStyle />
        </LocaleProvider>
      </ThemeProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
