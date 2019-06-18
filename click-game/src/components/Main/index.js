import React, { Component } from 'react';
import ImageCard from "../ImageCard";
import "./style.css";
import characters from "../../characters.json";

class Main extends Component {
    // Setting this.state.characters to the characters json array
    state = {
      characters
    };

    getId = (id) => {
      
      let idsClicked =[];

      idsClicked.push(id);

      console.log(idsClicked)
    };
  
    // Map over this.state.characters and render a FriendCard component for each friend object
    render() {
      return (
        <main>
          {this.state.characters.map(character => (
            <ImageCard
              id={character.id}
              key={character.id}
              name={character.name}
              image={character.image}
              getId={this.getId}
            />
          ))}
        </main>
      );
    }
  }
  
  export default Main;