import { Link } from 'react-router-dom';
import './connection.css';

function Connection() {
  return (
    <div className="Connection">
      <h1 className="titre">Connexion</h1>
      <form className="emailContainer">
        <label htmlFor="email" className="email">
          Email
          <input type="email" name="email" id="email" placeholder="Email" />
        </label>
      </form>
      <form className="passwordContainer">
        <label htmlFor="password" className="password">
          Mot de passe
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Mot de passe"
          />
        </label>
      </form>
      <Link to="/profile" className="connection">
        Connexion
      </Link>
    </div>
  );
}

export default Connection;
