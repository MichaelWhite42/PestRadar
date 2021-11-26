import { faSortAmountDownAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";

const Table = ({data}) => {
    const headerTable = data.headerTable;
    const info = data.info;
    const sort = data.sort;
    const checkbox = data.checkbox;
    const sortLocation = data.sortFunction.location;
    const sortDate = data.sortFunction.date;

    const checkboxFnc = <input type="checkbox" className="checkbox"/>
    const sortCheckbox = () => {
        return (
            <FontAwesomeIcon icon={faSortAmountDownAlt}/>
        );
    };

    const GetTableHeader = () => {
        const keysHeaders = Object.keys(headerTable);
        return (
            <tr className="tableHeader">
                {checkbox ? (<label>{checkboxFnc && (<span/>)}</label>) : ""}
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

    return (
        <table className="table">
            <GetTableHeader/>
            {info.map((item) => {
                return (
                    <NavLink to={'/' + item.id}>
                        <tr>
                            {checkbox ? (<label>{checkbox ? checkboxFnc && (<span/>) : ''}</label>) : ''}
                            {!checkbox && !sort ? (<td><div className="statusColor"/>{item.status}</td>) : ''}
                            {!checkbox && !sort ? (<td>{item.id}</td>) : ''}
                            <td>
                                {item.location}
                            </td>
                            {!checkbox && !sort ? (<td>{item.upload}</td>) : ''}
                            {!checkbox && !sort ? (<td>{item.temperature}</td>) : ''}
                            {!checkbox && !sort ? (<td>{item.updated}</td>) : ''}
                            {sort ? (<td>{item.date}</td>) : ''}
                            {checkbox && sort ? (<td><img src={item.events} className="eventsImg" /></td>) : ''}
                            {!checkbox && sort ? (<td>{item.motionsDetector}</td>) : ''}
                            {!checkbox && sort ? (<td className="thumbImgBox"><img className="thumbImg" src={item.thumbs} /></td>) : ''}
                            {sort ? (<td>{item.videos}</td>) : ''}
                            {sort ? (<td>{item.source}</td>) : ''}
                            {sort ? (<td>{item.tags}</td>) : ''}
                        </tr>
                    </NavLink>
                )
            })}
        </table>
    )
}

export default Table;