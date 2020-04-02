import React from 'react';
import './Line.css';

function C(props) {
  return (
    <span className={`textComponent code ${props.color}`}>{props.text}</span>
  )
}

class Line extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      components: [],
    }
    for (let i = 0; i < props.build.length; i++) {
      this.state.components.push(<C text={props.build[i].text} color={props.build[i].color}/>);
    }
  }
  render() {
    return <div className="line"> {this.state.components} </div>;
  }
}

export default Line;
