import React, { useState } from "react";
import Cities from "./Cities";

export default function States(props) {
  const [visibility, setVisibility] = useState(false);

  function setActiveStatus() {
    visibility ? setVisibility(false) : setVisibility(true);
  }
  return (
    <ul>
      <li>
        <div onClick={setActiveStatus}>{props.stateName}</div>
        {visibility &&
          props.citiesNames.map((element) => (
            <Cities
              key={element.name + Math.random()}
              cityName={element.name}
              townsNames={element.towns}
            />
          ))}
      </li>
    </ul>
  );
}
