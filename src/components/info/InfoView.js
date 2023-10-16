import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { infoActions } from "../../toolkit/actions/info_action";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../css/info.css";

const InfoView = () => {
  const { infoSeq } = useParams();
  console.log("infoSeq: ", infoSeq);

  const dispatch = useDispatch();
  const navigator = useNavigate();
  const infoDetail = useSelector((state) => state.information.infoDetail);
  const loginList = useSelector((state) => state.login.loginList);
  const today = new Date();

  useEffect(() => {
    dispatch(infoActions.getInfoDetail(infoSeq));
  }, [dispatch, infoSeq]);

  const [imageSrc, setImageSrc] = useState("../../images/infoview/unstar.png");

  // const [imageSrc, setImageSrc] = useState(
  //   infoDetail.enter_seq === null
  //     ? "../../images/infoview/unstar.png"
  //     : "../../images/infoview/star.png"
  // );

  const [isClicked, setIsClicked] = useState(false);

  // const [imageSrc, setImageSrc] = useState(
  //   isClicked === false
  //     ? "../../images/infoview/unstar.png"
  //     : "../../images/infoview/star.png"
  // );

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
    console.log(infoSeq);
    e.preventDefault();

    let config = { "Content-Type": "multipart/form-data" };
    const formData = new FormData();
    formData.append("infoSeq", infoSeq);
    //formData.append("email", localStorage.getItem("email"));
    formData.append("email", loginList.email);
    dispatch(infoActions.insertInfo(formData, config));
    navigator(`/info/view/${infoSeq}`);
  };

  return (
    <div className="container pd-content-100">
      {infoDetail.category === "exhibition" ? (
        <h1 className="title">전시</h1>
      ) : infoDetail.category === "show" ? (
        <h1 className="title">공연</h1>
      ) : (
        <h1 className="title">박물관</h1>
      )}

      <div className="tableContent pd-content-100">
        <div className="imgDetail">
          <img src={infoDetail.thumbnail} />
        </div>
        <div className="tableDetail">
          <div className="title-Area">
            <h2>{infoDetail.title}</h2>
            <form onSubmit={onSubmit}>
              <input type="hidden" value={infoDetail.infoSeq} readOnly />
              <input
                type="image"
                onClick={addenter}
                src={imageSrc}
                style={{ height: "30px", width: "30px", float: "right" }}
              />
            </form>
          </div>
          <Table size="bg">
            <tbody>
              <tr>
                <th>장소</th>
                <td>{infoDetail.place}</td>
              </tr>
              <tr>
                <th>기간</th>

                {infoDetail.startDate === null ? (
                  <td>상시 개관</td>
                ) : (
                  <td>
                    {infoDetail.startDate} ~ {infoDetail.endDate}
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
                <td className="last-td">
                  {infoDetail.tel}
                  <Link to={infoDetail.homepage} target="_blank">
                    <Button className="btn-origin">홈페이지</Button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </Table>
          {infoDetail.startDate === null ? null : (
            <div className="D_DAY">
              <div className="d_day">
                {Math.floor(
                  Date.parse(infoDetail.endDate) / (1000 * 60 * 60 * 24)
                ) -
                  Math.floor(Date.parse(today) / (1000 * 60 * 60 * 24)) -
                  1 <
                0 ? (
                  <strong>
                    <strong className="viva-color">종료</strong>되었습니다.
                  </strong>
                ) : (
                  <strong>
                    <strong className="viva-color">
                      {Math.floor(
                        Date.parse(infoDetail.endDate) / (1000 * 60 * 60 * 24)
                      ) - Math.floor(Date.parse(today) / (1000 * 60 * 60 * 24))}
                    </strong>
                    일 남았습니다.
                  </strong>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="textContent">
        <h3 className="sub-title">상세내용</h3>
        <div className="division-line pd-top-100">
          {infoDetail.content === null ? (
            <p>자세한 내용은 홈페이지를 참고해주세요.</p>
          ) : (
            infoDetail.content
          )}
          <img src={infoDetail.content} />
        </div>
      </div>
    </div>
  );
};

export default InfoView;
