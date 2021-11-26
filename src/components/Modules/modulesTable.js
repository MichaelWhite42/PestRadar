import Table from "../UI/table/table";
import React from "react";
import { SORT_EVENTS_GRAPH } from "../../store/types";
import { useDispatch } from "react-redux";

const ModulesTable = () => {
  const dispatch = useDispatch();
    const data = {
        headerTable: { 
          status: "Status", 
          id: "ID", 
          location: "Location", 
          upload: "Upload Queue", 
          temperature: "Temperature", 
          update: "Updated", 
        },
        info: [
          { status: "Online", id: Math.round(Math.random()*10000000), location: "Astarta Warehouse, Velyka Dymerka, 00000", upload: "3", temperature: "18 °C", updated: "00/00/0000", },
          { status: "Online", id: Math.round(Math.random()*10000000), location: "Astarta Warehouse, Velyka Dymerka, 00000", upload: "3", temperature: "18 °C", updated: "00/00/0000", },
          { status: "Offline", id: Math.round(Math.random()*10000000), location: "Astarta Warehouse, Velyka Dymerka, 00000", upload: "3", temperature: "18 °C", updated: "00/00/0000", },
          { status: "Online", id: Math.round(Math.random()*10000000), location: "Astarta Warehouse, Velyka Dymerka, 00000", upload: "3", temperature: "18 °C", updated: "00/00/0000", },
        ],
        sort: false,
        checkbox: false,
        sortFunction: {
          location: () => {dispatch(SORT_EVENTS_GRAPH("location"))},
          date: () => {dispatch(SORT_EVENTS_GRAPH("date"))},
      }
    };
    return (
        <div className="modulesTable">
            <Table data={data}/>
        </div>
    );
};

export default ModulesTable;