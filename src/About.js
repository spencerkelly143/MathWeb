import React from 'react';
import './ui.css'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Menu from "./components/Menu.js"
import Search from "./components/Search.js"
import ImagePaper from "./components/ImagePaper.js"
export default class About extends React.Component {

  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="paper about dropdown">
          </div>
        </div>
        <div className="row">
          <ImagePaper name="item 1"/>
          <ImagePaper name="item 1"/>
          <ImagePaper name="item 1"/>
          <ImagePaper name="item 1"/>
          <ImagePaper name="item 1"/>
          <ImagePaper name="item 1"/>
          <ImagePaper name="item 1"/>
          <ImagePaper name="item 1"/>
          <ImagePaper name="item 1"/>
          <ImagePaper name="item 1"/>
        </div>
        <div className="footer">
        </div>
      </div>
    )
  }
}
