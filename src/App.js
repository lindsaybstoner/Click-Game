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

	handleCharacterClick = (id) => {


		console.log(id);

		let newCharArray = this.shuffle(this.state.characters);

		for (let i = 0; i < newCharArray.length; i++) {
			if (newCharArray[i].id === id) {
				if (newCharArray[i].clicked) {
					this.handleIncorrectGuess()
				}
				else {
					newCharArray[i].clicked = true;
					this.handleCorrentGuess(newCharArray)
				}

			}
		}

	};

	handleIncorrectGuess = () => {
		this.setState({
			characters: characters,
			currentScore: 0,
			heading: "You guessed incorrectly!"
		});
	}

	handleCorrentGuess = (characterArray) => {
		let newCurrentScore = this.state.currentScore + 1;

		let newHighScore = this.state.highestScore;

		if (newCurrentScore > this.state.highestScore) {
			newHighScore = newCurrentScore;
		}

		this.setState({
			characters: characterArray,
			currentScore: newCurrentScore,
			highestScore: newHighScore,
			heading: "You guessed correctly!"
		});
	}

	shuffle = (arr) => {
		for (let i = arr.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[arr[i], arr[j]] = [arr[j], arr[i]];
		}
		return arr;
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
							whenClicked={this.whenClicked}
							handleCharacterClick={this.handleCharacterClick}
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
