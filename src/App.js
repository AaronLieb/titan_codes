import React from 'react';
import logo from './logo.svg';
import './App.css';
import Window from './components/Window.js';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img className="navbar-brand" src="logo192.png" width="40" />
            TitanCodes
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#"> Home </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"> FAQ </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"> Sponsors </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container-fluid">
        <div className="mt-5" />
        <Window />
        <div style={{marginTop: 150 + 'px'}} />
      </div>
      <footer className="bg-light mt-4">
        <div className="container-fluid py-3">
          <div className="row">
            <div className="col-1">
              Footer
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
