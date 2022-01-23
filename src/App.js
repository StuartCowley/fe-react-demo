import React from "react";
import "./App.css";
import PostList from "./components/PostList";

import posts from "./data/posts.json";

function App() {
  return (
    <div className="App">
      <h1>My posts</h1>
      <PostList posts={posts} />
    </div>
  );
}

export default App;
