import React from 'react'
import '../ui.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import bottle from "./bottle.jpg"

export default class ImagePaper extends React.Component {
  handleSelect = () => {
    this.props.handleClick(`About/Product/${this.props.name}`)
  }
  render(){
    let image = this.props.image || bottle;
    return(
      <div className="col-xl-4 col-lg-4">
        <div className="paper about product" onClick={this.handleSelect}>
          <img className= "product image" src={image}/>
          <h3 className="item title">{this.props.name}</h3>
          <h5 className="item subtitle">{this.props.subtitle}</h5>
        </div>
      </div>
    )
  }
}
