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
          <a className="commandebutton" href="https://www.ubereats.com/nl-en/store/snacks-corner/rts1fE2HR_K3Xt-0mQFYYQ?pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjE0JTIwUnVlJTIwU2ltYXJ0JTIyJTJDJTIycmVmZXJlbmNlJTIyJTNBJTIyQ2hJSlVXRy1SV2R1NWtjUkx3OTdhQmhJQTMwJTIyJTJDJTIycmVmZXJlbmNlVHlwZSUyMiUzQSUyMmdvb2dsZV9wbGFjZXMlMjIlMkMlMjJsYXRpdHVkZSUyMiUzQTQ4Ljg5MDU3OTclMkMlMjJsb25naXR1ZGUlMjIlM0EyLjM0ODE1MjQlN0Q%3D&ps=1&rpu=4652031f-cf5b-4c33-9a83-8b6153c08723">Take Order</a>
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
          <a className="commandebutton" href="https://deliveroo.fr/fr/">Take Order</a>
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
