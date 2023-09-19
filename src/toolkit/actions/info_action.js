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
    console.log("data: ", data);
    dispatch(infoReducers.getInfoList({ data }));
  };
}

function getInfoDetail(info_seq) {
  return async (dispatch) => {
    const data = await axios
      .get(`/info/view/${info_seq}`)
      .then((response) => response.data);
    dispatch(infoReducers.getInfoDetail({ data }));
  };
}

export const infoActions = { getInfoList, getInfoDetail };
