import React from "react";
import "./style.css";

function Header(){
    return(
        <header className="py-5 jumbotron-fluid mb-5">
            <h3>Google Books Search</h3>
            <h5 className="text">Search for and Save Books of Interest</h5>
        </header>
    );
}

export default Header;