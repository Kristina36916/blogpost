
import Post from'./Post'

function Postovi({posts,postRead}) {
  
  return (
    <div className="posts-container">
      {posts.map((post) => (
        <Post post={post} read={postRead} />
      ))}
    </div>
  )
}

export default Postovi