import React from "react";
import Main from "../components/section/Main";
import Today from "../components/contents/Today";
import Artist from "../components/contents/Artist";

const Home = () => {
  return (
    <Main title="케이팝튜브" description="케이팝튜브에 오신 것을 환영합니다.">
      <Today />
      <Artist />
    </Main>
  );
};

export default Home;
