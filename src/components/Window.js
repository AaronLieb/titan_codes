import React from 'react';
import './Window.css';
import lineData from '../lineData.js';
import { ScheduledSequence } from 'scheduled-sequence';

// how to get size of container:
// https://stackoverflow.com/questions/49058890/how-to-get-a-react-components-size-height-width-before-render

class Window extends React.Component {
  constructor(props) {
    super(props);
    this.linesShown = 0;
    this.state = {
      lines: [],
    };
  }
  componentDidMount() {
    this.animate();
  }
  async animate() {
    const animationSequence = ScheduledSequence(splitSplits(lineData));
    const animationIterator = animationSequence.distribute();
    for await (const animationDetail of animationIterator) {
      this.addText(animationDetail);
    }
  }
  addText({ text, color }) {
    const className = `textComponent ${color}`;
    let nextLine = text === "\n"
      ? <br></br>
      : <span className={className}>{text}</span>;
    this.setState({ lines: this.state.lines.concat(nextLine) });
  }
  render() {
    return (
      <div className="window">
        <div className="window-top">
          <div className="dot red"></div>
          <div className="dot yellow"></div>
          <div className="dot green"></div>
        </div>
        <div className="window-body">
          {this.state.lines}
          <span className="textComponent base blink"> █</span>
        </div>
      </div>
    );
  }
}

const splitSplits = lineData => {
  const result = [];
  for (let line of lineData) {
    for (let phrase of line) {
      if (phrase.split !== undefined) {
        phrase.details.text.split("")
          .forEach(char => result.push({
            details: { text: char, color: phrase.details.color },
            timeout: phrase.split
          }));
      } else {
        result.push(phrase);
      }
    }
    result.push({
      details: { text: "\n" },
      timeout: 0
    });
  }
  return result;
};

export default Window;
