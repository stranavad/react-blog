import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Post from './Post';
import CreatePost from './CreatePost';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showButton: true,
            showCreate: false,
        }
        this.toggleCreate = this.toggleCreate.bind(this);
    }

    toggleCreate() {
        this.setState({
            showButton: !this.state.showButton,
            showCreate: !this.state.showCreate
        });
    }

    render() {
        return (
            <div className="c-posts">
                {this.state.showButton &&
                    <button onClick={() => this.toggleCreate()}>Create Post</button>
                }
                {this.state.showCreate &&
                    <CreatePost addPost={this.props.addPost} toggleCreate={this.toggleCreate}/>
                }
                {this.props.posts.map((post) => (
                    <Post key={post.id} post={post} likePost={this.props.likePost}/>
                 ))}
            </div>
        )
    }
}

Posts.propTypes = {
    posts: PropTypes.array,
    addPost: PropTypes.func.isRequired,
    likePost: PropTypes.func.isRequired,
}

export default Posts;

