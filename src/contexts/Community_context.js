import React, { createContext, useState } from "react";

export const CommunityContext = createContext();

export const CommunityProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  const addComment = (postId, comment) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, comments: [...(post.comments || []), comment] } : post
      )
    );
  };

  const toggleLike = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, liked: !post.liked } : post
      )
    );
  };

  const updatePost = (postId, title, content) => {
    setPosts(posts.map(post =>
      post.id === postId ? { ...post, title, content } : post
    ));
  };

  const deletePost = (postId) => {
    setPosts(posts.filter(post => post.id !== postId));
  };

  const deleteComment = (postId, commentId) => {
    console.log(`Deleting comment with postId: ${postId} and commentId: ${commentId}`);
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? { ...post, comments: post.comments.filter(comment => comment.id !== commentId) }
          : post
      )
    );
  };

  return (
    <CommunityContext.Provider value={{ posts, addPost, addComment, toggleLike, updatePost, deletePost, deleteComment }}>
      {children}
    </CommunityContext.Provider>
  );
};

export default CommunityProvider;

