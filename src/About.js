import React from 'react';
import './ui.css'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Menu from "./components/Menu.js"
import Search from "./components/Search.js"
import ImagePaper from "./components/ImagePaper.js"


export default class About extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      products: []
    }
  }
  componentDidMount() {
    fetch('/api/getItems').then(res => res.json())
    .then(products => this.setState({products}, () => console.log(this.state)))
    .catch(err => console.log(err));
  }

  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="paper about dropdown">
        </div>
        </div>
        <div className="row">
        {this.state.products.map( p =>
          <ImagePaper name={p["product"]} subtitle={p["subtitle"]} description={p["description"]} image={`data:${p["img"]["contentType"]};base64,`+btoa(String.fromCharCode.apply(null,p["img"]["data"]["data"]))} key={p["product"]} handleClick={this.props.handleClick}/>
        )}
        </div>
        <div className="footer">
        </div>
      </div>
    )
  }
}
