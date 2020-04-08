import React from 'react';
import './FaqQuestion.css';


class FaqQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      height: null,
      styleClosed: {height: 'auto'},
    }
  }

  componentDidMount = () => {
    window.addEventListener('resize', this.resize);
    this.resize();
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.resize);
  }

  resize = () => {
    this.setState({
      open: false,
      styleClosed: { height: 'auto' }
    });
    this.setState({
      height: this.container.offsetHeight,
      styleClosed: { height: 0 }
    });
  }

  handleClick = e => {
    e.preventDefault();
    this.setState({open: !this.state.open});
  }

  render() {
    return (
      <div className="faq-question">
        <div className="faq-head" onClick={this.handleClick}>
          {this.props.question}
        </div>
        <div
          className="faq-body" style={(this.state.open) ? {height:this.state.height+'px'} : this.state.styleClosed} ref={el => (this.container = el)}>
          {this.props.answer}
        </div>
      </div>
    );
  }
}

export default FaqQuestion;
