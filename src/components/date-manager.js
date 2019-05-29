import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

const DateButton = styled.button`
  color : white;
  border : 2px solid palevioletred;
  border-radius : 50%;
  background-color : transparent;
  width : 31px;
  height : 31px;
  margin : 10px;
  cursor : pointer;
  text-align : center;
`;

class DateManager extends React.Component {
  handleSubtractDay = () => {
    const date = this.state.date.subtract(1, 'day');
    this.setState({date : date});
    this.props.dateChange(date);
  }

  handleAddDay = () => {
    const date = this.state.date.add(1, 'day');
    this.setState({date : date});
    this.props.dateChange(date);
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
      <div className='DateManager'>
        <DateButton onClick={this.handleSubtractDay}>-</DateButton>
        <span>{date.format('DD.MM.YY')}</span>
        <DateButton onClick={this.handleAddDay}>+</DateButton>
      </div>
    );
  }
}

export default DateManager;
