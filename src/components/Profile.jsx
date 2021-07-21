import React from 'react';
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <div>
      <h3>Nom</h3>
      <h3>Prénom</h3>
      <h3>Email</h3>
      <div className="discussion/suppression">
        <button type="button">Suppression profil</button>
        <Link to="/discussion" className="discussion">
          Discutons ici
        </Link>
      </div>
    </div>
  );
}

export default Profile;
