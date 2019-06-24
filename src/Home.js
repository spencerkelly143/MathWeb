import React from 'react';
import './ui.css'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Menu from "./components/Menu.js"
import Search from "./components/Search.js"

export default class Home extends React.Component{

  render(){
    return(
      <div>
      <div className='row'>
        <div className="col-11">
          <div className="paper top">
            <h1 className="title">Lorem Ipsum</h1>
            <h3>Euismod in pellentesque massa placerat duis ultricies lacus sed turpis. Volutpat consequat mauris n.</h3>
          </div>
        </div>
        <div className="col-1">
          <div className="paper top sideBar">
          </div>
        </div>
      </div> {/* end of row*/}
      <div className="row">
        <div className="col-lg-4">
          <div className="body paper main">
            <div className="body paper header">
              <h2>Box 1.</h2>
            </div>
            <h5>accumsan sit amet nulla facilisi morbi tempus iaculis. Eu turpis egestas pretium aenean. Ac turpis egestas sed tempus. Eget dolor morbi non arcu risus quis</h5>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="body paper main">
            <div className="body paper header">
              <h2>Box 2.</h2>
            </div>
            <h5> nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
             ut aliquip</h5>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="body paper main">
            <div className="body paper header">
              <h2>Box 3.</h2>
            </div>
            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim</h5>
          </div>
        </div>

      </div>
      </div>

    )
  }
}
