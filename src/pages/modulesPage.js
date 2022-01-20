import React from "react";
import ModulesTable from "../modules/Modules";
import VideoCard from "../modules/Modules";

const ModulesPage = () => {
    return (
        <div className="app__page modules">
            <VideoCard />
            <ModulesTable />
        </div>
    );
};

export default ModulesPage;