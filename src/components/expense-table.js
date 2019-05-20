import React, { Component } from 'react';

class ExpenseTable extends Component {

  dirtyP = trans => {
    const pp = [];
    for (let i = 0; i < trans.length; i++){
      pp.push('<p>{trans[i]}</p>');
    }
    return pp;

  }
  render() {
    const trans = this.props.data;

    return (
      <div>
        {this.dirtyP(trans)}
      </div>
    );
  }

}

export default ExpenseTable;
