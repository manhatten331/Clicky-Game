import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/NavBar";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import friends from "./friends.json";

// const navbar = [
//     {
//         id: 1,
//         nav: "Clicky Game" 
//     },
//     {
//         id: 2,
//         nav: "Click an Image to begin!"
//     },
//     {
//         id: 3,
//         nav: "Score: " + 0 + " | Top Score: " + 0
//     }
// ]

class App extends Component {
    state = {
        friends,
        clickedFriends: [],
        score: 0
    };

    imageClick = event => {
        const currentCharacter = event.target.alt
        const characterClicked = this.state.clickedFriends.indexOf(currentCharacter) > -1;

        if (characterClicked) {
            this.setState({
                friends: this.state.friends.sort(function (a, b) {
                    return 0.5 - Math.random();
                }),
                clickedFriends: [],
                score: 0
            });

            alert("Try again");

        } else {
            this.setState({
                    friends: this.state.friends.sort(function (a, b) {
                        return 0.5 - Math.random();
                    }),
                    clickedFriends: this.state.clickedFriends.concat(currentCharacter),
                    score: this.state.score + 1
                },
                () => {
                    if (this.state.score === 10) {
                        alert("You win");
                        this.setState({
                            friends: this.state.friends.sort(function (a, b) {
                                return 0.5 - Math.random();
                            }),
                            clickedFriends: [],
                            score: 0
                        })
                    }
                }
            );
        }
    }

    // randomizeFriends = friend => {
    //     console.log(this.state.friends.length);
    //     for (let i = this.state.friends.length; i > -1; i++) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         const temp = this.state.friends[i];
    //         // this.state.friends[i] = this.state.friends[j];
    //         // this.state.friends[i] = temp;
    //         this.setState({ temp });
    //         return temp;
    //     }
    // }

    render() {
        return (
            <Wrapper>
                <Navbar score={this.state.score} />
                <Header />
                {this.state.friends.map(friend => (
                    <FriendCard
                        imageClick={this.imageClick}
                        key={friend.id}
                        image={friend.image}
                        name={friend.name}
                    />
                ))}
            </Wrapper>
        );
    }
}

export default App;