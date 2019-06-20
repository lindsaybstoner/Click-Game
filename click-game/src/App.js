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
		idsClicked: [],
	}

	getId = (id) => {
		let imgClicked = this.state.idsClicked.concat(id);
		console.log(imgClicked)

		this.setState({ idsClicked : imgClicked });
	};

	// handleIncrement increases this.state.count by 1
	handleIncrement = (id) => {

		if (!this.state.idsClicked.includes(id)) {
			this.setState({ currentScore: this.state.currentScore + 1 });
			if (this.state.currentScore >= this.state.highestScore) {
				this.setState({ highestScore: this.state.currentScore });
			}
		} else {
			this.setState({ currentScore: 0 });
		}
		
	};

	/* handleHighestScore = () => {
		if (this.state.currentScore >= this.state.highestScore) {
			this.setState({ highestScore: this.state.currentScore });
		}
	} */

	shuffle = (id) => {
		let characters = this.state.characters;
		
		//update with random array
		characters.sort(function (a, b) { return 0.5 - Math.random() });
		this.setState({ characters });
	}


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
							handleIncrement={this.handleIncrement}
							handleHighestScore={this.handleHighestScore}
							shuffle={this.shuffle}
						/>
					))}
				</Main>
				<Footer />
			</>
		);
	}
}




export default App;
