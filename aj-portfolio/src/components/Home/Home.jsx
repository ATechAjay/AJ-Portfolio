import Header from "./Header";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import style from "./Home.module.css";

const Home = () => {
  return (
    <main className={style.main_container}>
      <div className={style.grid_home}>
        <Header />
      </div>
      <div className={style.hero_container}>
        <HeroContent />
        <HeroImage />
      </div>
    </main>
  );
};

export default Home;
