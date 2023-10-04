import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import BaseLayout from "./components/layout/BaseLayout";
import Home from "./components/Home";
import InfoList from "./components/info/InfoList";
import InfoView from "./components/info/InfoView";
import Mypage from "./components/mypage/Mypage";
import Use_Login from "./components/users/Use_Login";
import Use_Join from "./components/users/Use_Join";
import Main from "./components/Main";
import Logout from "./components/users/Logout";

function App() {
  return (
    // <div className="container">
    <div>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          {/* <Route index element={<Home />} /> */}
          <Route index element={<Main />} />
          <Route path="login" element={<Use_Login />} />
          <Route path="join" element={<Use_Join />} />
          <Route path="logout" element={<Logout />} />
          <Route path="info/:currentPage" element={<InfoList />} />
          <Route path="info/view/:infoSeq" element={<InfoView />} />
          <Route path="mypage" element={<Mypage />} />
        </Route>
      </Routes>

      {/* footer */}
      <div>
        <footer>
          <p>
            법인명(상호) : 주식회사 엔터미션 | 사업자등록번호: 110-81-123456
          </p>
          <p>주소 : 서울특별시 서초구 서초동 엔터미션 1호점</p>
          <p>고객행복센터 : 1588-1234 (월~토요일 오전 10시~오후 6시)</p>
          <br />
        </footer>
      </div>
    </div>
  );
}

export default App;
