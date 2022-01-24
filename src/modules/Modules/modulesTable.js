import React from "react";
import { SORT_EVENTS_GRAPH } from "../../store/types";
import { useDispatch } from "react-redux";
import Table from "../../components/UI/table/table";
import { useSelector } from "react-redux";

const ModulesTable = () => {
  const dispatch = useDispatch();
  const itemsData = useSelector(state => state.reducer.items);
  const data = {
      headerTable: { 
        status: "Status", 
        id: "ID", 
        location: "Location", 
        upload: "Upload Queue", 
        temperature: "Temperature", 
        update: "Updated", 
      },
      info: [...itemsData],
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