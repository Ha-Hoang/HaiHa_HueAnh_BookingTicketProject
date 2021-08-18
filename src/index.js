import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import "../node_modules/jquery/dist/jquery.slim";
import "../node_modules/popper.js/dist/popper";

import { theme } from "./assets/css/theme/my-theme";
import { ThemeProvider } from "@material-ui/core";

import { Provider } from "react-redux";
import { store } from "./store/config-store";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from '@date-io/moment';
import DateFnsUtils from '@date-io/date-fns';

ReactDOM.render(
  <Provider store={store}>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </MuiPickersUtilsProvider>
  </Provider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
