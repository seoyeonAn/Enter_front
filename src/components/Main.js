import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import '../css/main.css'
import '../css/common.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import ReactPlayer from 'react-player';


const Main = () => {
    return (
        <div className='main'>
            {/* slide-Area */}
            <div className='slide-Area pd-bottom-100'>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="images/main/slide1.png"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="images/main/slide2.png"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="images/main/slide3.png"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            {/* banner */}
            <div className='container pd-content-100'>
                <ul className='banner-List'>
                    <li className='list-Item'>
                        <img src='images/main/banner1.png' />
                    </li>
                    <li className='list-Item'>
                        <img src='images/main/banner2.png' />
                    </li>
                    <li className='list-Item'>
                        <img src='images/main/banner3.png' />
                    </li>
                    <li className='list-Item'>
                        <img src='images/main/banner4.png' />
                    </li>
                    <li className='list-Item'>
                        <img src='images/main/banner5.png' />
                    </li>
                    <li className='list-Item'>
                        <img src='images/main/banner6.png' />
                    </li>
                </ul>
            </div>

            {/* Ranking-List */}
            <div className='container pd-content-100 ranking-List-Area'>
                <div>
                    <h1 className='title'>문화예술 맛보기</h1>
                </div>
                <div className='ranking-List pd-top-60'>
                    <div className='tab-area'>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="1">
                            <Nav variant="pills" className="pd-bottom-60">
                                <Nav.Item>
                                    <Nav.Link eventKey="1">전시</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="2">공연</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="3">박물관</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="1">
                                    <div className='ranking-List-content'>
                                        <Card className='ranking-List-Item'>
                                            <Card.Img variant="top" src="images/main/test.jpg" />
                                            <Card.Body>
                                                <Card.Title>Card Title</Card.Title>
                                                <Card.Text>
                                                    Some quick example text to build on the card title and make up the
                                                    bulk of the card's content.
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                        <Card className='ranking-List-Item'>
                                            <Card.Img variant="top" src="images/main/test.jpg" />
                                            <Card.Body>
                                                <Card.Title>Card Title</Card.Title>
                                                <Card.Text>
                                                    Some quick example text to build on the card title and make up the
                                                    bulk of the card's content.
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                        <Card className='ranking-List-Item'>
                                            <Card.Img variant="top" src="images/main/test.jpg" />
                                            <Card.Body>
                                                <Card.Title>Card Title</Card.Title>
                                                <Card.Text>
                                                    Some quick example text to build on the card title and make up the
                                                    bulk of the card's content.
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                        <Card className='ranking-List-Item'>
                                            <Card.Img variant="top" src="images/main/test.jpg" />
                                            <Card.Body>
                                                <Card.Title>Card Title</Card.Title>
                                                <Card.Text>
                                                    Some quick example text to build on the card title and make up the
                                                    bulk of the card's content.
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="2">
                                    <div className='ranking-List-content'>
                                        <Card className='ranking-List-Item'>
                                            <Card.Img variant="top" src="images/main/test.jpg" />
                                            <Card.Body>
                                                <Card.Title>Card Title</Card.Title>
                                                <Card.Text>
                                                    Some quick example text to build on the card title and make up the
                                                    bulk of the card's content.
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                        <Card className='ranking-List-Item'>
                                            <Card.Img variant="top" src="images/main/test.jpg" />
                                            <Card.Body>
                                                <Card.Title>Card Title</Card.Title>
                                                <Card.Text>
                                                    Some quick example text to build on the card title and make up the
                                                    bulk of the card's content.
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                        <Card className='ranking-List-Item'>
                                            <Card.Img variant="top" src="images/main/test.jpg" />
                                            <Card.Body>
                                                <Card.Title>Card Title</Card.Title>
                                                <Card.Text>
                                                    Some quick example text to build on the card title and make up the
                                                    bulk of the card's content.
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                        <Card className='ranking-List-Item'>
                                            <Card.Img variant="top" src="images/main/test.jpg" />
                                            <Card.Body>
                                                <Card.Title>Card Title</Card.Title>
                                                <Card.Text>
                                                    Some quick example text to build on the card title and make up the
                                                    bulk of the card's content.
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="3">
                                    <div className='ranking-List-content'>
                                        <Card className='ranking-List-Item'>
                                            <Card.Img variant="top" src="images/main/test.jpg" />
                                            <Card.Body>
                                                <Card.Title>Card Title</Card.Title>
                                                <Card.Text>
                                                    Some quick example text to build on the card title and make up the
                                                    bulk of the card's content.
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                        <Card className='ranking-List-Item'>
                                            <Card.Img variant="top" src="images/main/test.jpg" />
                                            <Card.Body>
                                                <Card.Title>Card Title</Card.Title>
                                                <Card.Text>
                                                    Some quick example text to build on the card title and make up the
                                                    bulk of the card's content.
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                        <Card className='ranking-List-Item'>
                                            <Card.Img variant="top" src="images/main/test.jpg" />
                                            <Card.Body>
                                                <Card.Title>Card Title</Card.Title>
                                                <Card.Text>
                                                    Some quick example text to build on the card title and make up the
                                                    bulk of the card's content.
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                        <Card className='ranking-List-Item'>
                                            <Card.Img variant="top" src="images/main/test.jpg" />
                                            <Card.Body>
                                                <Card.Title>Card Title</Card.Title>
                                                <Card.Text>
                                                    Some quick example text to build on the card title and make up the
                                                    bulk of the card's content.
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </div>
                <div className='btn-area pd-top-40'>
                    <button className='btn btn-origin'>더보기</button>
                </div>
                </div>
            </div>
            {/* Calender/list */}
            <div className='container pd-content-100 calender-daylist-Area'>
                <div className='calender-Area'>
                    <Calendar />
                </div>
                <div className='day-List-Area'>
                    <ul className='day-List'>
                        <li className='d-list-Item'>
                            <a href='#'>
                                <span>전시 1</span>
                                <span>2023-09-20 ~ 2023-10-20</span>
                            </a>
                        </li>
                        <li className='d-list-Item'>
                            <a href='#'>
                                <span>전시 2</span>
                                <span>2023-09-20 ~ 2023-10-20</span>
                            </a>
                        </li>
                        <li className='d-list-Item'>
                            <a href='#'>
                                <span>전시 3</span>
                                <span>2023-09-20 ~ 2023-10-20</span>
                            </a>
                        </li>
                        <li className='d-list-Item'>
                            <a href='#'>
                                <span>전시 4</span>
                                <span>2023-09-20 ~ 2023-10-20</span>
                            </a>
                        </li>
                        <li className='d-list-Item'>
                            <a href='#'>
                                <span>전시 5</span>
                                <span>2023-09-20 ~ 2023-10-20</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='container pd-content-100'>
                <h1 className='title'>인기 동영상</h1>
                <div className="videoBox pd-top-60">
                    <ReactPlayer
                        className="video"
                        url={"https://youtu.be/rrI7tOhoVzA?si=U49HzIgORu8ErKAA"}
                        height="300px"
                        playing={true}
                        muted={true}
                        controls={true}
                    />

                    <ReactPlayer
                        className="video"
                        url={"https://youtu.be/EvStWwidM98?si=GKlEBoS5BSAicp_0"}
                        height="300px"
                        playing={false}
                        muted={true}
                        controls={true}
                    />

                    <ReactPlayer
                        className="video"
                        url={"https://youtu.be/G0ZuPjha-c8?si=Tri8gcbMQxh_KSxO"}
                        height="300px"
                        playing={false}
                        muted={true}
                        controls={true}
                    />
                </div>
            </div>
        </div>
    );
};

export default Main;