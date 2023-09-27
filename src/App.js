import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import BaseLayout from "./components/layout/BaseLayout";
import Home from "./components/Home";
import InfoList from "./components/info/InfoList";
import InfoView from "./components/info/InfoView";
import EnterList from "./components/enter/EnterList";
import Mypage from "./components/mypage/Mypage";
import Use_Login from "./components/users/Use_Login";
import Use_Join from "./components/users/Use_Join";

function App() {
  return (
    <div className="container">
      <h1>EnterMission</h1>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Use_Login />} />
          <Route path="join" element={<Use_Join />} />
          <Route path="info/:currentPage" element={<InfoList />} />
          <Route path="info/view/:info_seq" element={<InfoView />} />
          <Route path="enter" element={<EnterList />} />
          <Route path="mypage" element={<Mypage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
