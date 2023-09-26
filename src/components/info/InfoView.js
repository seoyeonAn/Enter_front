import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { infoActions } from "../../toolkit/actions/info_action";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../css/infoview.css";

const InfoView = () => {
  const { info_seq } = useParams();
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const infoDetail = useSelector((state) => state.information.infoDetail);

  const today = new Date();

  useEffect(() => {
    dispatch(infoActions.getInfoDetail(info_seq));
  }, [dispatch, info_seq]);

  const [imageSrc, setImageSrc] = useState("../../images/infoview/unstar.png");
  const [isClicked, setIsClicked] = useState(false);
  const addenter = () => {
    if (isClicked) {
      setImageSrc("../../images/infoview/unstar.png");
      setIsClicked(false);
    } else {
      setImageSrc("../../images/infoview/star.png");
      setIsClicked(true);
    }
  };

  const onSubmit = async (e) => {
    console.log(info_seq);
    e.preventDefault();

    let config = { "Content-Type": "multipart/form-data" };
    const formData = new FormData();
    formData.append("info_seq", info_seq);
    dispatch(infoActions.insertInfo(formData, info_seq));
    navigator(`/info/view/${info_seq}`);
  };

  return (
    <>
      <h1>{infoDetail.category}</h1>
      <div className="tableContent">
        <div className="imgDetail">
          <img src={infoDetail.thumbnail} />
        </div>
        <div className="tableDetail">
          <form onSubmit={onSubmit} >
            <input type="hidden" value={infoDetail.info_seq} readOnly />
            <input type="image" onClick={addenter} 
                src={imageSrc} 
                style={{ height: "40px", width: "40px", float: "right" }}/>

          </form>
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
            {/* <strong className="strongText"> */}
            {Math.floor(
              Date.parse(infoDetail.end_date) / (1000 * 60 * 60 * 24)
            ) -
              Math.floor(Date.parse(today) / (1000 * 60 * 60 * 24)) -
              1 <
            0 ? (
              <strong>
                <strong className="strongText">종료</strong>되었습니다.
              </strong>
            ) : (
              <strong>
                <strong className="strongText">
                  {Math.floor(
                    Date.parse(infoDetail.end_date) / (1000 * 60 * 60 * 24)
                  ) - Math.floor(Date.parse(today) / (1000 * 60 * 60 * 24))}
                </strong>{" "}
                일 남았습니다.
              </strong>
            )}
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
