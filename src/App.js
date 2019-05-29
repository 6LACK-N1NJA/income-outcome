import React from 'react';
import DateManager from './components/date-manager';
import moment from 'moment';
import InOutInput from './components/in-out-input';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment(),
    }
  }

  dateChanger = date => {
    this.setState({date : date});
  }
  render(){
    return (
      <div className="App">
        <header>
            Budget counter
        </header>
        <DateManager dateChange={this.dateChanger}/>
        <InOutInput date={this.state.date}/>
      </div>
    );

  }
}

export default App;
