import CreateTweet from "./CreateTweet";
import Tweet from "./Tweet";
import { useContext } from "react";
import { AppContext, ThemeContext } from "../App";

export default function Tweets() {
  const { tweets } = useContext(AppContext);
  const { theme } = useContext(ThemeContext);

  return (
    <main>
      <div className={theme === "dark" ? "top-bar dark" : "top-bar"}>
        <h2 className="title">Home</h2>
      </div>

      <CreateTweet
        tweets={tweets}
        theme={theme}
      />

      <div className="show-more-tweets">
        <p>Show 35 Tweets</p>
      </div>

      {tweets.map((tweet, index) => (
        <Tweet tweet={tweet} theme={theme} key={index} />
      ))}
    </main>
  );
}
