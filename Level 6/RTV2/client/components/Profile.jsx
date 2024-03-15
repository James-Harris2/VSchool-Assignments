import { useContext, useEffect } from "react"
import { UserContext } from "../context/UserProvider"
import PostForm from "./PostForm"
import PostList from "./PostList"
// import PostNewComment from "./PostNewComment"


export default function Profile(){

    const {user, posts, getUserPosts } = useContext(UserContext)
    console.log(posts)

    useEffect(() => {
        getUserPosts()
    }, [])
    return(
        <div>
            <h1>Welcome @ {user.username}</h1>
            <PostForm />
            <PostList posts={posts}/>
        </div>
    )
}