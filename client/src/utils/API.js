import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {

// Gets all books from the Google books API.
    getBooks: function(query){
        console.log("ran query")
        return axios.get(BASEURL + query)
    },
    
// Gets all books from the database.
    getDatabaseBooks: function() {
        return axios.get("/api/books");
    },

// Deletes a book from the database.
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    },

// Saves a book to the database.
    saveBook: function(bookData) {
         return axios.post("/api/books", bookData);
    }
};