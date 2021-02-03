import netflixLogo from "./netflix.png";
import "./App.css";
import MainHeader from "./Components/MainHeader";
import LocoRow from "./Components/LocoRow";

function NetFlix() {
  return (
    <>
      <img src={netflixLogo} alt="logo" id="netflixLogo" />
      <MainHeader />
      <LocoRow id="userWatching" />
      <LocoRow id="mostWatched" />
    </>
  );
}

export default NetFlix;
