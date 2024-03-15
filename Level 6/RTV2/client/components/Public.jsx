import { useContext, useEffect } from "react"
import PostForm from "./PostForm"
import PostList from "./PostList"
import { UserContext } from "../context/UserProvider"
import PostNewComment from "../components/PostNewComment"


 export default function Public(){

    const { allPosts, getAllPosts } = useContext(UserContext)

    useEffect(() => {
       getAllPosts()
   },[])

    return(
        <div>
            <PostForm />
            <h1>See all Public Posts!</h1>
            <PostList posts = {allPosts}/>
        </div>
    )
}

// Comments Forms

<h6 className='comment section'></h6>