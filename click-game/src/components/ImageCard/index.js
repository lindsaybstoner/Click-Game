import React from "react";
import "./style.css";

function ImageCard(props) {
  return (
    <div className="card">
        <img alt={props.name} src={props.image} />
    </div>
  );
}

export default ImageCard;
