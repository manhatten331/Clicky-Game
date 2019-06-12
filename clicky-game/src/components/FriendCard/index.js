import React from "react";
import "./style.css";

function FriendCard (props) {
    
    return (
        <div className="img-container">
            <img onClick={props.imageClick} 
            className="clickImg" src={props.image} key={props.id} alt={props.name}></img>
        </div>
    );
}

export default FriendCard;