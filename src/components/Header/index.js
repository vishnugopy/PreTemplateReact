import "./style.scss";
import { Link } from "react-router-dom";

import logo from '../../assets/img/logoblack.svg';

function Header() {
  return (
    <header>
      <section className="headerpc">
        <div className="header-logo">
          <Link to="/">
            <img className="mainlogo" src={logo} alt="Logo" />
          </Link>
          <div className="tagname">
            <h1>Resto</h1>
            <h1>Bathra</h1>
            </div>
        </div>
        <nav>
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="#order">
            <p>Take Order</p>
          </Link>
          <Link to="#contact">
            <p>Contact</p>
          </Link>
        </nav>
      </section>

      <section className="headerphone">
      <div className="">
          <Link to="/">
            <img className="mainlogo" src={logo} alt="Logo" />
          </Link>
        </div>
      </section>
    </header>
  );
}
export default Header;
