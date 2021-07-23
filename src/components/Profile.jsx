import React from 'react';
import { Link } from 'react-router-dom';
import './profile.css';

function Profile() {
  return (
    <div className="identifiants">
      <h3>Nom</h3>
      <h3>Prénom</h3>
      <h3>Email</h3>
      <div className="discussion-suppression">
        <Link to="/discussion" className="discussion">
          Discutons ici
        </Link>
        <div className="supression">
          <button type="button">Suppression profil</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
