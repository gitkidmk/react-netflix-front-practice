import React from "react";
import { useState, useEffect } from "react";

function ContentsCard(props) {
  const [count, setCount] = useState(0);
  const [story, setStory] = useState("");
  let data = props.data;

  useEffect(() => {
    count < 2 ? setStory("아직 덜 봤군") : setStory("좀 보셨군요?");
  }, [count]);

  return (
    <div
      className="contentsCard"
      onClick={() => {
        window.alert("너가 고른 영화는...  " + data.name + "!!!!!");
        setCount(count + 1);
      }}
    >
      <div className="dataName">
        {data.name + " : "} &nbsp; {count}
        <br />
        {story}
      </div>
      <img alt="dataImage" className="img" src={"img/" + data.id + ".jpg"} />
    </div>
  );
}

export default ContentsCard;
