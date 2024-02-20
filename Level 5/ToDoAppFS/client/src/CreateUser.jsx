import { useState, useEffect } from 'react';
import axios from 'axios';
import UpdateUser from './UpdateUser';
import SingleUser from './SingleUser';



const CreateUser = () => {
  const [user, setUser] = useState({ name: '', email: '', age: '' });
  const [userList, setUserList] = useState([])



  useEffect(() => {
    axios.get('/api/user')
      .then(res => setUserList(res.data))
      .catch(err => console.log(err))
  }, [])

  const handleSubmit = async (user) => {
    try {
      const response = await axios.post('/api/user/createUser', user);
      console.log(response.data)
      const newUser = response.data;
      setUserList(prevUsers => [newUser, ...prevUsers])
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (userId, update) => {
    axios.put(`/api/user/updateUser/${userId}`, update)
      .then(res => {
        setUserList(prevUser => prevUser.map(user => user._id === userId ? res.data : user))
      })
      .catch(err => console.log(err))
    console.log('almost done with Level 5 CapStone',)
  };

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`/api/user/deleteUser/${userId}`);
      setUserList(prevUsers => prevUsers.filter(user => user._id !== userId))
    } catch (error) {
      console.error(error);
    }
  };

  const allUserList = userList.map(user => {
    return (
      <>
        <SingleUser {...user} handleDelete={handleDelete} handleEdit={handleEdit} />
      </>
    )
  })


  return (
    <div className='d-flex vh-100 bg-info justify-content-center align-items-center'>
      <div className='w-75 bg-white rounded p-3'>
        <h2>Create User</h2>
        <UpdateUser
          btnText="create"
          message="created"
          submit={handleSubmit}
          //  input = {user}
          handleEd={handleEdit}
        />
        {allUserList}
      </div>
    </div>
  );
};

export default CreateUser;
