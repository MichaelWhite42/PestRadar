import React from "react";
import ModulesTable from "../modules/Modules/modulesTable";
import VideoCard from "../modules/Modules/videoCard";

const ModulesInfoPage = () => {
    return (
        <div className="app__page modules__info">
            <VideoCard />
            <ModulesTable />
        </div>
    );
};

export default ModulesInfoPage;