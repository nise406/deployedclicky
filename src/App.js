import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import FriendCard from "./components/FriendCard";
import Footer from "./components/Footer";
import cards from "./cards.json";
import "./App.css";

class App extends Component {
  state = {
    cards,
    clickedcards: [],
    score: 0
  };

  imageClick = event => {
    const currentcards = event.target.alt;
    const cardsAlreadyClicked =
      this.state.clickedcards.indexOf(currentcards) > -1;

    if (cardsAlreadyClicked) {
      this.setState({
        cards: this.state.cards.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedcards: [],
        score: 0
      });
        alert("You lose. Play again?");

    } else {
      this.setState(
        {
          cards: this.state.cards.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedcards: this.state.clickedcards.concat(
            currentcards
          ),
          score: this.state.score + 1
        },
        () => {
          if (this.state.score === 12) {
            alert("Yay! You Win!");
            this.setState({
              cards: this.state.cards.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedcards: [],
              score: 0
            });
          }
        }
      );
    }
  };

  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.cards.map(cards => (
            <FriendCard
              imageClick={this.imageClick}
              id={cards.id}
              key={cards.id}
              image={cards.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;