import { faSortAmountDownAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import Tags from "../tags/tags";
import style from './table.css';

const Table = ({data}) => {
    const headerTable = data.headerTable;
    const info = data.info;
    const sort = data.sort;
    const checkbox = data.checkbox;
    const sortLocation = data.sortFunction.location;
    const sortDate = data.sortFunction.date;

    const checkboxFnc = <input type="checkbox" className="test"/>
    const sortCheckbox = (fnc) => {
        return (
            <FontAwesomeIcon icon={faSortAmountDownAlt}/>
        );
    };

    const GetTableHeader = () => {
        const keysHeaders = Object.keys(headerTable);

        return (
            <tr>
                {checkbox ? <th><input type="checkbox"/></th> : ""}
                {keysHeaders.map((item) => {
                    return (
                        <th>
                            {headerTable[item]}
                            {sort && (headerTable[item] === 'Location' ? sortCheckbox(sortLocation) : "")}
                            {sort && (headerTable[item] === 'Date and time' ? sortCheckbox(sortDate) : "")}
                        </th>
                    )
                })}
            </tr>
        )
    }

    const getTableCell = (row) => {
        const keyRows = Object.keys(row);
        return keyRows.map((item) => {
            return (
                <td>
                    {item === 'tags' ? row[item].map((cell) => <Tags tagName={cell}/>) : row[item]}
                </td>
            );
        });
    }

    return (
        <table className={style.table}>
            <GetTableHeader/>
            {info.map((row) => {
                return (
                    <NavLink to={'/' + row.id}>
                        {checkbox ? checkboxFnc : ""}
                        {getTableCell(row)}
                    </NavLink>
                )
            })}
        </table>
    )
}

export default Table;