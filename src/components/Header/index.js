import "./style.scss";
import { Link } from "react-router-dom";

import logo from "../../assets/img/logo.png";

function Header() {
  return (
    <header>
      <section className="headerpc">
        <div className="header-logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div>
        <Link to="/">
          <p>ACCUEIL</p>
        </Link>
        <Link to="/me/profile">
          <p>Moi</p>
        </Link>
        <Link to="/me/profile">
          <p>Moi</p>
        </Link>
        <Link to="/me/profile">
          <p>Moi</p>
        </Link>
        <Link to="/me/profile">
          <p>Moi</p>
        </Link>
        <Link to="/me/profile">
          <p>Moi</p>
        </Link>
        </div>
      </section>
    </header>
  );
}
export default Header;
