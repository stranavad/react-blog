import React from "react";
import PropTypes from "prop-types";
import AddComment from "./AddComment";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addComment: false,
      showComments: false,
      isLiked: false,
    };
    this.LikePost = this.LikePost.bind(this);
  }

  LikePost() {
    this.props.likePost(this.props.post.id, !this.state.isLiked);
    this.setState({ isLiked: !this.state.isLiked });
  }

  render() {
    return (
      <div className="c-post">
        <h3>{this.props.post.title}</h3>
        <p>{this.props.post.shortDescription}</p>
        <p>{this.props.post.likes}</p>
        <div className="c-post_buttons">
          <button onClick={this.LikePost}>Like</button>
          <button
            onClick={() =>
              this.setState({ addComment: !this.state.addComment })
            }
          >
            Create Comment
          </button>
          <button
            onClick={() =>
              this.setState({ showComments: !this.state.showComments })
            }
          >
            Show comments
          </button>
        </div>
        {this.state.addComment && (
          <AddComment
            id={this.props.post.id}
            close={() => this.setState({ addComment: false })}
          />
        )}
        {this.state.showComments &&
          this.props.post.comments.map((comment) => (
            <div className="c-comment">
              <p>{comment.text}</p>
            </div>
          ))}
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  likePost: PropTypes.func.isRequired,
};

export default Post;
