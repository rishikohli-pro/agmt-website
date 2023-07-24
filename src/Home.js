import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import MemberCard from "./Components/MemberCard/MemberCard";

function Home() {
  return (
    <div className="App">
      <Navbar />
      <div className="banner">
        <h1>Banner</h1>
      </div>
      <div className="members">
        <h1>Our Members</h1>
        <div className="team-grid">
          <MemberCard />
          <MemberCard />
          <MemberCard />
        </div>
      </div>
      <h1 className="ourAim">Our Aim</h1>
      <div className="Aim">
        <div className="Aim-left">
          <div className="aim-img">
            <p>Image</p>
          </div>
        </div>
        <div className="Aim-right">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem.
          </p>
        </div>
      </div>

      <h1 className="work">Work Done</h1>
      <div className="workdone">
        <div className="work-left">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem.
          </p>
        </div>
        <div className="work-right">
          <div className="work-img">
            <p>Image</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
