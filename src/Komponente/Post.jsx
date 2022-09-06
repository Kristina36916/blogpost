import React from 'react'
import { Rating } from 'react-simple-star-rating'
import { useState } from "react";

const Post = ({ post, postRead }) => {

  const [rating, setRating] = useState(0);
  const handleRating =(rate: number)=> {
    setRating(rate)
  };
      return (  
        <div className="post-container">
          <h1 className="heading">{post.title}</h1>
          <img className="image" src={post.imgUrl} alt="post" />
          <p>{post.body}</p>
          <div className="info">      
            <h4>Autor: {post.author}</h4>
            <h3>Broj citanja:{post.postRead}</h3>
          </div>
          <Rating onClick={handleRating} ratingValue={rating}  />
          <button
            className="btn"
            onClick={() => postRead(post.title)}
          >
            Pročitaj više
          </button>
          
        </div>
      );
      };

export default Post;