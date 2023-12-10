import React from "react";
import Main from "../components/section/Main";
import Today from "../components/contents/Today";
import Artist from "../components/contents/Artist";
import VideoSlider from "../components/videos/VideoSlider";

import { nctText } from "../data/nct";
import { newjeansText } from "../data/newjeans";
import { riizeText } from "../data/riize";

const Home = () => {
  return (
    <Main title="케이팝튜브" description="케이팝튜브에 오신 것을 환영합니다.">
      <Today />
      <Artist />
      <VideoSlider videos={nctText} title="NCT" id="nct" />
      <VideoSlider videos={newjeansText} title="New Jeans" id="newjeans" />
      <VideoSlider videos={riizeText} title="RIIZE" id="riize" />
    </Main>
  );
};

export default Home;
