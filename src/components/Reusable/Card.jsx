import style from "./Card.module.css";
import { FaRegCircleCheck } from "react-icons/fa6";

const Card = () => {
  return (
    <div className={style.card}>
      <p className={style.card_title}>Listicle </p>
      <p className={style.card_description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
        accusamus?
      </p>
      <div className={style.card_price}>
        <p className={style.card_price_amount}>$160</p>
        <span className={style.card_price_validity}>/Post</span>
      </div>
      <a className={style.card_cta} href="#">
        Get Started Now
      </a>
      <ul className={style.card_offer}>
        <li className={style.card_offer_list}>
          <FaRegCircleCheck />
          <p className={style.card_offer_list_text}> Lorem, ipsum.</p>
        </li>
        <li className={style.card_offer_list}>
          <FaRegCircleCheck />
          <p className={style.card_offer_list_text}> Lorem, ipsum.</p>
        </li>
        <li className={style.card_offer_list}>
          <FaRegCircleCheck />
          <p className={style.card_offer_list_text}> Lorem, ipsum.</p>
        </li>
      </ul>
    </div>
  );
};

export default Card;
