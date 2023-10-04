import React from 'react';
import { useDispatch } from 'react-redux';
import EnterLabel from '../enter/EnterLabel';

const EnterList = () => {
    const dispatch = useDispatch();

    const getEnterList = () => {
      dispatch(enterActions.getEnterList());
    };
  
    useEffect(() => {
      getEnterList();
    }, []);
  
    const enterList = useSelector((state) => state.enterlist.enterList);
  
    console.log("enterList: ", enterList);
  
    return (
      <>
        <h3>EnterList</h3>
        {enterList &&
          enterList.map((enterlist) => {
            return <EnterLabel enterlist={enterlist} key={enterlist.enterSeq} />;
          })}
      </>
    )
};

export default EnterList;