import { Link } from 'react-router-dom';
import './menuBurger.css';
import burger from './burger.png';

function MenuBurger() {
  return (
    <div className="MenuBurger">
      <ul className="list">
        <li>
          <img className="logoBurger" alt="logoBurger" src={burger} />
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/connection">Connexion</Link>
            </li>
            <li>
              <Link to="/profile">Profil</Link>
            </li>
            <li>
              <Link to="/comment">Discussion</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default MenuBurger;
