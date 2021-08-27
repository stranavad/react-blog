import React from "react";
import PropTypes from "prop-types";

class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      shortDescription: "",
      content: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onSubmit = (e) => {
    e.preventDefault();
    console.log("Adding post");
    this.props.addPost(
      this.state.title,
      this.state.shortDescription,
      this.state.content
    );
    this.props.toggleCreate();
  };
  render() {
    return (
      <div className="c-create-post_container">
        <form className="c-create-post_form" onSubmit={this.onSubmit}>
          <p>Create New Post</p>
          <input
            type="text"
            placeholder="Post title"
            value={this.state.title}
            onChange={this.onChange}
            name="title"
            required
          />
          <textarea
            name="shortDescription"
            maxLength={100}
            requied
            onChange={this.onChange}
            value={this.state.shortDescription}
            placeholder="Short Description"
          />
          <textarea
            name="content"
            maxLength={500}
            requied
            onChange={this.onChange}
            value={this.state.content}
            placeholder="Post Content"
          />
          <input type="submit" value="Create" />
          <button onClick={() => this.props.toggleCreate()}>
            Close Create Post
          </button>
        </form>
      </div>
    );
  }
}

CreatePost.propTypes = {
  addPost: PropTypes.func.isRequired,
  toggleCreate: PropTypes.func.isRequired,
};

export default CreatePost;
