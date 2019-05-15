import React from 'react';
import MoneyTable from './components/money-table';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Budget counter</h1>
      </header>
      <MoneyTable />
    </div>
  );
}

export default App;
