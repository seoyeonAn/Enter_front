import axios from "axios";
import { infoReducers } from "../reducers/info_reducer";

function getInfoList(currentPage, params) {
  return async (dispatch) => {
    const data = await axios
      .get(`/info/${currentPage}`, { params })
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
      });
    //console.log("params: ", params);
    //console.log("data: ", data);
    dispatch(infoReducers.getInfoList({ data }));
  };
}

function getInfoDetail(infoSeq) {
  return async (dispatch) => {
    const data = await axios
      .get(`/info/view/${infoSeq}`)
      .then((response) => response.data);
    dispatch(infoReducers.getInfoDetail({ data }));
  };
}

function insertInfo(formData, config) {
  return async () => {
    await axios
      .post("/info/view", formData, config)
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
      });
  };
}

export const infoActions = {
  getInfoList,
  getInfoDetail,
  insertInfo,
};
