import React, { useEffect, useState } from "react";

import Main from "../components/section/Main";
import VideoCard from "../components/videos/VideoCard";

import { riizeText } from "../data/riize";

const Riize = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  const riizePageClass = loading ? "isLoading" : "isLoaded";

  return (
    <Main title="RIIZE 영상" description="RIIZE 영상입니다.">
      <section id="riizePage" className={riizePageClass}>
        <h2>RIIZE</h2>
        <div className="video__inner">
          <VideoCard videos={riizeText} />
        </div>
      </section>
    </Main>
  );
};

export default Riize;
