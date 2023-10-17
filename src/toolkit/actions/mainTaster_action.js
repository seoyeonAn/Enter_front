import axios from "axios"

function getMainTasterList() {
    return async (dispatch) => {
        const data = await axios
        .get("/main/maintaster")
        .then((response) => response.data)
        .catch((error) => {
            console.log(error);
        });
        dispatch(exhibitionReducers.getMainTasterList({ exhibitionList: data.exhibitionList}));
    }
}

export const TasterActions = {
    getMainTasterList
};