import React from 'react';
import './comment.css';

function Comment() {
  return (
    <div>
      <h4>Nom</h4>
      <div className="text">
        <input
          type="testarea"
          name="testarea"
          className="comment"
          placeholder="texte"
        />
      </div>
    </div>
  );
}

export default Comment;
