import React from "react";
import { Route, Routes } from "react-router";
import DashboardPage from "./pages/dashboardPage";
import EventsPage from "./pages/eventsPage";
import ModulesInfoPage from "./pages/modulesInfoPage";
import SettingsPage from "./pages/settingsPage";

const RoutesComponent = () => {
    return (
        <Routes>
            <Route path='/' element={(<DashboardPage/>)}/>
            <Route path='/events' element={(<EventsPage/>)}/>
            <Route path='/modules' element={(<ModulesInfoPage />)}/>
            <Route path='/settings' element={<SettingsPage/>}/>
        </Routes>
    )
}

export default RoutesComponent;