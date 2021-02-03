import React from "react";
import ContentsCard from "./ContentsCard";
import data from "../data.json";

function LocoRow(props) {
  let id = props.id;
  let contents;

  data.data.map((ele) => {
    if (ele.id === id) {
      return (contents = ele.contents);
    } else return null;
  });

  let cards = contents.map((ele) => {
    return <ContentsCard data={ele} />;
  });

  // JSX example
  //   cards = <p>This shows JSX works</p>

  return (
    <div className="locoRow">
      <div className="rowName">
        {props.id === "userWatching"
          ? "엠케이님이 보고 있는 컨텐츠"
          : "요즘 뜨는 컨텐츠 Top 10"}
      </div>
      <div className="contentsDiv">{cards}</div>
    </div>
  );
}

export default LocoRow;
