import React, { useState } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Input from "../components/Input";
import { Container, Row, Col } from "../components/Grid";
import "../App.css";
import SearchButton from "../components/SearchButton";
import SaveButton from "../components/SaveButton";
import API from "../utils/API";
import { BookList, BookListItem } from "../components/BookList";

function Home() {

  //React hooks for handling input from the user and getting data from the API
  
    const [books, setBooks] = useState([]);
    const [bookSearch,setBookSearch] = useState("");

  //OnChange handler  
    const handleInputChange = event => {
        const {value} = event.target;
        setBookSearch(value);
    }

  //Submit button handler
    const handleFormSubmit = event => {
        event.preventDefault();
        API.getBooks(bookSearch)
          .then(res => {setBooks(res.data.items)
              console.log(res.data.items)
          })
          .catch(err => console.log(err));
    }

    function saveBook(data) {
      console.log(data);
      API.saveBook({
        title:data.volumeInfo.title,
        authors:data.volumeInfo.authors,
        description:data.volumeInfo.description,
        link:data.volumeInfo.infoLink,
        image:data.volumeInfo.imageLinks.thumbnail
      })
        .then(alert("Saved to Database"))
        .catch(err => console.log(err));
      }



  return (
    <div className="App">
      <Header/>  
      <Container>
        <Search/>
          <div className="mb-5">
          <Row>
            <Col size="xs-2 sm-2"></Col>
            <Col size="xs-6 sm-6">
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
                          <div className="mb-5 mt-1">
                            <Container>
                                <BookListItem
                                    key={book.volumeInfo.id}
                                    title={book.volumeInfo.title}
                                    authors={book.volumeInfo.authors}
                                    description={book.volumeInfo.description}                                    
                                    image={book.volumeInfo.imageLinks.thumbnail}
                                />
                                
                                <a rel="noreferrer noopener" target="_blank" href={book.volumeInfo.infoLink} className="btn bg-warning mt-3">
                                    View
                                </a>
                                <SaveButton onClick={() => saveBook(book)} />
                            </Container>            
                          </div>
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
