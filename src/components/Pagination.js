import React from 'react';
import { Link } from 'react-router-dom';


function Pagination(props) {
    let {offset, totalElements} = props;

    return (
        <ul data-testid="pagination"  className="pagination">
            <li className={"page-item " + (offset === 0 ? "disabled" : "")}>
                <Link className="page-link" role="button" to={"/?offset=0"}>«
            </Link>
            </li>
            <li className={"page-item " + (offset < 6 ? "disabled" : "")}>
                <Link className="page-link" role="button" to={"/?offset=" + (offset - 6)}>‹
            </Link>
            </li>
            <li className="page-item active">
                <span className="page-link" role="button">
                    {
                        ((offset / 6) + 1).toFixed(0)}
                </span></li>
            <li className={"page-item " + (offset === 175 ? "disabled" : "")}>
                <Link className="page-link" role="button" to={"/?offset=" + (offset + 6)}>›</Link>
            </li>
            <li className={"page-item " + (offset === (totalElements / 6) ? "disabled" : "")}>
                <Link className="page-link" role="button" to={"/?offset=" + (totalElements / 6)}>»</Link>

            </li>
        </ul>
    )
} 


export {Pagination}