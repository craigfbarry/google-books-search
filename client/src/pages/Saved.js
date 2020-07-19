import React, { useEffect,useState } from "react";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import { BookList, BookListItem } from "../components/BookList";
import DeleteButton from "../components/DeleteButton";


function Saved() {

  const [databaseBooks, setDatabaseBooks] = useState([]);

  useEffect(() => {
    loadBooks()
  }, [])


  function loadBooks() {
    API.getDatabaseBooks()
      .then(res => {setDatabaseBooks(res.data)
        console.log(res.data)
      })
      .catch(err => console.log(err));
    }

  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
    }



    return (
        <div>
          <Container>
            <div className="d-flex justify-content-center my-5">
                <Row>
                    <h3>Saved Searches</h3>
                </Row>
            </div>
            <Row>
                <Col size="xs-12">
                    <BookList>
                        {databaseBooks.map(book => {
                            return (
                              <div>
                                <BookListItem
                                    key={book._id}
                                    title={book.title}
                                    authors={book.authors}
                                    description={book.description}
                                    link={book.link}
                                    image={book.image}                                    
                                />
                                <DeleteButton onClick={() => deleteBook(book._id)} />
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

export default Saved;