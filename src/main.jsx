import * as React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./Global.css";

import {Home} from "./containers/Home";


const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(

  <React.StrictMode>
    <BrowserRouter>

      <Home />

    </BrowserRouter>
  </React.StrictMode>
  
);