import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';

function TransactionManager() {
 const [text, setText] = useState('');
 const [amount, setAmount] = useState(0);
 const { transactions, addTransaction } = useContext(GlobalContext);

 const [balance, setBalance] = useState(0.0);
 const [income, setIncome] = useState(0.0);
 const [expense, setExpense] = useState(0.0);

 // ... (other functions for updating balance, income, and expense) ...

 const handleSubmit = (event) => {
   event.preventDefault();
   addTransaction({ text, amount });
   setText('');
   setAmount(0);
 };

 useEffect(() => {
   const totalBalance = transactions.reduce((acc, t) => acc + t.amount, 0);
   setBalance(totalBalance); // Update balance state directly
 }, [transactions]); // Only re-run effect when transactions change

 // Money formatter function (nested for clarity)
 function moneyFormatter() {
   // ... (formatting logic remains unchanged)
 }

 return (
   <div>
     <h2>Transaction Manager</h2>
     <form onSubmit={handleSubmit}>
       <h3>Add New Transaction</h3>
       <label htmlFor="text">Text</label>
       <input
         type="text"
         value={text}
         onChange={(e) => setText(e.target.value)}
         placeholder="Enter text..."
       />
       <div className="form-control">
         <label htmlFor="amount">
           Amount (negative - expense, positive - income)
         </label>
         <input
           type="number"
           value={amount}
           onChange={(e) => setAmount(e.target.value)}
           placeholder="Enter amount..."
         />
       </div>
       <button className="btn">Add Transaction</button>
     </form>
     <div className="container">
 <h4>Your Balance</h4>
 <h1 id="balance"><span class="math-block">\{balance\.toFixed\(2\)\}</<0\>h1\>
<div className\="inc\-exp\-container"\>
<div\>
<h4\>Income</h4\>
<<1\>p id\="money\-plus" className\="money plus"\>\+</span>{income.toFixed(2)}</p>
   </div>
   <div>
     <h4>Expense</h4>
     <p id="money-minus" className="money minus">-$${expense.toFixed(2)}</p>
   </div>
 </div>
</div>


 );
}

export default TransactionManager;


