import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store , persistor} from "./app/store.js";
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Router>
       <App/>
      </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
