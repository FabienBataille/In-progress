import React from 'react';
import { Link } from 'react-router-dom';

function Discussion() {
  return (
    <div>
      <p>Commentaire</p>
      <Link to="/comment" className="comment">
        Poster un commentaire ici
      </Link>
    </div>
  );
}

export default Discussion;
