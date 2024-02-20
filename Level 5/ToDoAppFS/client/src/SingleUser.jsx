import { useState } from "react";


function SingleUser(props) {
    // console.log(props)
    const {name, email, age, handleDelete, _id, handleEdit} = props

    const [toggle, setToggle] = useState(false)

    const [inputs, setInputs] = useState({
        name: name,
        age: age,
        email: email
    })

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prev => {
            return {
                ...prev, 
                [name]: value
            }
        })
    }

    const handleToggle = () => setToggle(prev => !prev)
   
    function deleteUser(){
        handleDelete(_id)
    }

    function editUser(e){
        e.preventDefault()
        handleEdit(_id, inputs)
        handleToggle()
    }

    return ( 
        <>
            <div>
                <h3>Name: {name}</h3>
                <h3>Age: {age}</h3>
                <h3>Email: {email}</h3>
                <button onClick={deleteUser}>Delete</button>
                <button onClick={handleToggle}>{toggle ? "Cancel" : "Edit"}</button>
            </div>
            {toggle && <form onSubmit={editUser}>
                <input 
                    name="name"
                    value={inputs.name}
                    onChange={handleChange}
                />

                <input 
                    name="age"
                    value={inputs.age}
                    onChange={handleChange}
                />

                <input 
                    name="email"
                    value={inputs.email}
                    onChange={handleChange}
                />
                <button>Submit</button>
            </form>}
        </>
     );
}

export default SingleUser;