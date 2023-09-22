import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./infocard.css";
import { Link } from "react-router-dom";

const InfoCard = ({ information }) => {
  return (
    <>
      <div className="col-3">
        <Card className="mainCard">
          <Link to={`/info/view/${information.info_seq}`}>
            <Card.Img
              variant="top"
              src={information.thumbnail}
              className="thumbnail"
            />

            <Card.Body>
              <Card.Title>{information.title}</Card.Title>

              {information.start_date === null ? (
                <Card.Text className="cardText">상시 개관</Card.Text>
              ) : (
                <Card.Text className="cardText">
                  {information.start_date} ~ {information.end_date}
                </Card.Text>
              )}
            </Card.Body>
          </Link>
        </Card>
      </div>
    </>
  );
};

export default InfoCard;
