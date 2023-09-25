import React from "react";
import { enterActions } from "../../toolkit/actions/enter_action";
import "../../css/enterlabel.css";

const EnterLabel = ({ enterlist }) => {
  const updateEnter = (enter_seq, completed) => {
    enterActions.getEnterUpdate(enter_seq, completed);
  };

  return (
    <>
      <h3>
        <label>{enterlist.enter_seq}</label>
        <label
          className={enterlist.completed === 1 ? "completed" : null}
          onClick={() => updateEnter(enterlist.enter_seq, enterlist.completed)}
        >
          {enterlist.title}
        </label>
      </h3>
    </>
  );
};

export default EnterLabel;
