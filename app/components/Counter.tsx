/*
  has own module and render will mount once
*/
import React from 'react';

let counter = 0;

class Counter extends React.PureComponent {
  handleAddButtonClick = () => {
    counter += 1;
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <p>Count is: {counter}</p>
        <button onClick={this.handleAddButtonClick}>Add</button>
      </div>
    );
  }
}

export default Counter;