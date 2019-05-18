import React, {Component} from 'react';
import styled from 'styled-components';
import Expense from './expense.js';
import Income from './income.js';

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
    }
  }

  handleNavClick = event => {
    this.setState({navSelected : event.target.getAttribute('name')});
  }

  handleSubmit = (sum, cat) => {
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
      </div>
    );
  }
}

export default InOutInput;
