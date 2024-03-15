// Comments From USERS
import axios from "axios";
import { UserContext } from "../context/UserProvider";
import { useContext, useState } from "react";





// function handleSubmit(e){
//     e.preventDefault()
//     addTodo(inputs)
//     setInputs(initInputs)
//   }




function PostNewComment({ postId, likedUsers, dislikedUser }) {

  const { upVotePost, downVotePost, setComments, postNewComment } = useContext(UserContext)
  // States to hold Lists and Comments
  // const [] = useState([])
  const [formData, setFormData] = useState({
    text: ""
  })
  function handleChange(e) {
    const { name, value } = e.target
    setFormData(prevData => {
      return {
        ...prevData, [name]: value
      }
    })
  }


  function handleSubmit(e) {
    e.preventDefault()
   postNewComment(postId, formData)

  }


  

return (
  <>
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Leave a Comment</legend>

        <label>
          Comment:
          <textarea name="text" onChange={handleChange} value={formData.text}></textarea>
        </label>
        <button type="submit" onSubmit={handleChange} >Submit Comment</button>

      </fieldset>
    </form>
    <button type='button' onClick={() => { upVotePost(postId) }} className="upvote">Upvote</button>
    <p>{likedUsers.length}</p>
    <button type="button" onClick={() => { downVotePost(postId) }} className="downvote">Downvote</button>
    <p>{dislikedUser.length}</p>
  </>
)

}
export default PostNewComment



// PS steps
// step 1 weird page show up on button click
// step 1a find button
// step 2 finding where the error is
// check FE
// check BE with postman
//



