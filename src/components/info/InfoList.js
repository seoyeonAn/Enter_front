import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { infoActions } from "../../toolkit/actions/info_action";
import { useParams } from "react-router-dom";
import InfoCard from "./InfoCard";
import PageNavigation from "./PageNavigation";

import Card from "react-bootstrap/Card";

const InfoList = () => {
  const { currentPage } = useParams();
  const dispatch = useDispatch();

  const getInfoList = (currentPage) => {
    dispatch(infoActions.getInfoList(currentPage));
  };

  useEffect(() => {
    getInfoList(currentPage);
  }, []);

  const infoList = useSelector((state) => state.information.infoList);

  const pv = useSelector((state) =>
    state.information.pv ? state.information.pv : { currentPage: 1 }
  );

  console.log("infoList: ", infoList);

  return (
    <>
      <Card style={{ width: "18rem" }}>
        {infoList &&
          infoList.map((information) => {
            return (
              <InfoCard information={information} key={information.title} />
            );
          })}
      </Card>

      {pv && <PageNavigation getInfoList={getInfoList} />}
    </>
  );
};

export default InfoList;
