import React from 'react';

const UserList = ({user}) => {
    return (
        <>
            <div className='user-info-img-area'>
                <img src="images/mypage/thumb1.png" className='user-info-img' />
            </div>
            <div className='user-info-desc-area'>
                <form>
                    <div className='user-info-email user-info-desc'>
                        <span className='user-info-desc-l'>이메일</span>
                        <span className='user-info-desc-r'>{user.email}</span>
                    </div>
                    <div className='user-info-name user-info-desc'>
                        <span className='user-info-desc-l'>이름</span>
                        <input type='text' className='user-info-desc-r' name='' value={user.name} />
                    </div>
                    <div className='user-info-pass user-info-desc'>
                        <span className='user-info-desc-l'>비밀번호</span>
                        <input type='password' className='user-info-desc-r' name='' value={user.password}/>
                    </div>
                    <div className='user-info-desc-btn pd-top-60'>
                        <button type='submit' className='btn'>변경하기</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default UserList;