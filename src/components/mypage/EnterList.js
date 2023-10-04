import React, { useState } from "react";
import "../../css/common.css";
import "../../css/mypage.css";
import "../../css/enterlist.css";
import Form from "react-bootstrap/Form";
import { mypageActions } from "../../toolkit/actions/mypage_action";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

const EnterList = ({ enter }) => {
  const navigator = useNavigate();
  const dispatch = useDispatch();

  const updateEnter = (enterSeq, completed) => {
    mypageActions.getEnterUpdate(enterSeq, completed);
    dispatch(mypageActions.getUserList("aa@aaa.com"));
    navigator("/mypage");
  };

  return (
    <>
      {/* <Form.Check
        label={enter["infoDTO"]["title"]}
        className={enter.completed === 1 ? "completed" : null}
        onClick={() => updateEnter(enter.enterSeq, enter.completed)}
        checked={enter.completed === 1 ? true : null}
      /> */}

      <div className="form-check">
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
