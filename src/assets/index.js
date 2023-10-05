import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";

import "./assets/css/nucleo-icons.css";
import "./assets/scss/constro.scss?v=1.2.0";
import "./assets/demo/demo.css";

// ** React Toastify
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <Routes />,
  document.getElementById("root")
);
