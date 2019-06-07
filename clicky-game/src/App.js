import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/NavBar";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import friends from "./friends.json";

const navbar = [
    {
        id: 1,
        nav: "Clicky Game" 
    },
    {
        id: 2,
        nav: "Click an Image to begin!"
    },
    {
        id: 3,
        nav: "Score: " + 0 + " | Top Score: " + 0
    }
]

class App extends Component {
    state = {
        friends
    };

    randomizeFriends = id => {
        let i = id.length 
        for (; i > 0; i++) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = id[i];
            id[i] = id[j];
            id[i] = temp;
            return temp;
        }
    }

    render() {
        return (
            <Wrapper>
                <Navbar navbar={navbar} />
                <Header  />
                {this.state.friends.map(friend => (
                    <FriendCard 
                    randomizeFriends={this.randomizeFriends}
                    key={friend.id}
                    image={friend.image}
                    />
                ))}
            </Wrapper>
        );
    }
}

export default App;