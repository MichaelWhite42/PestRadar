import React from "react";
import { NavLink } from "react-router-dom";

const DashoboardModulesCard = () => {
    return (
        <div className="DashboardModulesCard">
          <div className="DashboardModulesCard_info">
            <p className="DashboardModulesCard_info--item">
              {" "}
              Modules Registered: {}
              <NavLink to="/modules">
                View modules
              </NavLink>
            </p>
            <p className="DashboardModulesCard_info--item">Online: {}</p>
            <p className="DashboardModulesCard_info--item red">Offline: {}</p>
          </div>
        </div>
    );
};

export default DashoboardModulesCard;