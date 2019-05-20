import React, {Component} from 'react';
import styled from 'styled-components';
import Expense from './expense.js';
import Income from './income.js';
import Table from './table.js';
import moment from 'moment';
import {findLastIndex} from 'lodash';


const Nav = styled.nav`
  display: flex;
  font-size: 25px;
  padding: 14px 0 15px;
  justify-content: center;
`;
const Link = styled.span`
  cursor: pointer;
  color: white;
  margin: 0 8px;
  border-bottom: ${({selected}) => (selected ? '2px solid palevioletred' : 'none')};
`;

class InOutInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navSelected : 'income',
      transactioins : [],
    }
  }

  handleNavClick = event => {
    this.setState({navSelected : event.target.getAttribute('name')});
  }

  handleSubmit = (sum, cat) => {
    const {date: TodayDate} = this.props;
    const {transactioins} = this.state;
    const newTransaction = {
      date: TodayDate.format('DD.MM.YYYY'),
      cat,
      sum,
    };
    const index = findLastIndex(transactioins, ({date}) => {
      const transaction = moment(date, 'DD.MM.YYYY');
      return(
        TodayDate.isBefore(transaction, 'day') ||
        TodayDate.isSame(transaction, 'day')
      );
    });

    const newTransactions = [...transactioins];
    newTransactions.splice(
      index === -1 ? transactioins.length : index,
      0,
      newTransaction,
    );
    console.log(newTransactions);
    this.setState({transactioins: newTransactions});
  }

  render(){
    const {navSelected} = this.state;

    return(
      <div className='InOutInput'>
        <Nav>
          <Link
            name='income'
            onClick={this.handleNavClick}
            selected={navSelected === 'income'}
          >
            Income
          </Link>
          <Link
            name='expense'
            onClick={this.handleNavClick}
            selected={navSelected === 'expense'}
          >
            Expense
          </Link>
        </Nav>
        {navSelected === 'income' ? (
          <Income onSubmit={this.handleSubmit} />
        ):(
          <Expense onSubmit={this.handleSubmit}/>

        )}
        <Table data={this.state.transactions} />
      </div>
    );
  }
}

export default InOutInput;
