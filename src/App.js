import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import BaseLayout from "./components/layout/BaseLayout";
import Home from "./components/Home";
import InfoList from "./components/info/InfoList";
import InfoView from "./components/info/InfoView";
import EnterList from "./components/enter/EnterList";

function App() {
  return (
    <div className="container">
      <h1>EnterMission</h1>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path="info/:currentPage" element={<InfoList />} />
          <Route path="info/view/:info_seq" element={<InfoView />} />
          <Route path="enter" element={<EnterList />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
