import "./App.css";
import Post from "./components/Post";

import posts from './data/posts.json';

function App() {
  return (
    <div className="App">
      <Post postData={posts[0]} />
    </div>
  );
}

export default App;
