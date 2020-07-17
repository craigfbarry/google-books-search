import React, { Component } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Input from "./components/Input";
import { Container, Row, Col } from "./components/Grid";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header/>  
      <Container>
        <Search/>
        <Input
        name="BookSearch"
        placeholder="Search For a Book"
        />
      </Container> 
    </div>
  );
}


export default App;
