import { useEffect } from "react"
import Posts from "./Posts"



function PublicPostList(props){

    const { allPosts, upVotePost, downVotePost } = props

    function sortPosts(a, b){
        if( a.likedUsers.length === b.likedUsers.length ){
            return 0
        } else if (a.likedUsers.length > b.likedUsers.length){
            return -1
        } else {return 1}
    }

    allPosts.sort(sortPosts)

    const postsMap = allPosts.map(post => {
        return <Posts 
            {...post}
            key = {post._id}
            upVotePost= {upVotePost}
            downVotePost= {downVotePost}
        />
    })

    return(
        <div className="public-container">
            <h1>Top Posts</h1>
            {postsMap}
        </div>
    )
}

export default PublicPostList