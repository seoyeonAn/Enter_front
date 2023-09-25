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

// const insertInfo = async (formData, input) => {
//   await axios
//     .post("/info", formData, { input })
//     .then((response) => {
//       window.location.replace("/");
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

function insertInfo(formData, info_seq) {
  return async () => {
    await axios
      .post(`/info/view/${info_seq}`, formData)
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
      });
  };
}

export const infoActions = { getInfoList, getInfoDetail, insertInfo };
