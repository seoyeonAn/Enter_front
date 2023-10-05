import Card from "react-bootstrap/Card";
import "../../css/infocard.css";
import { Link } from "react-router-dom";

const MuseumCard = ({ information }) => {
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
              <Card.Text className="cardText">상시 개관</Card.Text>
            </Card.Body>
          </Link>
        </Card>
      </div>
    </>
  );
};

export default MuseumCard;
