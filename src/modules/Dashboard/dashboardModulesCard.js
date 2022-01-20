import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import React from "react";

const DashoboardModulesCard = () => {
    const itemsData = useSelector(state => state.reducer.items);
    const data = [...itemsData];
    
    let online = 0;
    let offline = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].status === 'Online') {
        online++;
      } else {
        offline++
      };
    };
    
    return (
        <div className="dashboard__modules-card">
          <div className="dashboard__modules-card__info">
            <p className="dashboard__modules-card__info__item">
              Modules Registered: {data.length}
              <NavLink to="/modules">
                View modules
              </NavLink>
            </p>
            <p className="dashboard__modules-card__info__item">Online: {online}</p>
            <p className="dashboard__modules-card__info__item red">Offline: {offline}</p>
          </div>
        </div>
    );
};

export default DashoboardModulesCard;