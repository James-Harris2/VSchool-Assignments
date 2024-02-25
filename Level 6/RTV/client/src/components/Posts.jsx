

function Posts(props){

    const {title, description, likedUsers, dislikedUsers, upVotePost, _id, downVotePost} = props


    return(
        <div className="post-container">
            <h2>{title}</h2>
            <h4>{description}</h4>

            <div className = 'vote-button-container'>
                <button onClick={() => upVotePost(_id)}>
                    <i className="fa-solid fa-thumbs-up"></i>
                </button>
                <p>{likedUsers.length}</p>
            
                <button onClick={() => downVotePost(_id)}>
                    <i className="fa-solid fa-thumbs-down"></i>
                </button>
                <p>{dislikedUsers.length}</p>
            </div>
        </div>
    )
}

export default Posts