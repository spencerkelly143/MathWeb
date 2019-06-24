import React from 'react'
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom'
import Home from './Home.js'
import About from './About.js'
import App from './App.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './ui.css'
import Menu from "./components/Menu.js"

 class Router extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      page: this.props.history.location.pathname.replace(/\//g, '')
    };
  }

  handleMenu = (e) => {
      this.setState({page: e});
      this.props.history.push(`/${e}`)
  }

  render(){
  return(
    <div>
    <App />
    <div className='scrollable container-fluid'>
      <div className='row'>
        <div className="col-3">
          <Menu header="Menu" item={["Home", "About", "Next"]} originalPath={this.state.page} handleMenu={this.handleMenu}/>
        </div>
        <div className = 'col-xl-8 col-8'>
            <div className="app">
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/Home" component={Home}/>
                <Route path="/About" component={About} />
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
