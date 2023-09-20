import React from 'react';
import "../css/mypage.css"
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
// import sample from 'mypage/nouserpic.png';

const Mypage = () => {
    return (
        <>
            <Container>
                <div className='title-area'>
                    <h1 className='mp-Title'>마이페이지</h1>
                </div>
                <Container>
                    <div className='user-info'>
                        <Image src="mypage/nouserpic.png" roundedCircle />
                    </div>
                </Container>
            </Container>
        </>
    );
};

export default Mypage;