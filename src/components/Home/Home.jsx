import Header from "./Header";
import style from "./Home.module.css";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <main className={style.main_container}>
      <div className={style.grid_home}>
        <Header />
      </div>
      <div className={style.hero_container}>
        <Outlet />
      </div>
    </main>
  );
};

export default Home;
