import React, {Component} from 'react';
import styled from 'styled-components';
import Expense from './components/expense.js';
import Income from './components/income.js';

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
      navSelected : null,
    }
  }

  handleNavClick = event => {
    this.setState({navSelected : event.target.getAttribute('name')});
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
        {navSelected === 'expense' ? <Income /> : <Expense />}
      </div>
    );
  }
}

export default InOutInput;
