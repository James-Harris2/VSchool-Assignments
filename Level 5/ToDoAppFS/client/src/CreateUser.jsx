import { useState, useEffect } from 'react';
import axios from 'axios';
// import { useParams } from 'react-router-dom';
import Button from './Button';
import UpdateUser from './UpdateUser';



const CreateUser = () => {
  const [user, setUser] = useState({ name: '', email: '', age: '' });
  const [createdUser, setCreatedUser] = useState(null);
  const [editingUserId, setEditingUserId] = useState(null);
  const [userList, setUserList] = useState([])
  const [showEditForm, setShowEditForm] = useState(false)

  // Introducing a variable to store the history instance
  const history = window.history;

  
  useEffect(() => {
    axios.get('/api/user')
    .then(res => setUserList(res.data))
    .catch(err => console.log(err))
  } , [])
  
  useEffect(() => {
  axios.get('/api/updateUser')
  .then(res => setUser(res.data))
  .catch(err => console.log(err))
  }, [setEditingUserId]);

  useEffect(() => {
    axios.get('/api/deleteUser')
    .then(res => (res.data))
    .catch(err => console.log(err))
  }, [])
  // const fetchUserById = async (userId) => {
  //   try {
  //     const response = await axios.get(`/api/user/getUser/${userId}`);
  //     setUser(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevUser => ({ ...prevUser, [name]: value }));
    console.log(user)
  };

  const handleSubmit = async (user) => {
    // e.preventDefault();

    try {
      // const response = editingUserId
      //   ? await axios.put(`/api/user/updateUser/${editingUserId}`, user)
        // : 
       const response =  await axios.post('/api/user/createUser', user);
      console.log(response.data)
      const newUser = response.data;

      setCreatedUser(newUser);
      // setUser({ name: '', email: '', age: '' });
      // setEditingUserId(null);

      // Redirect to a different route after successful submit
      history.pushState(null, '/userList'); // Use pushState for navigation
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (user) => {
    console.log(createdUser._id)
    axios.put(`/api/user/updateUser/${createdUser._id}`, user)    
    .then(res => {setCreatedUser(prevUser =>({
      ...prevUser, 
      ...res.data
    }))
    console.log(createdUser)
    }).catch(err => console.log(err))
   



    
    console.log('almost done with Level 5 CapStone', )
  };

  const handleDelete = async (userId) => {
    try {
      axios.delete(`/api/user/deleteUser/:id${userId}`);
      setCreatedUser(null);
      setEditingUserId(null);
    } catch (error) {
      console.error(error);
    }
  };
  // const userElements ()
  const renderUserList = () => {
    if (createdUser) {
      return (
        <div className='mt-3'>
          <h2>UserList</h2>
          <div>
            {showEditForm ? <>
            <UpdateUser 
            initName = {createdUser.name}
            initEmail = {createdUser.email}
            initAge = {createdUser.age}
            btnText = "update"
            message = "updated"
            submit = {handleEdit}
            />
            <button className='btn btn-warning mx-2' onClick={() =>setShowEditForm(prevShow => !prevShow)}>
            Close
          </button>
            </>
            :
            <>
            <p>Name: {createdUser.name}</p>
            <p>Email: {createdUser.email}</p>
            <p>Age: {createdUser.age}</p>
            <button className='btn btn-warning mx-2' onClick={() =>setShowEditForm(prevShow => !prevShow)}>
              Edit
            </button>
            <button className='btn btn-danger' onClick={() => handleDelete(createdUser.id)}>
              Delete
            </button>
            </>
            }
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className='d-flex vh-100 bg-info justify-content-center align-items-center'>
      <div className='w-75 bg-white rounded p-3'>
       {/* // <form onSubmit={handleSubmit}>
         //</form> <h2>{editingUserId ? 'Edit User' : 'Add User'}</h2>
          /{['name', 'email', 'age'].map((field) => ( */}
    {/* //        <div key={field} className='mb-2'>
     //         <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
     //         <input */}
    {/* //            type='text'
     //           name={field}
     //           placeholder={`Enter ${field.charAt(0).toUpperCase() + field.slice(1)}`}
      //          className='form-control'
      //          value={user[field]}
       //         onChange={handleChange}
      //        />
      //      </div>
      //    ))}
     //     <button type='submit' className='btn btn-success'>
      //      {editingUserId ? 'Update' : 'Submit'}
      //    </button>
     //   </form> */}
     <h2>Create User</h2>
     <UpdateUser 
     btnText = "create"
     message = "created"
     submit = {handleSubmit}
    //  input = {user}
    handleEd = {handleEdit}
    />


        {renderUserList()}
      </div>
    </div>
  );
};

export default CreateUser;
