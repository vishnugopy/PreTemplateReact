import "./style.scss";
import { Link } from "react-router-dom";

import logo from '../../assets/img/logoblack.svg';

function Header() {
  return (
    <header>
      <section className="headerpc">
        <div className="header-logo">
          <Link to="/" className="clicablelogo">
            <img className="mainlogo" src={logo} alt="Logo" />
            <h1 className="tagname">Resto Bathra</h1>
          </Link>
        </div>
        <nav>
          <Link to="https://www.instagram.com/restobathra/?hl=fr">
            <p>Instagram</p>
          </Link>
          <Link to="https://www.tiktok.com/@restobathra?">
            <p>Tiktok</p>
          </Link>
        </nav>
      </section>

      <section className="headerphone">
      <div className="">
          <Link to="/">
            <img className="mainlogo" src={logo} alt="Logo" />
            <h1 className="tagname">Resto Bathra</h1>
          </Link>
        </div>
      </section>
    </header>
  );
}
export default Header;
