import React, { useState } from "react";
import "../../css/common.css";
import "../../css/mypage.css";
import "../../css/enterlist.css";
import { mypageActions } from "../../toolkit/actions/mypage_action";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

const EnterList = ({ enter }) => {
  const navigator = useNavigate();
  const dispatch = useDispatch();

  const updateEnter = (enterSeq, completed) => {
    mypageActions.getEnterUpdate(enterSeq, completed);
    dispatch(mypageActions.getUserList( localStorage.getItem("email")));
    navigator('/mypage');
  };

  return (
    <>
      <div className="form-check enterlist-Item">
        <input
          className="form-check-input"
          type="checkbox"
          checked={enter.completed === 1 ? true : false}
          onClick={() => updateEnter(enter.enterSeq, enter.completed)}
        />
        <label
          className={enter.completed === 1 ? "form-check-label" : null}
          onClick={() => updateEnter(enter.enterSeq, enter.completed)}
        >
          {enter["infoDTO"]["title"]}
        </label>
      </div>
    </>
  );
};
export default EnterList;
