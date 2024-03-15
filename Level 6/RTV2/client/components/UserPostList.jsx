import Posts from '../components/Post'

function UserPostList(props){

    const {posts} = props

    function sortPosts(a, b){
        if( a.likedUsers.length === b.likedUsers.length ){
            return 0
        } else if (a.likedUsers.length > b.likedUsers.length){
            return -1
        } else {return 1}
    }

    posts.sort(sortPosts)


    const postList = posts.map(post => {
        return <Posts
            {...post}
            key = {post._id}
        />
    })
    
    return(
        <div>
            {postList}
        </div>
    )
}

export default UserPostList