import React from 'react'
import '../ui.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default class ImagePaper extends React.Component{

  render(){
    return(
      <div className="col-xl-3 col-lg-4">
        <div className="paper about product">
          <img className= "product image" />
          <h3 className="item title">{this.props.name}</h3>
          <h5 className="item subtitle">item subtitle</h5>
          <p className="muted item description">item description</p>
        </div>
      </div>
    )
  }
}
