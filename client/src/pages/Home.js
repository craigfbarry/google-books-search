import React, { useState } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Input from "../components/Input";
import { Container, Row, Col } from "../components/Grid";
import "../App.css";
import SearchButton from "../components/SearchButton";
import API from "../utils/API";
import { BookList, BookListItem } from "../components/BookList";

function Home() {

    const [books, setBooks] = useState([]);
    const [bookSearch,setBookSearch] = useState("");

    const handleInputChange = event => {
        const {value} = event.target;
        setBookSearch(value);
    }


    const handleFormSubmit = event => {
        event.preventDefault();
        API.getBooks(bookSearch)
          .then(res => {setBooks(res.data.items)
              console.log(res.data.items)
          })
          .catch(err => console.log(err));
    };

  return (
    <div className="App">
      <Header/>  
      <Container>
        <Search/>
          <div className="mb-5">
          <Row>
            <Col size="xs-8 sm-8">
              <Input
               name="BookSearch"
                value={bookSearch}
                onChange={handleInputChange}
                placeholder="Search For a Book Title"
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
          </div>
          <Row>
            <Col size="xs-12">
                <BookList>
                    {books.map(book => {
                        return (
                            <BookListItem
                                key={book.volumeInfo.id}
                                title={book.volumeInfo.title}
                                authors={book.volumeInfo.authors}
                                description={book.volumeInfo.description}
                                link={book.selfLink}
                                image={book.volumeInfo.imageLinks.thumbnail}
                            />
                        );
                    })}
                </BookList>
            </Col>       
          </Row>                      
      </Container> 
    </div>
  );
}


export default Home;
