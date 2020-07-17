import React, { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Input from "./components/Input";
import { Container, Row, Col } from "./components/Grid";
import "./App.css";
import SearchButton from "./components/SearchButton";
import API from "./utils/API";

function App() {

    const [books, setBooks] = useState([]);
    const [bookSearch,setBookSearch] = useState("");

    const handleInputChange = event => {
        const {value} = event.target;
        setBookSearch(value);
        console.log(value)
    }


    const handleFormSubmit = event => {
        event.preventDefault();
        API.getBooks(BookSearch)
          .then(res => setBooks(res.data))
          .catch(err => console.log(err));
    };

  return (
    <div className="App">
      <Header/>  
      <Container>
        <Search/>
          <Row>
            <Col size="xs-8 sm-8">
              <Input
              value={bookSearch}
                onChange={handleInputChange}
                name="BookSearch"
                placeholder="Search For a Book"
                />
            </Col>
            <Col size="xs-3 sm-2">
              <SearchButton
                onClick={handleFormSubmit}
                type="success"
                className="input-lg"
              >
                Search
              </SearchButton>
                
                
            </Col>
          </Row>
      </Container> 
    </div>
  );
}


export default App;
