import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUserPlus} from '@fortawesome/free-solid-svg-icons'


import './Player.css';


const Player = (props) => {
    // console.log(props.player.name)
    
    
    const {img, name, salary, country,role} = props.player;
   
    return (
        <div className="player">
                <img src={img}/>
               <h2>{name}</h2>
               <p>Salary:${salary}</p>
               <p>Role:{role}</p>
               <p>Country:{country}</p>
               <button onClick={() => props.handleAddPlayer(props.player)} className="player-btn">Add Team   <FontAwesomeIcon className="icon" icon={faUserPlus} /> </button>
            
        </div>
    );
};

export default Player;