import "./style.scss";

function HeadSection() {
  return (
    <section className="mainsection">
      <div className="first">
        <div className="mainleft">
          <h1>The best place to fill your stomach.</h1>
          <h2>Eat-Drink-Visit-Enjoy</h2>
        </div>
        <div className="buttons">
          <a href="https://goo.gl/maps/8ws6uYBZ6DEztct19" className="mainbutton">
            Visit Us
          </a>
          <a href="tel:0183955841" className="subbutton">
            Call Us
          </a>
        </div>
        <div>
          <p>
            Our restaurant is specialized in Indian and French cuisine, as we
            come from Asia and now live in France. Food is one of the main ways
            for a person to enjoy life. So come and visit us, eat, drink and
            enjoy.
          </p>
        </div>
      </div>
      <div className="seconde">
        <div className="photobox"></div>
      </div>
    </section>
  );
}
export default HeadSection;
