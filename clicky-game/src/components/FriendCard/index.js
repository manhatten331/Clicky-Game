import React from "react";
import "./style.css";

function FriendCard (props) {
    return (
        <div className="img-container">
            <img className="clickImg" src={props.image}></img>
            <span onClick={() => props.randomizeFriends(props.id)}>
            </span>
        </div>
    );
}

export default FriendCard;