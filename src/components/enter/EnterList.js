import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { enterActions } from "../../toolkit/actions/enter_action";
import EnterLabel from "./EnterLabel";

const EnterList = () => {
  const dispatch = useDispatch();

  const getEnterList = () => {
    dispatch(enterActions.getEnterList());
  };

  useEffect(() => {
    getEnterList();
  }, []);

  const enterlist = useSelector((state) => state.enterlist.enterlist);

  console.log("enter(view): ", enterlist);

  return (
    <>
      <h3>EnterList</h3>
      {enterlist &&
        enterlist.map((enter) => {
          return (
            <div className="enter" key={enter.enter_seq}>
              <EnterLabel enter={enter} />
            </div>
          );
        })}
    </>
  );
};

export default EnterList;
