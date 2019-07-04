import React from 'react'
import ImageUpload from './ImageUpload.js'
import axios from 'axios'
import './ui.css'

export default class Admin extends React.Component {
  constructor(){
    super();
    this.state = {
      title: '',
      subtitle: '',
      description: '',
      image: null,
    }}

  submit = () => {
    let formData = new FormData()
    formData = this.state.image;
    formData.set("title", this.state.title)
    formData.set("subtitle", this.state.subtitle)
    formData.set("description", this.state.description)
    this.setState({image: formData})
    fetch("api/newproduct", {
      method: 'post',
      body: this.state.image,
    })
    .then(res => {
      if(!res.ok) throw res;
      return res.json();
    })
    .then(image => {
      this.setState({image})
    })
  }

  handleChange = (e) => {
    switch(e.target.id) {
      case "title":
        this.setState({title: e.target.value});
        break;
      case "subtitle":
        this.setState({subtitle: e.target.value});
        break;
      case "description":
        this.setState({description: e.target.value});
        break;
    }
  }

  handleImage = (image) => {
    const errs = []
    let files = Array.from(image)
    const formData = new FormData()
    const types = ['image/png', 'image/jpeg', 'image/gif']

    files.forEach((file, i) => {
      if (types.every(type => file.type !== type)){
          errs.push(`${file.type} is not supported`)
      }
      if (file.size > 150000) {
          errs.push(`'${file.name}' is too large, please pick a smaller file`)
        }
      formData.append(i, file)
    })
    this.setState({image: formData})
  }

  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="paper about dropdown">
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h3>Product Name</h3>
            <input id="title" onChange={this.handleChange}/>
          </div>
          </div>
          <div className="row">
          <div className="col-12">
            <h3>Subtitle</h3>
            <input id="subtitle" onChange={this.handleChange}/>
          </div>
          </div>
          <div className="row">
          <div className="col-12">
            <h3>Description</h3>
            <input className="description" id="description" onChange={this.handleChange}/>
          </div>
          </div>
          <ImageUpload title={this.state.title} subtitle={this.state.subtitle} handleImage={this.handleImage}/>
          <div className="button" onClick={this.submit}>
            <h4>Submit</h4>
          </div>
          <div className="footer" />
      </div>
    )
  }
}
