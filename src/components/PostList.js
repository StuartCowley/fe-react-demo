import React, { useState } from 'react'
import PropTypes from "prop-types";

import Post from "./Post";

const PostList = ({ posts }) => {
  const [lastUpvoted, setLastUpvoted] = useState('');

  const handleUpvote = (title) => {
    setLastUpvoted(title);
  }

  return (
    <>
      {lastUpvoted ?? <div className="last-upvoted">{lastUpvoted}</div>}
      <div className="postlist">
        {posts.map((post) => (
          <Post key={post.id} postData={post} handleUpvote={handleUpvote}/>
        ))}
      </div>
    </>
  )
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      body: PropTypes.string,
      date: PropTypes.string,
      isPublished: PropTypes.bool,
      tags: PropTypes.arrayOf(PropTypes.string),
      title: PropTypes.string,
    })
  ).isRequired
}

export default PostList
