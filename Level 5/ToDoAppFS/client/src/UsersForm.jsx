import  { useState } from 'react';

const UsersForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data submitted:', formData);
    // Reset form fields after submission
    setFormData({ name: '', email: '', age: '' });
  };

  return (
    <div className='d-flex vh-100 bg-info bg-gradient justify-content-center align-items-center'>
      <form className='w-50 bg-white rounded p-3' onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='name' className='form-label'>
            Name:
          </label>
          <input
            type='text'
            className='form-control'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            Email:
          </label>
          <input
            type='email'
            className='form-control'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='age' className='form-label'>
            Age:
          </label>
          <input
            type='number'
            className='form-control'
            id='age'
            name='age'
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default UsersForm;


