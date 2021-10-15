import "./style.scss";
import { Link } from "react-router-dom";


import logo from "../../assets/img/logo.png";

function Header() {
  return (
    <header>
      <section className="headerpc">
        <div className="header-logo">
          <Link to="/">
            {/* <img src={logo} alt="logo" /> */}
            <h1>Subathra Ocean Of Foods</h1>
          </Link>
        </div>
        <nav>
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/me/profile">
            <p>Contact</p>
          </Link>
          <Link to="/me/profile">
            <p>Shop</p>
          </Link>
        </nav>
      </section>
    </header>
  );
}
export default Header;
