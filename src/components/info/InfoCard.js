import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import thumbnail from "./thumbnail.css";
import { Link } from "react-router-dom";

const InfoCard = ({ information }) => {
  return (
    <>
      <div className="col-3" style={{ width: "18%" }}>
        <Card style={{ width: "230px", height: "480px" }}>
          <Card.Img
            variant="top"
            src={information.thumbnail}
            className="thumbnail"
          />
          <Card.Body>
            <Card.Title>
              <Link
                to={`/info/view/${information.info_seq}`}
                style={{ textDecorationLine: "none", color: "black" }}
              >
                {information.title}
              </Link>
            </Card.Title>
            <Card.Text
              style={{ padding: "30px 0", position: "absolute", bottom: "5px" }}
            >
              {information.start_date} ~ {information.end_date}
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
      </div>
    </>
  );
};

export default InfoCard;
