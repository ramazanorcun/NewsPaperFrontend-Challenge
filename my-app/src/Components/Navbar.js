import React from "react";
import "../css/navbar.css";

function Navbars() {
  return (
    <div>
      <ul className="nav">
        <li className="active">
          <a href="/">Home</a>
        </li> 
        <li>
          <a href="business">Business</a>
        </li>
        <li>
          <a href="entertainment">Entertainment</a>
        </li>
        <li>
          <a href="health">Health</a>
        </li>
        <li>
          <a href="science">Science</a>
        </li>
        <li>
          <a href="sports">Sports</a>
        </li>
        <li>
          <a href="technology">Technology</a>
        </li>
        <li className="hakkimda">
          <a href="hakkımda">Hakkımda</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbars;
