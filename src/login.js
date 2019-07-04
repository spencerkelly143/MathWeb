import React from 'react'
import './ui.css'

export default class Login extends React.Component{
  constructor(){
    super();
    this.state={
      usr: undefined,
      pass: undefined,
    }
  }

  handleInput = (e) => {
    if(e.target.id === "usr") {
    this.setState({
      usr: e.target.value,
    }, () => console.log(this.state))
  } else if (e.target.id === "pass"){
    this.setState({
      pass: e.target.value,
    }, () => console.log(this.state))
  }
  }


    handleClick = () => {
      localStorage.setItem('username', this.state.usr);
      localStorage.setItem('password', this.state.pass);
      this.props.handleLogIn(this.state.usr, this.state.pass)
    }

  render(){
    return(
      <div className="container" style={{minHeight: "50vh"}}>
        <div className="padding row">
          <h1>Login</h1>
        </div>
        <div className="padding row">
          <div className="col-4"></div>
          <div className="col-4">
              <h5>Username</h5>
              <input placeholder="username" style={{width: "100%"}} id="usr" onChange={this.handleInput} />
              <h5>Password</h5>
              <input placeholder="password" style={{width: "100%"}} id="pass" onChange={this.handleInput}/>
              <div className="button" style={{height: "30px"}}onClick={this.handleClick}>
              <h4>Login</h4>
              </div>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    )
  }
}
