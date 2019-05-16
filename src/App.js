import React from 'react';
import DateManager from './components/date-manager';
import InOutInput from './components/in-out-input';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
          Budget counter
      </header>
      <DateManager />
      <InOutInput />
    </div>
  );
}

export default App;
