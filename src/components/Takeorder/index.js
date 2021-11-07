import "./style.scss";

import uber from '../../assets/img/uber.png';
import delivroo from '../../assets/img/delivroo.png';

function Takeorder() {
  return (
    <section className="takeorder" id="order">
      
      <div className="specialad uber">
        <div className="textcontainer ">
          <p>
            Take your order from Uber Eats and get it delivered to your
            doorstep. Enjoy your meal at your home.
          </p>
          <a className="commandebutton" href="">Take Order</a>
        </div>

        <div className="imgcontainer">
          <img
            src={uber}
            alt="takeorder"
          />
        </div>
      </div>

      <div className="specialad delivro">
        <div className="textcontainer ">
          <p>
            Take your order from Delivroo and get it delivered to your
            doorstep. Enjoy your meal at your home.
          </p>
          <a className="commandebutton" href="">Take Order</a>
        </div>

        <div className="imgcontainer">
          <img
            src={delivroo}
            alt="takeorder"
          />
        </div>
      </div>
    </section>
  );
}
export default Takeorder;
