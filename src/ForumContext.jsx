
import { createContext } from 'react';

export const ForumContext = createContext();
import { useState } from "react";

import { forumData } from './assets/formdata';

export const ForumProvider = ({ children }) => {
    const [bookmarks, setBookmarks] = useState([]);
    const [upvotes, setUpvotes] = useState(
      forumData.posts.map((post) => post.id) // Initialize with post IDs
    );
  
    // Define functions to update the context values
    const addBookmark = (bookmark) => {
      setBookmarks((prevBookmarks) => [...prevBookmarks, bookmark]);
    };
  
    const removeBookmark = (bookmark) => {
      setBookmarks((prevBookmarks) =>
        prevBookmarks.filter((item) => item !== bookmark)
      );
    };
  
   const addUpvote = (postId) => {
    setUpvotes((prevUpvotes) => {
      if (prevUpvotes.includes(postId)) {
        return prevUpvotes;
      } else {
        return [...prevUpvotes, postId];
      }
    });
  };

  const removeUpvote = (postId) => {
    setUpvotes((prevUpvotes) => prevUpvotes.filter((id) => id !== postId));
  };
    // Create the context value object
    const contextValue = {
      bookmarks,
      upvotes,
      addBookmark,
      removeBookmark,
      addUpvote,
      removeUpvote,
    };
  
    // Provide the context value to the children components
    return (
      <ForumContext.Provider value={contextValue}>{children}</ForumContext.Provider>
    );
  };