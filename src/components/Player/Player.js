import React from 'react';
import './Player.css';

const Player = (props) => {
    // console.log(props.player.name)
    
    
    const {img, name, salary, country,role} = props.player;
   
    return (
        <div className="player">
                <img src={img}/>
               <h2>{name}</h2>
               <p>Salary:{salary}</p>
               <p>Role:{role}</p>
               <p>Country:{country}</p>
               <button onClick={() => props.handleAddPlayer(props.player)} className="player-btn">Add Team</button>
            
        </div>
    );
};

export default Player;