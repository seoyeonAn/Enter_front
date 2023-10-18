import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import '../../css/common.css'
import "../../css/mypage.css"

const DiaryList = ( { diary }) => {
    return (
        <div className='list-item'>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        <div className='title-Area'>
                            <span>{diary.title}</span>
                            <small className='d-date'>{diary.diary_date}</small>
                        </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        {diary.content}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default DiaryList;