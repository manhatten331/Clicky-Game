import React from "react";
import "./style.css";

function NavHeader(props) {
    return (
        <nav className="navbar">
            <ul>
                {/* {props.navbar.map(bar => ( */}
                    {/* <li key={bar.id}> */}
                        {/* {bar.nav} */}
                    <li>Clicky Game</li>
                    <li>Click an Image to Begin</li>
                    <li>Score: {props.score}</li>
                {/* ))} */}
            </ul>
        </nav>
    );
}

export default NavHeader;