import React from 'react';

const Selected = (props) => {
    
   
   
   const selected = props.selected;
   console.log(selected)
   
   let totalSalary = 0;
   for (let i = 0; i < selected.length; i++) {
       let player = selected[i];
       totalSalary = (totalSalary + player.salary);


   };
    return (

        <div>

            <h2>Selection Summary</h2>
            <h3>Total Player Selection:{selected.length}</h3>
            <h3>Name:{props.selected.name}</h3>
            <h3>TotalSalary:{totalSalary}</h3>
            
        </div>

    );
};

export default Selected;