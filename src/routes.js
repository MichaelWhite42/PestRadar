import React from "react";
import { Route, Routes } from "react-router";
import ModulesInfo from "./components/Modules/modulesInfo";
import DashboardPage from "./pages/dashboardPage";
import EventsPage from "./pages/eventsPage";
import ModulesInfoPage from "./pages/modulesInfoPage";
import PageEventsInfo from "./pages/pageEventsInfo";
import SettingsPage from "./pages/settingsPage";

const RoutesComponent = () => {
    return (
        <Routes>
            <Route path='/' element={(<DashboardPage/>)}/>
            <Route path='/events' element={(<EventsPage/>)}/>
            <Route path='/events/:info' element={(<PageEventsInfo/>)}/>
            <Route path='/modules' element={(<ModulesInfoPage />)}/>
            <Route path='/modules/:info' element={(<ModulesInfo />)}/>
            <Route path='/settings' element={<SettingsPage />}/>
        </Routes>
    )
}

export default RoutesComponent;