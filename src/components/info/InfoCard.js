import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

// css
import "../../css/info.css";

const InfoCard = ({ information }) => {
  return (
    <>
      <div className="col-3">
        <Card className="mainCard">
          <Link to={`/info/view/${information.infoSeq}`}>
            <Card.Img
              variant="top"
              src={information.thumbnail}
              className="thumbnail"
            />

            <Card.Body>
              <Card.Title>{information.title}</Card.Title>
              {information.startDate === null ? (
                <Card.Text className="cardText">상시 개관</Card.Text>
              ) : (
                <Card.Text className="cardText">
                  {information.startDate} ~ {information.endDate}
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
