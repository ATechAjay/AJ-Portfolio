import style from "./Collab.module.css";
import Card from "../../Reusable/Card";
const Collab = () => {
  return (
    <div className={style.collab_container}>
      <h1 className={style.title}>Hi, I&rsquo;m Ajay</h1>
      <p className={style.description}>
        As a frontend developer and AI tool tester, I love helping more than 24K
        Twitter followers find the right AI tools for their needs. I simplify
        complex tech topics into easy-to-understand threads and articles,
        guiding everyone on how to use the latest AI effectively. My goal is to
        make cutting-edge technology accessible and useful for all.
      </p>
      <h2 className={style.sponser_title}>Sponsorships</h2>
      <div className={style.card_container}>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Collab;
