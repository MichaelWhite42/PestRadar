import { faSortAmountDownAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import Tags from "../tags/tags";

const Table = ({data}) => {
    const headerTable = data.headerTable;
    const info = data.info;
    const sort = data.sort;
    const checkbox = data.checkbox;
    const sortLocation = data.sortFunction.location;
    const sortDate = data.sortFunction.date;

    const checkboxFnc = <input type="checkbox" className="checkbox"/>;
    const sortCheckbox = () => {
        return (
            <FontAwesomeIcon className="table__header__sort-btn" icon={faSortAmountDownAlt}/>
        );
    };

    const GetTableHeader = () => {
        const keysHeaders = Object.keys(headerTable);
        return (
            <tr className="table__header table__cell">
                {checkbox ? (<label>{checkboxFnc && (<span/>)}</label>) : ""}
                {keysHeaders.map((item) => {
                    return (
                        <th key={item}>
                            {headerTable[item]}
                            {sort && (headerTable[item] === 'Location' ? sortCheckbox(sortLocation) : "")}
                            {sort && (headerTable[item] === 'Date and time' ? sortCheckbox(sortDate) : "")}
                        </th>
                    );
                })}
            </tr>
        );
    };

    return (
        <table className="table">
            <GetTableHeader/>
            {info.map((item) => {
                return (
                    <NavLink key={item.key} to={!sort && !checkbox ? '/modules/:info' + item.id : '' || sort && checkbox ? '/events/:info' + item.id : ''}>
                        <tr className={sort && !checkbox ? "table__cell table__dashboard-cell" : 'table__cell'}>
                            {checkbox ? (<><label>{checkbox ? checkboxFnc && (<span/>) : ''}</label></>) : ''}
                            {!checkbox && !sort ? (<td><div className="status-color"/>{item.status}</td>) : ''}
                            {!checkbox && !sort ? (<td>{item.id}</td>) : ''}
                            <td>{item.location}</td>
                            {!checkbox && !sort ? (<td>{item.upload}</td>) : ''}
                            {!checkbox && !sort ? (<td>{item.temperature}</td>) : ''}
                            {!checkbox && !sort ? (<td>{item.updated}</td>) : ''}
                            {sort ? (<td>{item.date}</td>) : ''}
                            {checkbox && sort ? (<td><img src={item.events} /></td>) : ''}
                            {!checkbox && sort ? (<td>{item.motionsDetector}</td>) : ''}
                            {!checkbox && sort ? (<td className="thumbImgBox"><img className="thumb-img" src={item.thumbs} /></td>) : ''}
                            {sort ? (<td>{item.videos}</td>) : ''}
                            {sort ? (<td>{item.source}</td>) : ''}
                            {sort ? (<td><Tags tagName="Fire"/><Tags tagName="Water"/></td>) : ''}
                        </tr>
                    </NavLink>
                );
            })}
        </table>
    );
};

export default Table;