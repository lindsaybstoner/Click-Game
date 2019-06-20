import React, { Component } from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';
import ImageCard from './components/ImageCard';
import Footer from './components/Footer';
import "./style.css";
import characters from "./characters.json";


class App extends Component {
  state = {
    characters,
    currentScore: 0,
    highestScore: 0,
    heading: '',
  }

  getId = (id) => {
	let idsClicked =[];
	idsClicked.push(id);
	console.log(idsClicked)
  };

  render() {
    return (
      <>
        <Nav
          currentScore={this.state.currentScore}
          highestScore={this.state.highestScore}
          heading={this.state.heading || "Click an image to begin!"}
        />
        <Header />
        <Main>
          {this.state.characters.map(character => (
            <ImageCard
              id={character.id}
              key={character.id}
              name={character.name}
              image={character.image}
              getId={this.getId}
            />
          ))}
        </Main>
        <Footer />
      </>
    );
  }
}




export default App;
