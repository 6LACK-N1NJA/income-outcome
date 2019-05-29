import React, { Component } from 'react';
import moment from 'moment';
import styled from 'styled-components';

const Td = styled.td`
  border-right: 2px solid palevioletred;
  border-right: 2px solid palevioletred;
  width : 20%;

`;

const Tr = styled.tr`

`;

const Tab = styled.table`
  margin-top: 19px;
`;

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transactions: this.props.data
    };

  }

  render() {

    const transactions = this.props.data;
    const date = moment();


    return (
      <Tab>
        <tbody>
          {transactions.filter(({date: transactionDate}) =>
            moment(transactionDate, 'DD.MM.YYYY').isSame(date, 'month')).map(
              ({date, sum, cat}, index) =>
            (
              <Tr key={index}>
                <Td>{date}</Td>
                <Td>{sum}</Td>
                <Td>{cat}</Td>
              </Tr>
            )
          )}
        </tbody>
      </Tab>
    );
  }

}

export default Table;
