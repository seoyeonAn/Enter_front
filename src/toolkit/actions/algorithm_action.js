import axios from "axios";
import { algoReducers } from "../reducers/algorithm_reducer";

function getAlgoList() {
  return async (dispatch) => {
    const data = await axios
      .get("http://127.0.0.1:5000")
      .then((response) => JSON.stringify(response.data))
      // .then((response) => JSON.parse(response))
      .catch((error) => {
        console.log(error);
      });
    console.log("data : " + typeof data);
    const result = JSON.parse(data); //parse(): 객체로 형변환
    dispatch(algoReducers.getAlgoList({ data: result }));
  };
}

export const algoActions = { getAlgoList };
