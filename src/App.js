import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import WebinarsListed from "./components/WebinarsListed";
import Navbar from "./components/Navbar";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <WebinarsListed />
    </Provider>
  );
}

export default App;
