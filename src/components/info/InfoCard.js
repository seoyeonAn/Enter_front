import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import thumbnail from "./thumbnail.css";

const InfoCard = ({ information }) => {
  return (
    <>
      <div className="col">
        <Card style={{ width: "210px", height: "480px" }}>
          <Card.Img
            variant="top"
            src={information.thumbnail}
            className="thumbnail"
          />
          <Card.Body>
            <Card.Title>{information.title}</Card.Title>
            <Card.Text>
              {information.start_date} ~ {information.end_date}
            </Card.Text>
            {/* <Button style={buttonStyle}>Show More</Button> */}
          </Card.Body>
        </Card>
        <br />
      </div>
    </>
  );
};

export default InfoCard;
