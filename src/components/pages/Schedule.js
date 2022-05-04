import React from 'react';
import '../../App.css';
import './Schedule.css'

export default function Schedule() {
    return (
        <>
        <h1>Schedule Spring 2022</h1>
        <div className='container'>
            <ul className='items'>
            <li>
            <img src ="images/WCE_Assets/Overwatch.jpg" alt = "Overwatch" width={188} height={250}/>
            </li>
           <li>
            <ul className='schedule_name'>
            <li><div className='name'> Mondays</div></li>
           <li><div className='time'> 8pm</div></li>
            </ul>
           </li>  
           <li>
            <img src ="images/WCE_Assets/RocketLeague.jpg" alt = "RL" width={188} height={250}/>
            </li>
           <li>
            <ul className='schedule_name'>
            <li><div className='name'> Tuesdays</div></li>
           <li><div className='time'> 8pm</div></li>
            </ul>
           </li>  
           <li>
            <img src ="images/WCE_Assets/Valorant.jpg" alt = "Valorant" width={188} height={250}/>
            </li>
           <li>
            <ul className='schedule_name'>
            <li><div className='name'> Wednesdays</div></li>
           <li><div className='time'> 8pm</div></li>
            </ul>
           </li>  
           
            </ul>
            <ul className='items'>
            <li>
            <img src ="images/WCE_Assets/R6.jpg" alt = "R6" width={188} height={250}/>
            </li>
           <li>
            <ul className='schedule_name'>
            <li><div className='name'> Wednesdays</div></li>
           <li><div className='time'> 8pm</div></li>
            </ul>
           </li>  
           <li>
            <img src ="images/WCE_Assets/smash.jpg" alt = "smash" width={188} height={250}/>
            </li>
           <li>
            <ul className='schedule_name'>
            <li><div className='name'> Thursdays</div></li>
           <li><div className='time'> 8pm</div></li>
            </ul>
           </li>  
           <li>
            <img src ="images/WCE_Assets/LoL.jpg" alt = "League" width={188} height={250}/>
            </li>
           <li>
            <ul className='schedule_name'>
            <li><div className='name'> N/A</div></li>
           <li><div className='time'> N/A</div></li>
            </ul>
           </li>  
           
            </ul>
        </div>
        </>
    );
}