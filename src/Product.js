import React from 'react'
import './ui.css'
import axios from "axios"
import bottle from "./components/bottle.jpg"
export default class Product extends React.Component{
constructor(){
  super()
  this.state = {
    product: {}
  }
}
componentDidMount = () => {
    axios.post('/api/getProduct/', {product: this.props.item})
    .then(res => this.setState({
        product: res.data[0]
    }, () => console.log(this.state.product)))
    .catch(err => console.log(err))
}
render(){
  return(
    <div className='container'>
      <div className="padding row">
        <div className="col-6">
        {this.state.product.img && (<img className= "product page pic" src = {"data:image/jpg;base64," + btoa(String.fromCharCode.apply(null, this.state.product.img.data.data))}/>)}
        </div>
        <div className="col-6">
          <h2>{this.props.item}</h2>
          <h3>{this.state.product.subtitle}</h3>
          <h5>{this.state.product.description}</h5>
        </div>
      </div>
    </div>
  )
}


}
