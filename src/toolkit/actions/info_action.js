import axios from "axios";
import { infoReducers } from "../reducers/info_reducer";

function getInfoList(currentPage) {
  return async (dispatch) => {
    const data = await axios
      .get(`/info/${currentPage}`)
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
      });
    console.log(data);
    dispatch(infoReducers.getInfoList({ data }));
  };
}

export const infoActions = { getInfoList };
