import React from 'react';
import './TerminalReplica.css';
import lineData from '../lineData.js';
import { ScheduledSequence } from 'scheduled-sequence';

// how to get size of container:
// https://stackoverflow.com/questions/49058890/how-to-get-a-react-components-size-height-width-before-render

class TerminalReplica extends React.Component {
  constructor(props) {
    super(props);
    this.linesShown = 0;
    this.state = {
      lines: [],
    };
  }
  componentDidMount() {
    console.log("Mounted");
    this.animate();
  }
  async animate() {
    console.log("Animate!");
    const animationSequence = ScheduledSequence(splitSplits(lineData));
    const animationIterator = animationSequence.distribute();
    for await (const animationDetail of animationIterator) {
      this.addText(animationDetail);
    }
  }
  addText({ text, color }) {
    console.log("Add text");
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

// Helper
const splitSplits = lineData => {
  const result = [];
  for (let i = 0; i < lineData.length; i++) {
    const line = lineData[i];
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
    if (i < lineData.length - 1) {
      result.push({
        details: { text: "\n" },
        timeout: 0
      });
    }
  }
  return result;
};

export default TerminalReplica;
