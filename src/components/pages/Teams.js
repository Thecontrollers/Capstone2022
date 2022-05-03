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
     <>
    <h1 className='teams'>Teams</h1>
    <div className='TeamContainer'>
    <div className="team_1">
         Overwatch
        <div className = "team_1_wrapper">
        Team A
        <div className = "record">
            (0-0)
        </div>
        <ul className='player_name'>
            <li> Marco Demeterio
                <span className="role"> Captain/DPS</span>
            </li>
            <li> Donnell Anderson 
            <span className="role"> DPS</span>
            </li>
            <li> Joshua Sudduth 
            <span className="role"> Support</span>
            </li>
            <li> Tyler Lingden 
            <span className="role"> Support</span>
            </li>
            <li> Randall Wheeler 
            <span className="role"> Tank</span>
            </li>
            <li> Matthew Woodin 
            <span className="role"> Tank</span>
            </li>
            <li> Tsering Dhondup 
            <span className="role"> Sub</span>
            </li>
            <li> Cale Norcross
            <span className="role"> Sub</span>
            </li>
            <li> Gregory Patti
            <span className="role"> Sub</span>
            </li>
            <li> Brent Orandi
            <span className="role"> Sub</span>
            </li>
        </ul>
    </div>
    <div className = "team_1_wrapper">
        Team B
        <div className = "record">
            (0-0)
        </div>
        <ul className='player_name'>
            <li> Marco Demeterio
                <span className="role"> Captain/DPS</span>
            </li>
            <li> Joshua Sudduth 
            <span className="role"> DPS</span>
            </li>
            <li> Tsering Dhondup 
            <span className="role"> Support</span>
            </li>
            <li> Gregory Patti
            <span className="role"> Support</span>
            </li>
            <li> Cale Norcross
            <span className="role"> Tank</span>
            </li>
            <li> Brent Orandi
            <span className="role"> Tank</span>
            </li>
            <li> Matthew Woodin 
            <span className="role"> Sub</span>
            </li>
            <li> Tyler Lingden 
            <span className="role"> Sub</span>
            </li>
            <li> Donnell Anderson 
            <span className="role"> Sub</span>
            </li>
            <li> Randall Wheeler 
            <span className="role"> Sub</span>
            </li>
        </ul>
    </div>
    </div> 
    <div className="team_1">
         Rocket League
        <div className = "team_1_wrapper">
        Team A
        <div className = "record">
            (0-0)
        </div>
        <ul className='player_name'>
            <li> Stephen Gardner
                <span className="role"> Captain</span>
            </li>
            <li> Trey yarwood
            </li>
            <li> Andrew Bushey 
            </li>
            <li> Xander Wilson 
            <span className="role"> Sub</span>
            </li>
        </ul>
    </div>
    <div className = "team_1_wrapper">
        Team A
        <div className = "record">
            (0-0)
        </div>
        <ul className='player_name'>
            <li> Brendan Mchain
                <span className="role"> Captain</span>
            </li>
            <li> Joshua Corelli
            </li>
            <li> Louis DeSarro 
            </li>
        </ul>
    </div>
    </div>
    <div className="team_1">
         League of Legends
        <div className = "team_1_wrapper">
        Team A
        <div className = "record">
            (0-0)
        </div>
        <ul className='player_name'>
            <li> Alessandro Cellamare
                <span className="role"> Top</span>
            </li>
            <li> Joe Center
            <span className="role"> Jungle/Captain</span>
            </li>
            <li> Andrew Bushey 
            <span className="role"> Mid</span>
            </li>
            <li> Xander Wilson 
            <span className="role"> Bottem</span>
            </li>
            <li> Xander Wilson 
            <span className="role"> Support</span>
            </li>
            <li> Xander Wilson 
            <span className="role"> Sub</span>
            </li>
        </ul>
    </div>
    </div>
    <div className="team_1">
         Valorant
        <div className = "team_1_wrapper">
        Team A
        <div className = "record">
            (0-0)
        </div>
        <ul className='player_name'>
            <li> Patrick Farrell
                <span className="role"> Captain</span>
            </li>
            <li>Philip Perkowski </li>
            <li> Lucas McHale  </li>
            <li> Andrew Zaw  </li>
            <li> Nate Wojcinski  </li>
            <li> Nishant Sharma  </li>
            <li> David Neri  </li>
        </ul>
    </div>
    </div>
    <div className="team_1">
         Smash Ulimate
        <div className = "team_1_wrapper">
        Team A
        <div className = "record">
            (0-0)
        </div>
        <ul className='player_name'>
            <li> Jason Guzman
                <span className="role"> Captain</span>
            </li>
            <li>Giancarlo Pimentel </li>
            <li> Sharmar Stoddard  </li>
            <li> Bennett Ketchum  
            <span className="role"> Sub</span>
            </li>
        </ul>
    </div>
    <div className = "team_1_wrapper">
        Team B
        <div className = "record">
            (0-0)
        </div>
        <ul className='player_name'>
            <li> Tyrese Del Valle
                <span className="role"> Captain</span>
            </li>
            <li>Matthew Steves </li>
            <li> Patrick Amarasinghe </li>
            <li> Mitchel Clow  
            <span className="role"> Sub</span>
            </li>
        </ul>
    </div>
    <div className = "team_1_wrapper">
        Team C
        <div className = "record">
            (0-0)
        </div>
        <ul className='player_name'>
            <li> Tony Fedele
                <span className="role"> Captain</span>
            </li>
            <li> Marcus Camacho  </li>
            <li> Javier Crespo-Law  </li>
            <li> Nicholas Mineo  
            <span className="role"> Sub</span>
            </li>
        </ul>
    </div>
    <div className = "team_1_wrapper">
        Team D
        <div clDssName = "record">
            (0-0)
        </div>
        <ul className='player_name'>
            <li> Owen Drummond
                <span className="role"> Captain</span>
            </li>
            <li> Nicholas Mezzapella </li>
            <li> LeAndre Hercules  </li>
            <li> Noah Thompson  
            <span className="role"> Sub</span>
            </li>
        </ul>
    </div>
    </div>
    <div className="team_1">
            Hearthstone
        <div className = "team_1_wrapper">
        Team A
        <div className = "record">
            (0-0)
        </div>
        <ul className='player_name'>
            <li>Ryan Bassett </li>  
        </ul>
    </div>
    </div>
    <div className="team_1">
            Rainbow Six Siege
        <div className = "team_1_wrapper">
        Team A
        <div className = "record">
            (0-0)
        </div>
        <ul className='player_name'>
            <li>Matthew Pikowsky 
            <span className="role"> Captain</span>
            </li>  
            <li>Justin Virga </li>  
            <li>Andrew Bardin </li>  
            <li>J William Bowen </li>  
            <li>Hunter McGivern </li>  
            <li>Hunter O'Gorman 
            <span className="role"> Sub</span>
            </li>  
        </ul>
    </div>
    </div>
    </div>
    <Footer/> 
    </>
  );
}
