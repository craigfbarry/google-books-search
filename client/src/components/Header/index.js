import React from "react";
import "./style.css";

function Header(){
    return(
        <header className="py-5 jumbotron-fluid">
            <h3>Google Books Search</h3>
            <p>Search for and Save Books of Interest</p>
        </header>
    );
}

export default Header;