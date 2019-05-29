import React, {Component} from 'react';
import styled from 'styled-components';
import Expense from './expense.js';
import Income from './income.js';
import Table from './table.js';
import moment from 'moment';


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
    const store = localStorage.getItem('transactions');
    if (! store instanceof Array) {
      localStorage.setItem('transactions', []);
    }
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
    /*const index = findLastIndex(transactioins, ({date}) => {
      const transaction = moment(date, 'DD.MM.YYYY');
      return(
        TodayDate.isBefore(transaction, 'day') ||
        TodayDate.isSame(transaction, 'day')
      );
    });*/

    const newTransactions = [...transactioins, newTransaction];
    /*newTransactions.splice(
      index === -1 ? transactioins.length : index,
      0,
      newTransaction,
    );*/

    newTransactions.sort((a,b) => {
      const aDate = moment(a.date, 'DD.MM.YYYY');
      const bDate = moment(b.date, 'DD.MM.YYYY');


      return(aDate).isAfter(bDate);

    })
    this.setState({transactioins: newTransactions});
    localStorage.setItem('transactions', this.state.transactioins);
    console.log(typeof localStorage.getItem('transactions'));
  }

  onToday = () => {
    let sum = 0;
    const today = moment().format('DD');
    const dayLeft = 30 - today;
    this.state.transactioins.forEach(transaction => {
      sum += transaction.sum;
    });
    return sum / dayLeft;
  }

  totalIncome = () => {
    let sum = 0;
    this.state.transactioins.forEach(transaction => {
      if (transaction.sum > 0) {
        sum += transaction.sum;
      }
    });
    return sum;
  }

  totalExpenses = () => {
    let sum = 0;
    this.state.transactioins.forEach(transaction => {
      if (transaction.sum < 0) {
        sum += transaction.sum;
      }
    });
    return sum;
  }

  render(){
    const {navSelected} = this.state;

    return(
      <div className='InOutInput'>
        <p>Total income: {this.totalIncome()} | Total expenses: {this.totalExpenses()} | May spend today: {this.onToday()}</p>
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
        <Table data={this.state.transactioins} />
      </div>
    );
  }
}

export default InOutInput;
