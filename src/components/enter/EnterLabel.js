import React from "react";
import { enterActions } from "../../toolkit/actions/enter_action";
import "../../css/enterlabel.css";

const EnterLabel = ({ enterlist }) => {
  const updateEnter = (enterSeq, completed) => {
    enterActions.getEnterUpdate(enterSeq, completed);
  };

  return (
    <>
      <h3>
        <label>{enterlist.enterSeq}</label>
        <label
          className={enterlist.completed === 1 ? "completed" : null}
          onClick={() => updateEnter(enterlist.enterSeq, enterlist.completed)}
        >
          {enterlist["infoDTO"]["title"]}
        </label>
      </h3>
    </>
  );
};

export default EnterLabel;
