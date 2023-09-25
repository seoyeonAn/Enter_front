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

  const enterList = useSelector((state) => state.enterlist.enterList);

  console.log("enterList: ", enterList);

  return (
    <>
      <h3>EnterList</h3>
      {enterList &&
        enterList.map((enterlist) => {
          return <EnterLabel enterlist={enterlist} key={enterlist.enter_seq} />;
        })}
    </>
  );
};

export default EnterList;
