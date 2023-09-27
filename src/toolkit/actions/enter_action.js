import axios from "axios";
import { enterReducers } from "../reducers/enter_reducer";

function getEnterList() {
  return async (dispatch) => {
    const data = await axios
      .get("/enter")
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
      });
    console.log("data: ", data);
    //slice를 거쳐 store에 저장
    dispatch(enterReducers.getEnterList({ data }));
  };
}

function getEnterUpdate(enterSeq, completed) {
  //function getEnterUpdate(enter_seq, completed) {
  return async () => {
    await axios
      .put(`/enter/${enterSeq}/${completed}`)
      // .put(`/enter/${enter_seq}/${completed}`)
      .then((response) => {
        window.location.replace("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export const enterActions = { getEnterList, getEnterUpdate };
