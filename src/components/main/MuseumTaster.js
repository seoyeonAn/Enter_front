import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const MuseumTaster = ({ museum }) => {
  return (
    <>
        <Card className="taster-List-Item">
          <Link to={`/info/view/${museum.infoSeq}`}>
            <Card.Img
              variant="top"
              src={museum.thumbnail}
              className="thumbnail"
            />

            <Card.Body>
              <Card.Title>{museum.title}</Card.Title>
              {museum.startDate === null ? (
                <Card.Text className="">상시 개관</Card.Text>
              ) : (
                <Card.Text className="">
                  {museum.startDate} ~ {museum.endDate}
                </Card.Text>
              )}
            </Card.Body>
          </Link>
        </Card>
    </>
  );
};

export default MuseumTaster;
