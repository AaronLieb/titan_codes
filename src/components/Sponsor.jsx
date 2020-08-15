import React from 'react';
import './Sponsor.css';

export default class Sponsor extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="sponsor">
        <a href={this.props.href}>
          <img class="sponsor-image" src={this.props.src} />
        </a>
      </div>
    );
  }
}
