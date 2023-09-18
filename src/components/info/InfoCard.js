import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const buttonStyle = () => ({
  backgoundColor: "#be3455"
});

const InfoCard = ({ information }) => {
  return (
    <>
      <Card.Img variant="top" src="{information.img}" />
      <Card.Body>
        <Card.Title>{information.title}</Card.Title>
        <Card.Text>
          {information.start_date} ~ {information.end_date}
        </Card.Text>
        <Button variant="primary">Show More</Button>
        {/* <Button style={buttonStyle}>Show More</Button> */}
      </Card.Body>
    </>
  );
};

export default InfoCard;
