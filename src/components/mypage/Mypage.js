import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { mypageActions } from '../../toolkit/actions/mypage_action';
import axios from 'axios';
import UserList from './UserList';

import "../../css/mypage.css"
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';




const Mypage = () => {
    const dispatch = useDispatch();

    const getUserList = () => {
        dispatch(mypageActions.getUserList());

    };

    useEffect(() => {
        getUserList();
    }, []);

    const userList = useSelector((state) => state.user.userList);
    return (
        <>
            <Container className='pd-content-100'>
                <div className='title-area'>
                    <h1 className='mp-Title'>마이페이지</h1>
                </div>
                <Container className='user-info pd-content-60'>
                    <div className='user-info-img-area'>
                        <img src="images/mypage/thumb1.png" className='user-info-img' />
                    </div>
                    <div className='user-info-desc-area'>
                        {userList &&
                            userList.map((user) => {
                                return <UserList user={user} key={user.email} />
                            })}
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
                                            <div className='user-diary-write'>

                                            </div>
                                            <div className='user-diary-list'>

                                            </div>
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