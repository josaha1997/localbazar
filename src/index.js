import React from "react";
import ReactDom from "react-dom";
import { Router } from "react-router-dom";
import App from "./App";
//import createBrowserHistory from "history/createBrowserHistory";
import PrimarySearchAppBar from "./AppBar";
import LabelBottomNavigation from "./Footer";
import history from "./history";
//const history = createBrowserHistory();
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
ReactDom.render(
  <div>
    <PrimarySearchAppBar />
    <div style={{ height: "70px" }} />
    <Router history={history}>
      <App />
    </Router>
    <LabelBottomNavigation />
  </div>,
  document.getElementById("root")
);
