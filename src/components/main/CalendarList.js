import React from "react";
import { Link } from "react-router-dom";

const CalendarList = ({ calendar }) => {
  return (
    <>
      <li className="d-list-Item">
        <Link to={`/info/view/${calendar.info_seq}`}>
          <span className="m-title">{calendar.title}</span>
          <span className="m-date">
            {calendar.start_date} ~ {calendar.end_date}
          </span>
        </Link>
      </li>
    </>
  );
};

export default CalendarList;
