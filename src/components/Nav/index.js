import React from 'react';
import "./style.css";

const Nav = (props) => {
    return (
        <nav>
            <ul>
                <li>Clicky Game</li>
                <li>{props.heading}</li>
                <li>Score: {props.currentScore} | Top Score: {props.highestScore}</li>
            </ul>
        </nav>
    )
}

export default Nav;