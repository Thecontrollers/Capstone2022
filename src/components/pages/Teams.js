import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import './Teams.css';

// Rocket League
//         Hearthstone
//         Super Smash Bros. Ulimate
//         League of Legends
//         Overwatch
//         Rainbow Six Siege

export default function Teams() {
    return (
    <>
    <h1 className='teams'>Teams</h1>
    <div className='TeamContainer'>
    <div className="team_1">
         Rocket League
        <div className = "team_1_wrapper">
        Team 1
        <div className = "record">
            (0-0)
        </div>
        <ul className='player_name'>
            <li>
                Player Name
            </li>
            <li>
                Player Name
            </li>
            <li>
                Player Name
            </li>
        </ul>
    </div>
    </div>
    </div>
    <Footer/> 
    </>
    );
}