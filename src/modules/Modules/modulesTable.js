import React from "react";
import { SORT_EVENTS_GRAPH } from "../../store/types";
import { useDispatch } from "react-redux";
import Table from "../../components/UI/table/table";

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
          { status: "Online", id: "0000001", location: "Astarta Warehouse", upload: "3", temperature: "18 °C", updated: "00/00/0000", },
          { status: "Online", id: "0000002", location: "Astarta Warehouse", upload: "3", temperature: "18 °C", updated: "00/00/0000", },
          { status: "Offline", id: "0000003", location: "Astarta Warehouse", upload: "3", temperature: "18 °C", updated: "00/00/0000", },
          { status: "Online", id: "0000004", location: "Astarta Warehouse", upload: "3", temperature: "18 °C", updated: "00/00/0000", },
        ],
        sort: false,
        checkbox: false,
        sortFunction: {
          location: () => {dispatch(SORT_EVENTS_GRAPH("location"))},
          date: () => {dispatch(SORT_EVENTS_GRAPH("date"))},
      },
    };
    return (
        <div className="modules-table">
            <Table data={data} />
        </div>
    );
};

export default ModulesTable;