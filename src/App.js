import React, { createContext } from "react";
import Posts from "./components/Posts";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

// Context functions
const AddComment = (id, text) => {
  console.log("Adding comment" + id + text);
};

export const CommentContext = createContext(AddComment);
// Context end

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      createPost: false,
    };
    this.addPost = this.addPost.bind(this);
    this.addComment = this.addComment.bind(this);
    this.likePost = this.likePost.bind(this);
    this.showCreatePost = this.showCreatePost.bind(this);
  }

  showCreatePost() {
    this.setState({ createPost: true });
  }

  addPost(title, shortDescription, content) {
    let posts = this.state.posts;
    let postId = uuidv4();
    posts.unshift({
      id: postId,
      title,
      shortDescription,
      content,
      comments: [],
      likes: 0,
    });
    this.setState({ posts: posts });
  }

  addComment(id, text) {
    const postIndex = this.state.posts.findIndex((post) => post.id === id);
    let newPosts = [...this.state.posts];
    let comments = newPosts[postIndex].comments;
    comments.push({ text });
    newPosts[postIndex] = { ...newPosts[postIndex], comments };
    this.setState({ posts: newPosts });
    console.log(this.state.posts);
  }

  likePost(id, boolean) {
    const postIndex = this.state.posts.findIndex((post) => post.id === id);
    let newPosts = [...this.state.posts];
    newPosts[postIndex].likes = newPosts[postIndex].likes + (boolean ? 1 : -1);
    this.setState({ posts: newPosts });
    console.log(this.state.posts);
  }

  render() {
    return (
      <CommentContext.Provider value={this.addComment}>
        <Posts
          posts={this.state.posts}
          addPost={this.addPost}
          likePost={this.likePost}
        />
      </CommentContext.Provider>
    );
  }
}

export default App;
