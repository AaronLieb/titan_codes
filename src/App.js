import React from 'react';
import logo from './logo.svg';
import './App.css';

class Text extends React.Component {
  constructor(props) {
    super(props);
    this.text = props.text;
    this.color = props.color;
  }
  render() {
    return (
      <span className={`code ` + `${this.color}`}> {this.text} </span>
    );
  }
}

class Window extends React.Component {
  render() {
    return (
      <div className="window">
        <div className="window-top d-flex">
          <div className="dot red ml-3"></div>
          <div className="dot yellow"></div>
          <div className="dot green"></div>
        </div>
        <div className="window-body d-flex">
          <ul>
            <li className="mt-3">
              <Text color="green" text="aaronlieberman" />
              <Text color="white" text=":" />
              <Text color="blue" text="~/Code/web/react/titan_codes" />
              <Text color="white" text="$ " />
            </li>
            <Text color="comment" text="// This is a comment" />
            <Text color="base" text="Base2" />
          </ul>
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img className="navbar-brand" src="logo192.png" width="40" />
            TitanCodes
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
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
        <Window />
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
