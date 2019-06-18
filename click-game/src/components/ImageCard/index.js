import React from "react";
import "./style.css";

function ImageCard(props) {
  return (
    <div className="card">
      <span onClick={() => props.getId(props.id)}>
        <img alt={props.name} src={props.image} />
      </span>
    </div>
  );
}

export default ImageCard;
