import React from 'react';
import './Window.css';
import Line from './Line.js';
import lines from '../lines.js';

class Window extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      linesShown: 0,
      lines: [],
    };
  }
  componentDidMount() {
    this.animate();
  }
  async animate() {
    for (let line in lines) {
      this.addLine(line);
      console.log(this.state.lines)
    }
  }
  /*
  Add animation of components / editing of lines
  */
  addLine(line) {
    if (this.state.linesShown < lines.length) {
      this.state.lines.push(<Line build={lines[line]} />);
      this.setState({linesShown: this.state.linesShown + 1});
    } else {
      newlines = this.state.lines.slice();
      newlines.shift();
      newlines.push(<Line build={lines[line]} />);
      this.setState({lines: newlines});
    }
  }
  render() {
    return (
      <div className="window">
        <div className="window-top">
          <div className="dot red ml-3"></div>
          <div className="dot yellow"></div>
          <div className="dot green"></div>
        </div>
        <div className="window-body">
          {this.state.lines}
        </div>
      </div>
    );
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default Window;
