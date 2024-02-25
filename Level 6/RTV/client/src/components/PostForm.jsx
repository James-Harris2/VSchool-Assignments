import { useState } from "react"


const initInputs = {
    title: '',
    description: ''
}

function PostForm(props){
    const { addPost } = props

    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({
          ...prevInputs,
          [name]: value
        }))
      }

      function handleSubmit(e){
        e.preventDefault()
        addPost(inputs)
        setInputs(initInputs)
      }


      const {title, description} = inputs
    return(
        
        <form className="post-form-container" onSubmit={handleSubmit}>
            <h3>New Post</h3>
            <input 
                type='text'
                name='title'
                placeholder="title"
                value={title}
                onChange= {handleChange}

            />

            <textarea 
                type='text'
                name="description"
                placeholder="description"
                value={description}
                onChange= {handleChange}
                rows = '20'
            />

            <button>Post</button>
        </form>
    )
}

export default PostForm