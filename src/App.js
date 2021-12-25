import React from "react";
import { Provider } from "react-redux";
import { HashRouter as Router } from "react-router-dom";
import { store } from "./store/store";
import Header from "./components/Header/header";
import Navbar from "./components/Navbar";
import RoutesComponent from "./routes";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <div className="main">
        <Router>
          <Navbar />
          <RoutesComponent />
        </Router>
      </div>
    </Provider>
  )
}

export default App;
