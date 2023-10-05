// css
import "./App.css";
import "./css/common.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import BaseLayout from "./components/layout/BaseLayout";
import InfoList from "./components/info/InfoList";
import InfoView from "./components/info/InfoView";
import Mypage from "./components/mypage/Mypage";
import Use_Login from "./components/users/Use_Login";
import Use_Join from "./components/users/Use_Join";
import Main from "./components/Main";
import MuseumCard from "./components/info/MuseumCard";

function App() {
  return (
    // <div className="container">
    <div>
      <h1>EnterMission</h1>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Main />} />
          <Route path="login" element={<Use_Login />} />
          <Route path="join" element={<Use_Join />} />
          <Route path="info/:currentPage" element={<InfoList />} />
          <Route path="info/view/:infoSeq" element={<InfoView />} />
          <Route path="mypage" element={<Mypage />} />

          <Route path="info/museum/:currentPage" element={<MuseumCard />} />
        </Route>
      </Routes>
      {/* footer */}
    </div>
  );
}

export default App;
