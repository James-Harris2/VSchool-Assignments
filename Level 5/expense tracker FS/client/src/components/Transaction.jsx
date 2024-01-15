import {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

//Money formatter function
function moneyFormatter(num) {
  const parts = num.toFixed(2).split('.');

  // Efficiently handle negative numbers and thousands separators
  const formattedInteger = parts[0].startsWith('-')
    ? `-${formatInteger(parts[0].slice(1))}`
    : formatInteger(parts[0]);

  return `$ ${formattedInteger}.${parts[1]}`;
}

// Highly optimized helper function for integer formatting
function formatInteger(integer) {
  const reversed = integer.split('').reverse();
  const groups = reversed.match(/.{1,3}/g).join(',').split('').reverse();

  // Direct string reversal for efficiency
  return groups.join('');
}




export const Transaction = (transaction) => {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <li
      className={`transaction-item ${transaction.amount < 0 ? 'minus' : 'plus'}`}
    >
      {transaction.text}
      <span>{transaction.amount < 0 ? '-' : '+'}${moneyFormatter(
        transaction.amount
      )}</span>
      <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">
        x
      </button>
    </li>
  );
};
