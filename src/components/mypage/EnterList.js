import React from "react";
import "../../css/common.css";
import "../../css/mypage.css";

const EnterList = ({ enter }) => {
  return (
    <>
      <li>□ {enter["infoDTO"]["title"]}</li>
    </>
  );
};
export default EnterList;
