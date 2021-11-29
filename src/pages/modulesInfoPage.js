import React from "react";
import ModulesTable from "../components/Modules/modulesTable";
import VideoCard from "../components/Modules/videoCard";

const ModulesInfoPage = () => {
    return (
        <div className="container">
            <VideoCard />
            <ModulesTable />
        </div>
    );
};

export default ModulesInfoPage;