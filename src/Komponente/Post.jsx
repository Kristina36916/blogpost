import React from 'react'

const Post = ({ post, postRead }) => {
      return (  
        <div className="post-container">
          <h1 className="heading">{post.title}</h1>
          <img className="image" src={post.imgUrl} alt="post" />
          <p>{post.body}</p>
          <div className="info">      
            <h4>Autor: {post.author}</h4>
            <h3>Broj citanja:{post.postRead}</h3>
          </div>
          <button
            className="btn"
            onClick={() => postRead(post.title)}
          >
            Pročitaj više
          </button>
          
        </div>
      );
    };

export default Post