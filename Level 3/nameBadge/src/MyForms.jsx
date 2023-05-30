import React from 'react'
import ReactDOM from 'react-dom'
import {useState} from 'react'


// this is my form component

function App() {
  const [forms, setForms] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== '' && email.trim() !== '') {
      setForms([...forms, { name, email }]);
      setName('');
      setEmail('');
    }
  };

  return (
    <div>
      <h1>Form App</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            minLength={3}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            minLength={3}
            required
          />
        </label>
        <form>
            <p><label for='userinfo'>user comments:</label></p>
            <textarea id='userinfo' name='userinfo'></textarea>
            <br />
        </form>
        <br />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {forms.map((form, index) => (
          <li key={index}>
            Name: {form.name}, Email: {form.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

