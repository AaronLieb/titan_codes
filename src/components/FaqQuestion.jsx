import React from 'react';
import './FaqQuestion.css';

class FaqQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
    // this.targetRef = React.useRef();
  }
  handleClick = e => {
    e.preventDefault();
    this.setState({open: !this.state.open});
  }
  render() {
    // const height = this.targetRef.current.offsetHeight;
    // console.log(height)
    let styleOpen = {height: 250 + 'px'};
    return (
      <div className="faq-question">
        <div className="faq-head" onClick={this.handleClick}> {this.props.question} </div>
        <div className="faq-body" style={(this.state.open) ? styleOpen : styleClosed }> {this.props.answer} </div>
      </div>
    );
  }
}

const styleClosed = {height: 0 + 'px'};

export default FaqQuestion;
