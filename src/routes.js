import React from "react";
import { Route, Routes } from "react-router";
import DashboardPage from "./pages/dashboardPage";
import PageEventsInfo from "./pages/pageEventsInfo";
import SettingsPage from "./pages/settingsPage";

const RoutesComponent = () => {
    return (
        <Routes>
            <Route path='/dashboard' element={(<DashboardPage/>)}/>
            <Route path='/events' element={(<PageEventsInfo/>)}/>
            <Route path='/settings' element={<SettingsPage/>}/>
        </Routes>
    )
}

export default RoutesComponent;