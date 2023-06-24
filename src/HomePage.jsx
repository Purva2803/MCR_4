import React from "react";
import { forumData } from "./assets/formdata";
import { TiArrowUpThick ,TiArrowDownThick,TiBookmark} from "react-icons/ti";
import { IoShareOutline } from "react-icons/io5";
import { ForumContext } from "./ForumContext";
import { useContext } from "react";


import { useState } from "react";

export const HomePage = ()=>{

  const { upvotes, addUpvote, removeUpvote } = useContext(ForumContext);
  
    return (
      <>
      {forumData.posts.map((post, index) => (
        <div key={post.id}>
          <ul>
            <li>{post.name}</li>
            <li>{post.post}</li>
            <li>{post.postDescription}</li>
            <button onClick={() => addUpvote(post.id)}>
              <TiArrowUpThick />
            </button>
            {upvotes.includes(post.id) ? (
              <span>{post.upvotes + 1}</span>
            ) : (
              <span>{post.upvotes}</span>
            )}
            <button onClick={() => removeUpvote(post.id)}>
              <TiArrowDownThick />
            </button>
            <li>
              {post.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </li>
            <li>
              {post.tags.map((tag) => (
                <li>
                <span key={tag}>{tag}</span>
                </li>
               

              ))}

            </li>
            <button>
              <TiBookmark />
            </button>
            <button>

              <IoShareOutline />
            </button>
           
          
          </ul>
          
        </div>
      ))}
    </>
      )
    
}