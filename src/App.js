import React, { Component, useState } from 'react';
import Amount  from './components/Amount';
import Controls from './components/Control';

function App() {
  const priceOfTheCig = parseFloat(11.87 / 20).toFixed(2);;
  const [amount, setAmount] = useState(0);

  function deposit(value) {
    setAmount(( amount + (priceOfTheCig * value)));
  }

  return (
    <div className="app-container">
      <Amount value={amount} />
      <div className="separator" />
      <Controls onAddCiggie={deposit} />
    </div>
  )
}

export default App;
