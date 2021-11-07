import "./style.scss";
import HomeSection from "../../components/Headsection";
import Takeorder from "../../components/Takeorder";

function Home() {
  return (
    <section>
      <HomeSection />
      <main>
        <Takeorder />
      </main>
    </section>
  );
}
export default Home;
