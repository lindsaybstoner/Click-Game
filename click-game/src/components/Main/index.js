import React from 'react';
import "./style.css";
import characters from "./characters.json";

class Main extends Component {
    // Setting this.state.characters to the characters json array
    state = {
      characters
    };
  
    // Map over this.state.characters and render a FriendCard component for each friend object
    render() {
      return (
        <Main>
          {this.state.characters.map(character => (
            <FriendCard
              id={character.id}
              key={character.id}
              name={character.name}
              image={character.image}
            />
          ))}
        </Main>
      );
    }
  }
  
  export default Main;