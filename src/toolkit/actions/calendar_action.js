import axios from "axios";
import { calendarReducers } from "../reducers/calendar_reducer";

function getCalendarList(formattedDate) {
  return async (dispatch) => {
    const data = await axios
      .post("http://127.0.0.1:5000/flask_calendar", { formattedDate })
      .then((response) => JSON.stringify(response.data))
      .catch((error) => {
        console.log(error);
      });

    const result = JSON.parse(data); //parse(): 객체로 형변환
    dispatch(calendarReducers.getCalendarList({ data: result }));
  };
}

export const calendarActions = { getCalendarList };
