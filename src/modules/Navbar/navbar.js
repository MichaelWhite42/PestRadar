import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TABS } from "../../store/types";
import { changeTab } from "../../store/actions/tabActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { DASHBOARD } from "../Dashboard/types";

const Navbar = () => {
    const dispatch = useDispatch()
    const activeTab = useSelector(state => state.tabReducer.activeTab)

    const menuList = [
        {name: "Dashboard", link: "/", id: DASHBOARD,},
        {name: "Events", link: "/events", id: TABS.EVENTS,},
        {name: "Modules", link: "/modules", id: TABS.MODULES,},
        {name: "Settings", link: "/settings", id: TABS.SETTINGS,},
    ];

    return (
        <nav className="navbar">
            <ul className="navbar__list">
                {menuList.map((item) => (
                    <li key={item.id}>
                        <NavLink
                            className={`navbar__item ${
                                activeTab === item.id ? "navbar__item--active" : ""
                            }`}
                            to={`${item.link}`}
                            onClick={() => {
                                dispatch(changeTab(item.id))
                            }}
                        >
                            {item.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <div className="navbar__support">
                <a href="#" className="support">
                    <FontAwesomeIcon icon={faPhoneAlt}/>
                    <span className="support__text">Support</span>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;