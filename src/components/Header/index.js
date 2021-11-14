import "./style.scss";
import { Link } from "react-router-dom";

import logo from "../../assets/img/logoblack.svg";

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
          <a href="https://www.instagram.com/restobathra/?hl=fr">Instagram</a>

          <a href="https://www.tiktok.com/@restobathra">Tiktok</a>

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
