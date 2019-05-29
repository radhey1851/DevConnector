import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../redux/actions/post';

const CommentForm = ({ postId, addComment }) => {
  const [text, settext] = useState('');

  return (
    <div class='post-form'>
      <div class='bg-primary p'>
        <h3>Leave a comment</h3>
      </div>
      <form
        class='form my-1'
        onSubmit={e => {
          e.preventDefault();
          addComment(postId, { text });
          settext('');
        }}
      >
        <textarea
          value={text}
          onChange={e => settext(e.target.value)}
          name='text'
          cols='30'
          rows='5'
          placeholder='Comment'
          required
        />
        <input type='submit' class='btn btn-dark my-1' value='Submit' />
      </form>
    </div>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired
};

export default connect(
  null,
  { addComment }
)(CommentForm);
