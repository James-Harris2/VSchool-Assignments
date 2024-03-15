import  { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";
import PostNewComment from "./PostNewComment";
import Comments from "../components/Comments"
// import { FontAwesomeIcon, faThumbsUp, faThumbsDown } from 'fortawesome/react-fontawesome';



function Post(props) {
  const { title, description, datePosted, user, _id, likedUsers, dislikedUser,  } = props;
  const { user: { _id: userId }, deletePost, comments} = useContext(UserContext); 
  const [upvotes, setUpvotes] = useState(0)
  const [downvotes, setDownvotes] = useState(0)
  console.log(props)
  


//   Vote handling




  const [formData, setFormData] = useState({
    title,
    description,
    datePosted,
    upvotes,
    downvotes
  });
  const [toggle, setToggle] = useState(true); // Updated initial state

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to update the post using formData
    toggleForm() // Close the form after submission
  };

  const toggleForm = () => {
    setToggle(!toggle);
  };

  const filteredComments = comments.filter(comment => comment.issue === _id)

  return (
    <>
      {toggle ? (
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
          <PostNewComment postId={_id} likedUsers={likedUsers} dislikedUser={dislikedUser}/>
          {/* <h4><Comments filteredComments={filteredComments}/> </h4> */}
          {/* add Comment component */}
          { filteredComments.map( comment => <Comments {...comment} key={comment._id}/> ) }

          {user === userId && (
            <>
                {/* <FontAwesomeIcon icon={faThumbsUp} /> */}
               
                {/* <FontAwesomeIcon icon={faThumbsDown} /> */}
            </>
          )}
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
          <input
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
          <button onClick={toggleForm}>Save</button>
          <button onClick={toggleForm}>Cancel</button>
        </form>
      )}
    </>
  );
}

export default Post;