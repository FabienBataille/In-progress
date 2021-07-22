import { Link } from 'react-router-dom';
import './home.css';

function Home() {
  return (
    <div className="Home">
      <h1>Accueil</h1>
      <p>
        Le forum de l’école de cuivres de percussions a pour but d’améliorer la
        relation entre parents, élèves et professeurs afin que l’enseignement
        dispensé porte ses fruits.
      </p>
      <div className="create-connection">
        <Link to="/inscription" className="create-profile">
          Créer profil
        </Link>
        <Link to="/connection" className="connection">
          Connexion
        </Link>
      </div>
    </div>
  );
}

export default Home;
