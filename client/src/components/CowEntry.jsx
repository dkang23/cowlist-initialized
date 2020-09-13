import React from 'react';

class CowEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
    };
  }

  render() {
    return (
      <li
        value={this.props.cow.name}
        onClick={() => this.props.clickHandler(this.props.cow)}
      >
        {this.props.cow.name}
      </li>
    );
  }
}

export default CowEntry;
