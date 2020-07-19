import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Wrapper from "./components/Wrapper"
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Saved from "./pages/Saved"
import "./App.css";


function App() {

  return (
      <Router>
          <div>
            <Nav/>
              <Wrapper>
                <Route exact path="/" component={Home} />
                <Route exact path="/Saved" component={Saved} />
              </Wrapper>
          </div>
      </Router>    
  );
}


export default App;
