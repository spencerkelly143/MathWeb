import React from 'react'
import '../ui.css'

export default class Menu extends React.Component {
  constructor(props) {
    super(props)
    let setup = this.props.item.map( p => [p, p === this.props.item[0] ? "selected" : "unselected"]);
    this.state = {
      data: setup
    }
  }
  handleClick = (e) => {
    let setup = this.props.item.map( p => [p, p === e.target.textContent ? "selected" : "unselected"]);
    this.setState({data: setup});
  }
  render(){
    return(
      <div className="paper side">
        <div className="header">
          <h1>{this.props.header}</h1>
        </div>
        {this.state.data.map( p =>
        <div className={`item ${p[1]}`} key={p[0]} onClick={this.handleClick}>
          <h2 className="menu-text">{p[0]}</h2>
        </div>)}
      </div>
    )
  }
}
