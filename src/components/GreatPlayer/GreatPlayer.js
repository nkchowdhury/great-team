import React, { useState } from 'react';
import Player from '../Player/Player';
import fakeData from '../../fakeData/fakeData.json'
import Selected from '../Selected/Selected';
import './GreatPlayer.css';

const GreatPlayer = () => {

  console.log(fakeData)

    const [player, setPlayer] = useState([])

    const [selected, setSelected] = useState([])

    const handleAddPlayer = () => {
        const newSelected = [...selected, selected]
        setSelected(newSelected)
    }


 
    
    return (
        <div className="great-player-container">
           <div className="player-section">
          
               {
                   fakeData.map(player => <Player handleAddPlayer={handleAddPlayer} player={player} ></Player>)
               }
           

            
         
           </div> 

           
           <div className="selected-section">
              
              <Selected selected={selected}></Selected>
                
           </div>



        </div>
    );
};

export default GreatPlayer;