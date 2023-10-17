import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const ExhibitionTaster = ({ exhibition }) => {
    console.log('individual exhibition: ', exhibition);
  return (
    <>
        <Card className="taster-List-Item">
          <Link to={`/info/view/${exhibition.infoSeq}`}>
            <Card.Img
              variant="top"
              src={exhibition.thumbnail}
              className="thumbnail"
            />

            <Card.Body>
              <Card.Title>{exhibition.title}</Card.Title>
              {exhibition.startDate === null ? (
                <Card.Text className="">상시 개관</Card.Text>
              ) : (
                <Card.Text className="">
                  {exhibition.startDate} ~ {exhibition.endDate}
                </Card.Text>
              )}
            </Card.Body>
          </Link>
        </Card>
    </>
  );
};

export default ExhibitionTaster;
