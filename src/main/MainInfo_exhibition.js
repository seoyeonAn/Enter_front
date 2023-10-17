import React, { useState } from 'react';
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';

const MainInfo_exhibition = ({ information }) => {

    return (
        <>
            <Card className="taster-List-Item">
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
        </>
    );
};

export default MainInfo_exhibition;