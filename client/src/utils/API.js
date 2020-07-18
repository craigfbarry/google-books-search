import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
    getBooks: function(query){
        console.log("ran query")
        return axios.get(BASEURL + query)
    }
};