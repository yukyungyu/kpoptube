import React, { useEffect, useState } from "react";

import Main from "../components/section/Main";
import VideoCard from "../components/videos/VideoCard";

import { nctText } from "../data/nct";

/* pages/nct */
const Nct = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  const nctPageClass = loading ? "isLoading" : "isLoaded";

  return (
    <Main title="NCT 영상" description="NCT 영상입니다.">
      <section id="nctPage" className={nctPageClass}>
        <h2>NCT</h2>
        <div className="video__inner">
          <VideoCard videos={nctText} />
        </div>
      </section>
    </Main>
  );
};

export default Nct;
