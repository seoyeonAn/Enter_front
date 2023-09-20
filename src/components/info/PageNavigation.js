import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./pagination.css";

const PageNavigation = ({ getInfoList }) => {
  const pv = useSelector((state) =>
    state.information.pv ? state.information.pv : { currentPage: 1 }
  );

  const pageNumbers = [];
  for (let i = pv.startPage; i <= pv.endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav arial-label="...">
      <ul className="pagination">
        <li className={pv.startPage <= 1 ? "page-item disabled" : "page-item"}>
          <span
            className="page-link"
            onClick={() => getInfoList(pv.startPage - pv.blockPage)}
          >
            &laquo;
          </span>
        </li>

        {pageNumbers.map((pnum, idx) => (
          <li key={pnum}>
            <span
              onClick={() => getInfoList(pnum)}
              className={pv.currentPage === pnum ? "page-item active" : null}
            >
              <Link to={`/info/${pnum}`} className="page-link">
                {pnum}
              </Link>
            </span>
          </li>
        ))}

        <li
          className={
            pv.endPage >= pv.totalPage ? "page-item disabled" : "page-item"
          }
        >
          <span
            className="page-link"
            onClick={() => getInfoList(pv.startPage + pv.blockPage)}
          >
            &raquo;
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default PageNavigation;
