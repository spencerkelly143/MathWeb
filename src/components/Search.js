import React from 'react'
import '../ui.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default class Search extends React.Component {
  render(){
    return(
      <div className="search row">
        <div className="col-3">
          <div className="button">
            <h4>Search</h4>
          </div>
        </div>
        <div className="col-9">
          <input className="searchBar"></input>
        </div>
      </div>
    )
  }

}
