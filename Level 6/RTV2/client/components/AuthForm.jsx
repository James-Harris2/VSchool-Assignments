import { useState, useContext } from 'react'
import { UserContext } from '../context/UserProvider'



export default function AuthForm(props) {
  // const { signup, login } = useContext(UserContext)
  const { submit } = props
  const initInputs = {
    username: "",
    password: ""
  }
  const [inputs, setInputs] = useState(initInputs)

  function handleChange(e) {
    const { name, value } = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log('before set inputs')
    // RtvForm(inputs)
    console.log(inputs)
    submit(inputs)
    setInputs(initInputs)
  }

  // export default function AuthForm(props){
  //   const {
  //     handleChange, 
  //     handleSubmit, 
  //     btnText, 
  //     errMsg,
  //     inputs: {
  //       username, 
  //       password
  //     } 
  //   } = props

  //   return (
  //     <form onSubmit={handleSubmit}>
  //       <input 
  //         type="text" 
  //         value={username} 
  //         name="username" 
  //         onChange={handleChange} 
  //         placeholder="Username"/>
  //       <input 
  //         type="text" 
  //         value={password} 
  //         name="password" 
  //         onChange={handleChange} 
  //         placeholder="Password"/>
  //       <button>{ btnText }</button>
  //       <p style={{color: "red"}}>{ errMsg }</p>
  //     </form>
  //   )
  // }









  //   const { title, description, imgUrl } = inputs
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={inputs.username}
        onChange={handleChange}
        placeholder="Username" />
      <input
        type="text"
        name="password"
        value={inputs.password}
        onChange={handleChange}
        placeholder="Password" />

      <button>Rockin the Vote</button>
    </form>
  )
}

// export default  {RtvForm, RtvComments}
