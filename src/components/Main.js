import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import '../css/main.css'
import '../css/common.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'


const Main = () => {
    return (
        <div className='main'>
            {/* slide-Area */}
            <div className='slide-Area'>
                <Carousel data-bs-theme="dark">
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="images/main/slide1.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="images/main/slide2.jpg"
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="images/main/slide3.jpg"
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            {/* banner */}
            <div className='container pd-bottom-100'>
                <ul className='banner-List'>
                    <li className='list-Item'>
                        <img src='images/main/banner.jpg' />
                    </li>
                    <li className='list-Item'>
                        <img src='images/main/banner.jpg' />
                    </li>
                    <li className='list-Item'>
                        <img src='images/main/banner.jpg' />
                    </li>
                    <li className='list-Item'>
                        <img src='images/main/banner.jpg' />
                    </li>
                    <li className='list-Item'>
                        <img src='images/main/banner.jpg' />
                    </li>
                    <li className='list-Item'>
                        <img src='images/main/banner.jpg' />
                    </li>
                </ul>
            </div>
            {/* Calender/list */}
            <div className='container pd-bottom-100 calender-daylist-Area'>
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
            {/* Ranking-List */}
            <div className='container pd-bottom-100 ranking-List-Area'>
                <div className='title'>
                    <h1>장르별 랭킹</h1>
                </div>
                <div className='ranking-List pd-top-60'>
                    <div className='tab-area'>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Nav variant="pills" className="pd-bottom-60">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">전시</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">공연</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
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
                                <Tab.Pane eventKey="second">
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
                </div>
            </div>
        </div>
    );
};

export default Main;