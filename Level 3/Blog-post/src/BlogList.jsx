import BlogPost from "./BlogPost";
import data from "./data";

export default function BlogList() {
const postList = data.map(function(post) {
return (
<BlogPost 
key={post.id}
post={post}

/>) 
})

return (
<div>
    {postList}
</div>
)
}