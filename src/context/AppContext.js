import React,  { createContext, useState} from 'react';

const AppContext = createContext();
const AppContextProvider = ({children}) => {
  const priceOfTheCig = parseFloat(11.87 / 20).toFixed(2);;
  const [amount, setAmount] = useState(0);

  function deposit(value) {
    setAmount(( amount + (priceOfTheCig * value)));
  }
    const defaultContext = {
      amount,
      deposit
    };
    return (
        <AppContext.Provider value={defaultContext}>
          {children}
        </AppContext.Provider>
      );
}

export { AppContext, AppContextProvider };