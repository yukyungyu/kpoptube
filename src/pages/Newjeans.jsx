import React, { useEffect, useState } from "react";

import Main from "../components/section/Main";
import VideoCard from "../components/videos/VideoCard";

import { newjeansText } from "../data/newjeans";

/* pages/newjeans */
const Newjeans = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  const newjeansPageClass = loading ? "isLoading" : "isLoaded";

  return (
    <Main title="NewJeans 영상" description="NewJeans 영상입니다.">
      <section id="newjeansPage" className={newjeansPageClass}>
        <h2>NewJeans</h2>
        <div className="video__inner">
          <VideoCard videos={newjeansText} />
        </div>
      </section>
    </Main>
  );
};

export default Newjeans;
