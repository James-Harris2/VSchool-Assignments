import  { useState, useEffect } from 'react';
import Post from "../components/Post";
// import PostNewComment from '../components/PostNewComment'





function PublicPostList({ allPosts, Upvotes, Downvotes }) {
  const [sortedPosts, setSortedPosts] = useState([]);

  useEffect(() => {
    // Sort posts directly within useEffect
    setSortedPosts([...allPosts].sort((a, b) => b.likedUsers.length - a.likedUsers.length));
  }, [allPosts]);

  return (
    <div className="public-container">
      <h1>Top Posts</h1>
      {sortedPosts.map(post => (
        <Post
          {...post}
          key={post._id}
          upVotePost={upvotes}
          downVotePost={downvotes}
        />
      ))}
    </div>
  );
}

export default PublicPostList;