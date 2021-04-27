import React from 'react';
import './Player.css';

const Player = (props) => {
    // console.log(props.player.name)
    return (
        <div className="player">
                <img src={props.player.img}/>
               <h2>{props.player.name}</h2>
               <p>Salary:{props.player.salary}</p>
               <p>Role:{props.player.role}</p>
               <p>Country:{props.player.country}</p>
               <button onClick={props.handleAddPlayer} className="player-btn">Add Team</button>
            
        </div>
    );
};

export default Player;