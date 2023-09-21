import React from 'react';
import "../css/mypage.css"
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
// import sample from 'mypage/nouserpic.png';

const Mypage = () => {
    return (
        <>
            <Container className='pd-content-100'>
                <div className='title-area'>
                    <h1 className='mp-Title'>마이페이지</h1>
                </div>
                <Container className='user-info pd-content-60'>
                    {/* <Image src="mypage/nouserpic.png" roundedCircle /> */}
                    <div className='user-info-img-area'>
                        <img src="images/mypage/thumb1.png" className='user-info-img' />
                    </div>
                    <div className='user-info-desc-area'>
                        <form>
                            <div className='user-info-email user-info-desc'>
                                <span className='user-info-desc-l'>이메일</span>
                                <span className='user-info-desc-r'>aa@aaa.com</span>
                            </div>
                            <div className='user-info-name user-info-desc'>
                                <span className='user-info-desc-l'>이름</span>
                                <input type='text' className='user-info-desc-r' name='' />
                            </div>
                            <div className='user-info-pass user-info-desc'>
                                <span className='user-info-desc-l'>비밀번호</span>
                                <input type='password' className='user-info-desc-r' name='' />
                            </div>
                            <div className='user-info-desc-btn pd-top-60'>
                                <button type='submit' className='btn'>변경하기</button>
                            </div>
                        </form>
                    </div>
                </Container>
                <Container className='user-tab-area pd-content-60'>
                    <div className='title-area'>
                        <h1 className='mp-Title'>EnterList/Diary</h1>
                    </div>
                    <div className='list-diary-area'>
                        <div className='tab-area'>
                            <Tabs
                                defaultActiveKey="EnterList"
                                transition={false}
                                id="noanim-tab-example"
                                className="tab-li"
                            >
                                <Tab eventKey="EnterList" title="EnterList">
                                    <div className='tab-content-area'>
                                        <div className='tab-content-desc'>
                                            Tab content for EnterList
                                        </div>
                                    </div>

                                </Tab>
                                <Tab eventKey="Diary" title="Diary">
                                    <div className='tab-content-area'>
                                        <div className='tab-content-desc'>
                                            Tab content for Diary
                                        </div>
                                    </div>
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </Container>
            </Container>
        </>
    );
};

export default Mypage;