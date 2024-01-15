import  {useState} from 'react'




function AddTransactionForm() {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here, e.g., send data to server
  };

  return (
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
  );
}

export default AddTransactionForm
