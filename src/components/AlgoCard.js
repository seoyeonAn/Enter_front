import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

// css
import "../css/info.css";
import "../css/common.css";

const AlgoCard = ({ algorithm }) => {
  return (
    <>
      <div className="col-3">
        <Card className="mainCard">
          <Link to={`/info/view/${algorithm.info_seq}`}>
            <Card.Img
              variant="top"
              src={algorithm.thumbnail}
              className="thumbnail"
            />

            <Card.Body>
              <Card.Title>{algorithm.title}</Card.Title>
              {/* <Card.Text className="cardText">코사인 유사도 : {algorithm.cosine_sim}</Card.Text> */}
              {algorithm.start_date === "" ? (
                <Card.Text className="cardText">상시 개관</Card.Text>
              ) : (
                <Card.Text className="cardText">
                  {algorithm.start_date} ~ {algorithm.end_date}
                </Card.Text>
              )}
            </Card.Body>
          </Link>
        </Card>
      </div>
    </>
  );
};

export default AlgoCard;
