import React, { useState } from 'react';
import Player from '../Player/Player';
import fakeData from '../../fakeData/fakeData.json'
import Selected from '../Selected/Selected';
import './GreatPlayer.css';

const GreatPlayer = () => {

//   console.log(fakeData)

    const [player, setPlayer] = useState([])

    const [selected, setSelected] = useState([])

    const handleAddPlayer = (player) => {
        const newSelected = [...selected, player]
        setSelected(newSelected)
    }


 
    
    return (
        <div className="great-player-container">
           <div className="player-section">
          
               {
                   fakeData.map(player => <Player
                    handleAddPlayer={handleAddPlayer}
                     player={player} 
                     key={player.id} >
                         
                     </Player>)
               }
           

            
         
           </div> 

           
           <div className="selected-section">
              
              <Selected selected={selected}></Selected>
                
           </div>



        </div>
    );
};

export default GreatPlayer;