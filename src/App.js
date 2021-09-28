import "./App.css";
import Post from "./components/Post";

function App() {
  const post = {
    title: "Learning React",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam tempora distinctio sint numquam non, exercitationem veniam quis optio similique odit!",
    tags: ["react", "manchester", "2021"],
    author: "May21",
    date: "27-09-2021",
    isPublished: true,
  };

  return (
    <div className="App">
      <Post postData={post} />
    </div>
  );
}

export default App;
