import React from "react";
import "./style.css";

const ImageCard = (props) => {
  return (
    <div className="card">
      <span onClick={() => {
        /* props.handleIncrement(props.id) */
        props.handleCharacterClick(props.id)
        /* props.shuffle(props.character)
        props.whenClicked(props.id) */
      }}>
        <img alt={props.name} src={props.image}/>
      </span>
    </div>
  );
}

export default ImageCard;
