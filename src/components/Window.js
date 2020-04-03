import React from 'react';
import './Window.css';
import lineData from '../lineData.js';

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
    const animationSequence = splitSplits(lineData);
    const animationIterator = distributeAnimationSequence(animationSequence);
    for await (const animationDetail of animationIterator) {
      this.addText(animationDetail);
      //console.log(animationDetail);
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

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const splitSplits = lineData => {
  const result = [];
  for (let line of lineData) {
    for (let phrase of line) {
      if (phrase.split !== undefined) {
        phrase.text.split("")
          .forEach(char => result.push({ text: char, time: phrase.split, color: phrase.color }));
      } else {
        result.push(phrase);
      }
    }
      result.push({ text: "\n", time: 0 });
    }
  return result;
};

async function* distributeAnimationSequence(animationSequence) {
  let i = 1;
  while (i < animationSequence.length) {
    await sleep(animationSequence[i - 1].time);
    yield animationSequence[i - 1];
    i++;
  }
}

export default Window;
