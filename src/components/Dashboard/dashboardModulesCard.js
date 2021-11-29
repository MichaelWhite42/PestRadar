import React from "react";
import { NavLink } from "react-router-dom";

const DashoboardModulesCard = () => {
    return (
        <div className="dashboard-modules-card">
          <div className="dashboard-modules-card_info">
            <p className="dashboard-modules-card_info--item">
              {" "}
              Modules Registered: 4
              <NavLink to="/modules">
                View modules
              </NavLink>
            </p>
            <p className="dashboard-modules-card_info--item">Online: 3</p>
            <p className="dashboard-modules-card_info--item red">Offline: 1</p>
          </div>
        </div>
    );
};

export default DashoboardModulesCard;