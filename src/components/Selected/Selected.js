import React from "react";
import "./Selected.css";

const Selected = (props) => {
  const selected = props.selected;
  console.log(selected);

  let totalSalary = 0;
  for (let i = 0; i < selected.length; i++) {
    let player = selected[i];
    totalSalary = totalSalary + player.salary;
  }

  //    let selectedName = [];
  //    for (let i = 0; i < selected.length; i++) {
  //        let player = selected[i];
  //        selectedName = (selectedName + player.name);

  //    };

  //    let playerSalary = [];
  //    for (let i = 0; i < selected.length; i++) {
  //        let player = selected[i];
  //        playerSalary = (playerSalary + player.salary);

  //    };
  return (
    <div className="selected-part">
      <table>
        <caption>Selection Summary</caption>
        <tbody>
          <tr>
            <td>Selected Player</td>
            <td>Player Salary</td>
          </tr>

          <tr>
            <td>
              {selected.map((player) => (
                <li className="list-style">{player.name}</li>
              ))}
            </td>
            <td>
              {selected.map((player) => (
                <li className="list-style">${player.salary}</li>
              ))}
            </td>
          </tr>

          <tr>
            <td>Total Selection</td>
            <td>{selected.length}</td>
          </tr>

          <tr>
            <td>Total Budget</td>
            <td>${totalSalary}.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Selected;
