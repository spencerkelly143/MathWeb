import React from 'react';
import './ui.css'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Menu from "./components/Menu.js"
import Search from "./components/Search.js"
import Home from "./Home.js"
import About from "./About.js"
import { TransitionGroup, CSSTransition } from "react-transition-group";
// import Main from "./Main.js"

class App extends React.Component {

  render(){
  return (
        <div className='main header paper'>
          <div className='header row'>
            <div className='col-9'>
              <h1>Main Website Big Title.</h1>
            </div>
            <div className="col-3">
              <Search />
            </div>
          </div>
        </div>


  );
}
}

export default App;
