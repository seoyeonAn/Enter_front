import React from "react";
import { enterActions } from "../../toolkit/actions/enter_action";
import "../../css/enterlabel.css";

const EnterLabel = ({ enter }) => {
  const updateEnter = (enter_seq, completed) => {
    enterActions.getEnterUpdate(enter_seq, completed);
  };

  return (
    <>
      <h3>
        <label>{enter.enter_seq}</label>
        <label
          className={enter.completed === 1 ? "completed" : null}
          onClick={() => updateEnter(enter.enter_seq, enter.completed)}
        >
          {enter.title}
        </label>
      </h3>
    </>
  );
};

export default EnterLabel;
