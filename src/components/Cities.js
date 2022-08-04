import React, { useState } from "react";
import Towns from "./Towns";

export default function Cities(props) {
  const [visibility, setVisibility] = useState(false);

  function setActiveStatus() {
    visibility ? setVisibility(false) : setVisibility(true);
  }
  return (
    <ul>
      <li>
        <div onClick={setActiveStatus}>{props.cityName}</div>
        {visibility &&
          props.townsNames.map((element) => (
            <Towns key={element.name + Math.random()} townName={element.name} />
          ))}
      </li>
    </ul>
  );
}
