import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

const DateButton = styled.button`
  color : white;
  border : 3px solid palevioletred;
  border-radius : 50%;
  background-color : transparent;
  width : 27px;
  height : 27px;
  margin : 10px;
  cursor : pointer;
  text-align : center;
`;

class MoneyTable extends React.Component {
  handleSubtractDay = () => {
    this.setState({date : this.state.date.subtract(1, 'day')});
  }

  handleAddDay = () => {
    this.setState({date : this.state.date.add(1, 'day')});
  }

  constructor(props){
    super(props);

    this.state = {
      date : moment(),
    }
  }

  render(){
    const {date} = this.state;

    return(
      <div className='MoneyTable'>
        <DateButton onClick={this.handleAddDay}>+</DateButton>
        <span>{date.format('DD.MM.YY')}</span>
        <DateButton onClick={this.handleSubtractDay}>-</DateButton>
      </div>
    );
  }
}

export default MoneyTable;
