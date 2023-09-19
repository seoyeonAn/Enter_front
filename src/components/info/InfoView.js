import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { infoActions } from "../../toolkit/actions/info_action";
import { Button, Table } from "react-bootstrap";
import "./button.css";
import { Link } from "react-router-dom";

const InfoView = () => {
  const { info_seq } = useParams();
  const dispatch = useDispatch();

  const infoDetail = useSelector((state) => state.information.infoDetail);

  useEffect(() => {
    dispatch(infoActions.getInfoDetail(info_seq));
  }, [dispatch, info_seq]);

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          marginTop: "100px",
          marginBottom: "100px",
        }}
      >
        {infoDetail.category}
      </h1>
      <div className="tableContent" style={{ position: "absolute" }}>
        <img
          src={infoDetail.thumbnail}
          style={{ float: "left", marginRight: "100px", width: "350px" }}
        />
        <div className="tablediv" style={{ float: "right" }}>
          <h2>{infoDetail.title}</h2> <hr />
          <Table size="bg">
            <tbody>
              <tr>
                <th>장소</th>
                <td>{infoDetail.place}</td>
              </tr>
              <tr>
                <th>기간</th>
                <td>
                  {infoDetail.start_date} ~ {infoDetail.end_date}
                </td>
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
                  {infoDetail.tel} &nbsp;
                  <Link to={infoDetail.homepage} target="_blank">
                    <Button className="button" style={{ float: "right" }}>
                      홈페이지
                    </Button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>

      {/* <div
        className="detailContent"
        style={{
          marginTop: "100px",
          position: "absolute",
          bottom: "0px",
        }}
      >
        <h3>상세내용</h3>
      </div> */}
    </>
  );
};

export default InfoView;
