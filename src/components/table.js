import React, { Component } from 'react';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: props.data,
    };
  }

  render() {
    return (
      <table></table>
    );
  }

}

export default Table;
