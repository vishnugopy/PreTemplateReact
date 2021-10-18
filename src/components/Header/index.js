import "./style.scss";
import { Link } from "react-router-dom";


function Header() {
  return (
    <header>
      <section className="headerpc">
        <div className="header-logo">
          <Link to="/">
      
            <h1>Restaurant Bathra</h1>
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
