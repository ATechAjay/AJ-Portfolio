import style from "./Card.module.css";
import { FaRegCircleCheck } from "react-icons/fa6";

const Card = (props) => {
  console.log(props);

  const { title, description, duration, price, tags, mailSubject } = props;
  console.log(mailSubject);
  return (
    <div className={style.card}>
      <p className={style.card_title}>{title} </p>
      <p className={style.card_description}>{description}</p>
      <div className={style.card_price}>
        <p className={style.card_price_amount}>${price}</p>
        <span className={style.card_price_validity}>/{duration}</span>
      </div>
      <a
        className={style.card_cta}
        href={`mailto:partnership.aj@gmail.com?subject=${mailSubject}`}
      >
        Get Started Now
      </a>
      <ul className={style.card_offer}>
        {tags.map((tag, index) => {
          return (
            <li className={style.card_offer_list} key={index}>
              <FaRegCircleCheck />
              <p className={style.card_offer_list_text}> {tag}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Card;
