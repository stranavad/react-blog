import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { CommentContext } from "../App";

const AddComment = (props) => {
  const [text, setText] = useState("");
  const AddComment = useContext(CommentContext);
  return (
    <div className="c-add-comment">
      <p>Add comment</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          AddComment(props.id, text);
          props.close();
        }}
      >
        <textarea
          onChange={(e) => setText(e.target.value)}
          value={text}
          placeholder="Type your comment"
        ></textarea>
        <input type="submit" value="Add comment" />
      </form>
    </div>
  );
};

AddComment.propTypes = {
  id: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
};

export default AddComment;
