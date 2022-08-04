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
        <div id={props.cityId} onClick={setActiveStatus}>
          {props.cityName}
        </div>
        {visibility &&
          props.townsNames.map((element, index) => (
            <Towns
              townId={`town${index + 1}`}
              key={element.name + Math.random()}
              townName={element.name}
            />
          ))}
      </li>
    </ul>
  );
}
