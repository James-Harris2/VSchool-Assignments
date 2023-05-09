 
export default function BlogPost(props) {
    console.log(props.post, "props")

    return (
        <div>
            <h2>{props.post.title}</h2>
            <h3>{props.post.subTitle}</h3>
            <p>Posted by {props.post.author} on {props.post.date}</p>
        </div>
    )
}

// This is where I am placing my code logic
// const blogComponents = BlogPost.map(Blog => <Blog title=${Blog.title} subTitle=${Blog.subTitle} author=${Blog.author} date= ${Blog.date} />)

