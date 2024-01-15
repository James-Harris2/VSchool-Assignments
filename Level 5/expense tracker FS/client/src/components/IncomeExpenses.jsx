import  { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

//Money formatter function
function moneyFormatter(num) {
  // Format the number with two decimal places and split into integer and decimal parts
  const [integerPart, decimalPart] = num.toFixed(2).split('.');

  // Handle negative numbers appropriately
  const formattedInteger = integerPart.startsWith('-')
    ? `-${formatInteger(integerPart.slice(1))}`
    : formatInteger(integerPart);

  // Reconstruct the formatted number with currency symbol and decimals
  return `$ ${formattedInteger}.${decimalPart}`;
}

// Helper function to format the integer part with thousands separators
function formatInteger(integer) {
  const reversed = integer.split('').reverse();
  const formatted = reversed.reduce((acc, num, i) => {
    return num + (i && !(i % 3) ? ',' : '') + acc;
  }, '');
  return formatted.split('').reverse().join('');
}


export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  );

  return (
    <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
  <p className="money plus">{moneyFormatter(income)}</p>
        </div>
        <div>
          <h4>Expense</h4>
  <p className="money minus">{moneyFormatter(expense)}</p>
        </div>
      </div>
  )
}

export default IncomeExpenses