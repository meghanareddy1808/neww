import React, { useState } from 'react';

const Forum = () => {
  const [posts, setPosts] = useState([]);
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');

  const handlePostSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      title: newPostTitle,
      content: newPostContent,
      date: new Date().toISOString(),
      author: 'Anonymous', // Replace with authenticated user
      comments: [],
    };
    setPosts([...posts, newPost]);
    setNewPostTitle('');
    setNewPostContent('');
  };

  const handleCommentSubmit = (postId, commentText) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [...post.comments, { text: commentText, author: 'Anonymous', date: new Date().toISOString() }],
        };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  return (
    <div>
      <h1>Community Support Forum</h1>

      {/* Form to submit new posts */}
      <form onSubmit={handlePostSubmit}>
        <input
          type="text"
          placeholder="Enter post title"
          value={newPostTitle}
          onChange={(e) => setNewPostTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Enter post content"
          value={newPostContent}
          onChange={(e) => setNewPostContent(e.target.value)}
          required
        ></textarea>
        <button type="submit">Submit Post</button>
      </form>

      {/* Display existing posts */}
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <p>Author: {post.author}</p>
          <p>Date: {post.date}</p>
          <ul>
            {post.comments.map((comment, index) => (
              <li key={index}>
                <p>{comment.text}</p>
                <p>Author: {comment.author}</p>
                <p>Date: {comment.date}</p>
              </li>
            ))}
          </ul>
          {/* Form to submit comments */}
          <form onSubmit={(e) => handleCommentSubmit(post.id, e.target.comment.value)}>
            <input type="text" name="comment" placeholder="Add a comment" required />
            <button type="submit">Submit Comment</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default Forum;
