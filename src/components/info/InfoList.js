import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { infoActions } from "../../toolkit/actions/info_action";
import { useParams } from "react-router-dom";
import InfoCard from "./InfoCard";
import PageNavigation from "./PageNavigation";
import "./infolist.css";
import { Button, FormLabel } from "react-bootstrap";

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

  //console.log("infoList: ", infoList);

  return (
    <>
      <div className="searchBar">
        <ul className="searchField">
          <li className="fieldOne">
            <FormLabel>카테고리</FormLabel>
            <select className="selectBox">
              <option>전체</option>
              <option value="exhibition">전시</option>
              <option value="show">공연</option>
              <option value="museum">박물관</option>
            </select>
          </li>
          <li className="fieldTwo">
            <input type="text" placeholder="검색어를 입력하세요." />
            <Button className="buttonSearch">검색</Button>
            <Button className="buttonBack">취소</Button>
          </li>
        </ul>
      </div>
      <div className="totalSearch">
        <div className="total">
          검색 결과 총 <strong className="strongText">11</strong> 건
        </div>
      </div>

      <div className="row">
        {infoList &&
          infoList.map((information) => {
            return (
              <InfoCard information={information} key={information.info_seq} />
            );
          })}
      </div>
      {pv && <PageNavigation getInfoList={getInfoList} />}
    </>
  );
};

export default InfoList;
