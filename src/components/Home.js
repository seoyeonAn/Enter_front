import React from "react";
import ReactPlayer from "react-player";
import "../css/home.css";

const Home = () => {
  return <>
    <h1>인기 동영상</h1>
    <div className="videoBox">
      <ReactPlayer
        className="video"
        url={"https://youtu.be/rrI7tOhoVzA?si=U49HzIgORu8ErKAA"}
        height="300px"
        playing={true}
        muted={true}
        controls={true}
      />

      <ReactPlayer
        className="video"
        url={"https://youtu.be/EvStWwidM98?si=GKlEBoS5BSAicp_0"}
        height="300px"
        playing={false}
        muted={true}
        controls={true}
      />

      <ReactPlayer
        className="video"
        url={"https://youtu.be/G0ZuPjha-c8?si=Tri8gcbMQxh_KSxO"}
        height="300px"
        playing={false}
        muted={true}
        controls={true}
      />
    </div>
  </>
};

export default Home;
