import './header.css';
import logo from './logo.png';
import MenuBurger from './MenuBurger';

function Header() {
  return (
    <div className="Header">
      <img className="logo" alt="logo" src={logo} />
      <h1>Le forum</h1>
      <MenuBurger />
    </div>
  );
}

export default Header;
