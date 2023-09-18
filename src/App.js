import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import BaseLayout from "./components/layout/BaseLayout";
import Home from "./components/Home";
import InfoList from "./components/info/InfoList";

function App() {
  return (
    <div className="container">
      <h1>EnterMission</h1>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path="info/:currentPage" 
          element={<InfoList />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
