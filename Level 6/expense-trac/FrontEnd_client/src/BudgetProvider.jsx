import { useState, createContext } from 'react';



// Create a context with initial value as an empty array
const BudgetContext = createContext([]);

// Provider component that manages the state and fetches data
const BudgetProvider = ({ children }) => {
  // State variable for all expenses
  const [allExpense, setAllExpense] = useState([]);

  // Function to handle the creation and addition of an expense
  const addExpense = (expense) => {
    setAllExpense((prevExpenses) => [...prevExpenses, expense]);
  };

  // Function to handle the creation and addition of an income
  const addIncome = (income) => {
    setAllExpense((prevExpenses) => [...prevExpenses, income]);
  };

  return (
    <BudgetContext.Provider value={{ allExpense, addExpense, addIncome }}>
      {children}
    </BudgetContext.Provider>
  );
};

// Export the context and provider for use in other components
export { BudgetContext, BudgetProvider };
