import axios from "axios"
import { exhibitionReducers, museumReducers, showReducers } from "../reducers/mainTaster_reducer";

function getMainTaster() {
    return async (dispatch) => {
        const data = await axios
        .get("/main/maintaster")
        .then((response) => response.data)
        .catch((error) => {
            console.log(error);
        });
        dispatch(exhibitionReducers.getExhibitionList({ exhibitionList: data.exhibitionList}));
        dispatch(showReducers.getShowList({ showList: data.showList}));
        dispatch(museumReducers.getMuseumList({ museumList: data.museumList}));
    };
}

export const tasterActions = {
    getMainTaster
}