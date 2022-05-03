import React from "react";
import "../../App.css";
import Footer from "../Footer";
import "./Teams.css";

//         Hearthstone
//         Super Smash Bros. Ulimate
//         League of Legends
//         Rainbow Six Siege

export default function Teams() {
  return (
    <div>
      <h1 className="teams">Teams</h1>
      <div className="TeamContainer">
        <div className="team_1">
          Rocket League
          <div className="team_1_wrapper">
            Rocket League A<div className="record">(8-2)</div>
            <ul className="player_name">
              <li>Stephen Gardner (Captain)</li>
              <li>Trey Yarwood (Starter)</li>
              <li>Andrew Bushey (Starter)</li>
              <li>Xander Wilson (Sub)</li>
            </ul>
          </div>
          <div className="team_2">
            Rocket League
            <div className="team_2_wrapper">
              Rocket League B<div className="record">(6-4)</div>
              <ul className="player_name">
                <li>Brandon McChain (Captain)</li>
                <li>Joshua Corelli (Starter)</li>
                <li>Louis Desarro (Starter)</li>
              </ul>
            </div>
            <div className="team_3">
              Overwatch
              <div className="team_1_wrapper">
                Overwatch A<div className="record">(7-3)</div>
                <ul className="player_name">
                  <li>Marco Demelerio (DPS / Captain)</li>
                  <li>Donnell Anderson (DPS)</li>
                  <li>Joshua Sudduth (Support)</li>
                  <li>Tyler Lingen (Support)</li>
                  <li>Randall Wheeler (Tank)</li>
                  <li>Matthew Woodin (Tank)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
