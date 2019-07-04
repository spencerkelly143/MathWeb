import React from 'react'
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom'
import Home from './Home.js'
import About from './About.js'
import App from './App.js'
import Login from './login.js'
import Admin from './Admin.js'
import Product from './Product'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './ui.css'
import Menu from "./components/Menu.js"

 class Router extends React.Component {
  constructor(props){
    super(props);
    let init_usr = localStorage.getItem('username') || '';
    let init_pass = localStorage.getItem('password') || '';
    this.state = {
      page: this.props.history.location.pathname.replace(/\//g, ''),
      usr: init_usr,
      pass: init_pass,
    };
    console.log(localStorage.getItem('username'))
  }
  isLoggedIn = () =>{
    let isLoggedIn;
    if(this.state.usr === "username" && this.state.pass === "password"){
      return true;
    } else {
      return false;
    }
  }

  handleLogIn = (usr, pass) => {
    this.setState({
      usr: usr,
      pass: pass
    }, () => console.log(this.state))
    // localStorage.setItem('username', this.state.usr);
    // localStorage.setItem('password', this.state.pass);
  }

  handlePageChange = (e) => {
      this.setState({page: e.replace(/\//g, '')});
      this.props.history.push(`/${e}`)
  }

  render(){
  return(
    <div>
    <App />
    <div className='scrollable container-fluid'>
      <div className='row'>
        <div className="col-3">
          <Menu header="Menu" item={["Home", "About"]} originalPath={this.state.page} handleMenu={this.handlePageChange}/>
        </div>
        <div className = 'col-xl-8 col-8'>
            <div className="app">
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/Home" component={Home}/>
                <Route exact path="/About" render={(props) => <About {...props} handleClick={this.handlePageChange} />}/>
                <Route path = "/About/Product/" render={(props) => <Product {...props} item={this.state.page.replace("AboutProduct","")} />} />
                <Route path = "/admin-lv" render = {(props) => (this.isLoggedIn() ? (<Admin />) : (<Login {...props} handleLogIn={this.handleLogIn} />))} />
              </Switch>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}
}

export default withRouter(Router)
