import React from "react";
import "./style.css";

const ImageCard = (props) => {
  return (
    <div className="card">
      <span onClick={() => {
        props.handleIncrement(props.id)
        /* props.getId(props.id) */
        props.shuffle(props.character)
        props.whenClicked()
      }}>
        <img alt={props.name} src={props.image}/>
      </span>
    </div>
  );
}

export default ImageCard;
