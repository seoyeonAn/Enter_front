import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const ShowTaster = ({ show }) => {
    return (
        <>
            <Card className="taster-List-Item">
                <Link to={`/info/view/${show.infoSeq}`}>
                    <Card.Img
                        variant="top"
                        src={show.thumbnail}
                        className="thumbnail"
                    />

                    <Card.Body>
                        <Card.Title>{show.title}</Card.Title>
                        {show.startDate === null ? (
                            <Card.Text className="cardText">상시 개관</Card.Text>
                        ) : (
                            <Card.Text className="">
                                {show.startDate} ~ {show.endDate}
                            </Card.Text>
                        )}
                    </Card.Body>
                </Link>
            </Card>
        </>
    );
};

export default ShowTaster;