import React from "react";
import "./style.css";

function NavHeader(props) {
    return (
        <nav className="navbar">
            <ul>
                {props.navbar.map(bar => (
                    <li key={bar.id}>
                        {bar.nav}
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default NavHeader;