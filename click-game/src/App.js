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
		let idsClicked = [];
		idsClicked.push(id);
		console.log(idsClicked)

		this.setState({});
	};

	// handleIncrement increases this.state.count by 1
	handleIncrement = () => {
		// We always use the setState method to update a component's state
		this.setState({ currentScore: this.state.currentScore + 1 });

		/* if (this.state.currentScore >= this.state.highestScore) {
			this.setState({ highestScore: this.state.currentScore });
		} */
	};

	handleHighestScore = () => {
		if (this.state.currentScore >= this.state.highestScore) {
			this.setState({ highestScore: this.state.currentScore });
		}
	}

	shuffle = (characters) => {
		var currentIndex = this.state.characters.length, temporaryValue, randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {

			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = characters[currentIndex];
			characters[currentIndex] = characters[randomIndex];
			characters[randomIndex] = temporaryValue;
		}

		return this.setState({ characters });
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
