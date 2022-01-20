import React from "react";
import DashboardTable from "../modules/Dashboard/dashboardEventsTable";
import DashoboardModulesCard from "../modules/Dashboard/dashboardModulesCard";

const DashboardPage = () => {
    return (
        <div className="app__page dashboard">
            <DashoboardModulesCard />
            <DashboardTable />
        </div>
    );
};

export default DashboardPage;