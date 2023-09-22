<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
import Mypage from "./mypage/Mypage"

function App() {
  return (
    <div className="App">
      <Mypage />
=======
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
>>>>>>> 8f9f86130ea01b93bfb286151ae254c0c6be3e88
    </div>
  );
}

export default App;
