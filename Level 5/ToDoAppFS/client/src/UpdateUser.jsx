import  { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdateUser = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [user, setUser] = useState({ 
        name: props.initName || '',
         email: props.initEmail || '',
          age: props.initAge || '' });

    useEffect(() => {
        axios.get(`/api/user/getUser/${id}`)
            .then(result => setUser(result.data))
            .catch(err => console.log(err));
    }, [id]);


    useEffect(() => {
        axios.post(`/api/user/createUser/${id}`)
        .then(result => setUser(result.data))
        .catch(err => console.log(err))
    }, []);

   // const update = async (e) => {
       // e.preventDefault();
        //try {
          //  await axios.put(`http://localhost:3001/user/updateUser/${id}`, user);
        //    navigate('/');
      //  } catch (err) {
       //     console.log(err);
     //   }
   // };

   function update(e){
    e.preventDefault()
 props.submit(user, id)
alert (`successfully ${props.message} user`)
}

const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevUser => ({ ...prevUser, [name]: value }));
    console.log(user)
  };
    return (
        <div className='d-flex vh-100 bg-info justify-content-center align-items-center'>
            <div className='w-75 bg-white rounded p-3'>
                <form onSubmit={update}>
                    {/* <h2>Update User</h2> */}
                    {['name', 'email', 'age'].map(field => (
                        <div key={field} className='mb-2'>
                            <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                            <input
                                type="text"
                                name={field}
                                placeholder={`Enter ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                                className='form-control'
                                value={user[field]}
                                onChange={handleChange}
                            />
                        </div>
                    ))}
                    <button type="submit" className='btn btn-success'>{props.btnText}</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateUser;
