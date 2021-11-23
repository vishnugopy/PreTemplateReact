import "./style.scss";

import Menu1 from "../../assets/img/menu1.svg";
import Menu2 from "../../assets/img/menu2.svg";

function Menu() {
  return (
    <section className="menu">
     <h2>Explore Our Menus</h2>

     <img className="menuaffiche" src={Menu1} alt=""/>
     <img className="menuaffiche" src={Menu2} alt=""/>
    </section>
  );
}
export default Menu;
