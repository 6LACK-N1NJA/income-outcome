import React, { Component } from 'react';
import styled from 'styled-components';


const Container = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 18px;
`;

const InputLine = styled.div`
  display: flex;
  flex-direction: row;
  line-height: 1,5;
  padding-bottom: 8px;
`;

const Input = styled.input`
  background-color: transparent;
  border: none;
  border-bottom : 2px solid palevioletred;
  margin-left: 5px;
  color: white;
  width: 100%;
  padding: 0;
  margin: 0;
  font-size: 18px;
`;

const LineTitle = styled.dt`
  width: 150px;

`;

const LineInput = styled.dd`
  width: 150px;
  margin: 0;
`;

const Button = styled.button`
  color: white;
  border: 2px solid palevioletred;
  border-radius: 25px;
  background-color: transparent;
  margin: 4px;
  cursor: pointer;
  text-align: center;
  paddingd: 5px 20px;
  font-size: 21px;
  width: 9%;
`;

class Expense extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transaction: null,
      category: null,
    };
  }


  handleEnter = () => {
    const {onSubmit} = this.props;
    const {transaction, category} = this.state;

    onSubmit(-1 * Math.abs(parseFloat(transaction)), category);
    this.setState({transaction : null, category : null});
  }

  handleChangeInput = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    const {transaction, category} =  this.state;

    return (
      <Container>
        <dl>
          <InputLine>
            <LineTitle>Amount</LineTitle>
            <LineInput>
              <Input
                name="transaction"
                onChange={this.handleChangeInput}
                value={transaction || ''}
              />
            </LineInput>
          </InputLine>
          <InputLine>
            <LineTitle>Category</LineTitle>
            <LineInput>
              <Input
                name="category"
                onChange={this.handleChangeInput}
                value={category || ''}
              />
            </LineInput>
          </InputLine>
        </dl>
        <Button onClick={this.handleEnter}>ADD</Button>
      </Container>
    );
  }

}

export default Expense;
