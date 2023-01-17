import React from 'react';
import "./styles/app.css";
import PostList from "./components/PostList";

import posts from './data/posts.json';

const App = () => {
  return (
    <div className="app">
      <div className='app__background-wrap' />
      <div className='app__foreground-wrap'>
        <div className='app__title'>Intro to React II</div>
        <PostList posts={posts}/>
      </div>
    </div>
  );
}

export default App;
