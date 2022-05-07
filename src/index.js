import "core-js";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import RoutesState from "./context/routes/RoutesState";
import SidebarState from "./context/sidebar/SidebarState";

ReactDOM.render(
  <SidebarState>
    <RoutesState>
      <App />
    </RoutesState>
  </SidebarState>,
  document.getElementById("root")
);
