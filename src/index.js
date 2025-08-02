import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AppRouter } from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import appStore from "./redux/store/appStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={appStore}>
    <RouterProvider router={AppRouter} />
  </Provider>
);

reportWebVitals();
