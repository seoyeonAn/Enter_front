import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { infoActions } from "../../toolkit/actions/info_action";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../css/infoview.css";

const InfoView = () => {
  const { info_seq } = useParams();
  const dispatch = useDispatch();

  const infoDetail = useSelector((state) => state.information.infoDetail);

  useEffect(() => {
    dispatch(infoActions.getInfoDetail(info_seq));
  }, [dispatch, info_seq]);

  return (
    <>
      <h1>{infoDetail.category}</h1>
      <div className="tableContent">
        <div className="imgDetail">
          <img src={infoDetail.thumbnail} />
        </div>
        <div className="tableDetail">
          <img
            src="../../add.png"
            style={{ height: "40px", width: "40px", float: "right" }}
          />
          <h2>{infoDetail.title}</h2>

          <br />
          <hr />
          <Table size="bg">
            <tbody>
              <tr>
                <th>장소</th>
                <td>{infoDetail.place}</td>
              </tr>
              <tr>
                <th>기간</th>
                {infoDetail.start_date === null ? (
                  <td>상시 개관</td>
                ) : (
                  <td>
                    {infoDetail.start_date} ~ {infoDetail.end_date}
                  </td>
                )}
              </tr>
              <tr>
                <th>가격</th>
                <td>{infoDetail.price}</td>
              </tr>
              <tr>
                <th>장르</th>
                <td>{infoDetail.tag}</td>
              </tr>
              <tr>
                <th>문의</th>
                <td>
                  {infoDetail.tel}
                  <Link to={infoDetail.homepage} target="_blank">
                    <Button className="buttonDetail">홈페이지</Button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>

      {infoDetail.start_date === null ? null : (
        <div className="D_DAY">
          <div className="d_day">
            <strong className="strongText">D-7</strong> 일 남았습니다.
          </div>
        </div>
      )}

      <div className="textContent">
        <h3>상세내용</h3>
        <div className="division-line"></div>
        <p>● 내용 : {infoDetail.content}</p>
        <img src="https://www.sejongpac.or.kr/upload/2023/09/20230918_081814580_45150.jpg" />
      </div>
    </>
  );
};

export default InfoView;
