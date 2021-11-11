import React from "react";
import DashboardTable from "../components/Dashboard/dashboardEventsTable";
import DashoboardModulesCard from "../components/Dashboard/dashboardModulesCard";

const DashboardPage = () => {
    return (
        <div className="container">
            <DashoboardModulesCard />
            <DashboardTable />
        </div>
    )
}

export default DashboardPage;