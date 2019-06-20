import React from 'react';
import './ui.css'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function App() {
  const [rectClick, setRectClick] = React.useState(false)
  const [cClick, setCClick] = React.useState(false)
  return (
    <div>
    <div className='container-fluid'>
      <div className='header row'>
        <div className='col'>
          <div className='header paper'>
            <h1>Text.</h1>
          </div>
        </div>
      </div>
    </div>
    <div className='container-fluid'>
    <div className='row'>
    <div className="col-3">
      <div className="paper side">
        <div className="header">
          <h1>Menu</h1>
        </div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
      </div>
    </div>
    <div className = 'col-6'>
      <div className='row'>
        <div className="col-6">
          <div className="paper top">
          </div>
        </div>
        <div className="col-6">
          <div className="paper top"></div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="body paper">
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
}

export default App;
