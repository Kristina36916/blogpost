
import Post from'./Post'

function Postovi({posts,postRead}) {
  
  return (
    <div className="posts-container">
      {posts.map((post) => (
        <Post post={post} read={postRead} key={post.id} />
      ))}
    </div>
  )
}

export default Postovi