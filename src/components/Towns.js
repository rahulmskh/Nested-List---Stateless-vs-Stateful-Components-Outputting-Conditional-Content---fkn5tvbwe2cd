import React from "react";

export default function Towns(props) {
  return (
    <ul>
      <li>
        <div id={props.townId}>{props.townName}</div>
      </li>
    </ul>
  );
}
