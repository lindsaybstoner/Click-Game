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
		clicked: false,
	}

/* 	getId = (id) => {
		let imgClicked = this.state.idsClicked.concat(id);
		console.log(imgClicked)

		this.setState({ idsClicked : imgClicked });
	}; */

	// handleIncrement increases this.state.count by 1
	handleIncrement = (id) => {
		this.setState({ clicked: true });
		
		if (this.state.clicked) {
			this.setState({ currentScore: this.state.currentScore + 1, heading: "You guessed correctly!" });

			if (this.state.currentScore > this.state.highestScore) {
				this.setState({ highestScore: this.state.currentScore });
			}
			
		} else {
			this.setState({ idsClicked: [], currentScore: 0, heading: "You guessed incorrectly!" });
			/* console.log(this.state.idsClicked); */
		}
		
	};

	shuffle = () => {
		let characters = this.state.characters;
		
		//update with random array
		characters.sort(function (a, b) { return 0.5 - Math.random() });
		this.setState({ characters });
	}


	render() {
		console.log(this.state.idsClicked);
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
							handleIncrement={this.handleIncrement}
							handleHighestScore={this.handleHighestScore}
							shuffle={this.shuffle}
							clicked={this.clicked}
						/>
					))}
				</Main>
				<Footer />
			</>
		);
	}
}


export default App;
