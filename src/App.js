import "./App.css";
import { Routes, Route } from "react-router-dom";
import Use_Join from "./Users/Use_Join";
import Use_Login from "./Users/Use_Login";
function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/join" element={<Use_Join />}></Route>
        <Route path="login" element={<Use_Login />} />
      </Routes>
    </div>
  );
}

export default App;
