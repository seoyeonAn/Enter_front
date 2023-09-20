import "./App.css";
import { Routes, Route } from "react-router-dom";
import Use_Join from "./Users/Use_Join";
function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Use_Join />}></Route>
        {/* <Route path="/" element={<Use_Login />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
