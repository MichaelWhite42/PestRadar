import { HashRouter as Router } from "react-router-dom";
import Header from "./modules/Header/header";
import Navbar from "./modules/Navbar";
import RoutesComponent from "./routes";
import { useEffect } from "react";
import { getItems } from "./store/thunks";
import { useDispatch } from "react-redux";

const AppWrapper = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getItems())
    }, []);
  
    return (
      <>
        <Header />
        <div className="app">
          <Router>
            <Navbar />
            <RoutesComponent />
          </Router>
        </div>
      </>
    )
}

export default AppWrapper;