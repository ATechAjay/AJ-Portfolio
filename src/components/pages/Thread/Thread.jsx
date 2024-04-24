import style from "./Thread.module.css";
import TweetLoading from "../../Reusable/TweetLoading";

const Thread = () => {
  return (
    <div className={style.timeline_cotainer}>
      <a
        className="twitter-timeline load"
        href="https://twitter.com/ATechAjay"
        data-width="500"
        data-tweet-limit="10"
        data-height="auto"
        data-chrome="transparent noscrollbar nofooter noborders"
      >
        <TweetLoading />
      </a>
    </div>
  );
};

export default Thread;
