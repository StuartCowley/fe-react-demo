import React from 'react';
import "./App.css";
import Post from "./components/Post";

import posts from './data/posts.json';

function App() {
  return (
    <div className="App">
      {posts.map((post) => (
        <Post key={post.id} postData={post} />
      ))}
    </div>
  );
}

export default App;
