import "./App.css";
import PostsList from "./features/posts/PostsList";
import "./deneme.css";
import AddPostForm from "./features/posts/AddPostForm";
function App() {
  return (
    <div className="App">
      <AddPostForm />
      <PostsList />
    </div>
  );
}

export default App;
