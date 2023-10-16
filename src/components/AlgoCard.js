import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

// css
import "../css/info.css";

const AlgoCard = ({ algorithm }) => {
  return (
    <>
      <div className="col-3">
        <Card className="mainCard">
          <Link to={`/info/view/${algorithm.enter_seq}`}>
            <Card.Img
              variant="top"
              src={algorithm.thumbnail}
              className="thumbnail"
            />

            <Card.Body>
              <Card.Title>{algorithm.title}</Card.Title>
              {algorithm.startDate === null ? (
                <Card.Text className="cardText">상시 개관</Card.Text>
              ) : (
                <Card.Text className="cardText">
                  {algorithm.startDate} ~ {algorithm.endDate}
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
