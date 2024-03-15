import Post from "./Post";

function PostList(props) {

    const {posts} = props

    const postElements = posts.map(post => {
        return(
            <Post {...post} key= {post._id}/>
        )
    })

    return ( 
        <div>
            {postElements}
        </div>
     );
}

export default PostList;