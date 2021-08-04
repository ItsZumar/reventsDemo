import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app/layout/App";
import theme from "./theme/theme";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";

const rootEl = document.getElementById("root");

let render = () => {
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>,
    rootEl
  );
};

if (module.hot) {
  module.hot.accept("./app/layout/App", () => {
    setTimeout(render);
  });
}

render();
