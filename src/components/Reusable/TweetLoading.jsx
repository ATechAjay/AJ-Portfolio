import style from "./TweetLoading.module.css";

const TweetLoading = () => {
  return (
    <>
      <h1 className={style.title}>
        Please wait (@ATechAjay) Twitter timeline is loading...
      </h1>
      <p>
        💡Tip: Please log-out from the Twitter to see the famous tweets from my
        timeline.
      </p>
    </>
  );
};

export default TweetLoading;
