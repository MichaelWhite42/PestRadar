import React from "react";
import ModulesTable from "../components/Modules";
import VideoCard from "../components/Modules";

const ModulesPage = () => {
    return (
        <div className="container">
            <VideoCard />
            <ModulesTable />
        </div>
    )
}

export default ModulesPage;