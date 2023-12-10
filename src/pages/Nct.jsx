import React from "react";
import { Link } from "react-router-dom";

import Main from "../components/section/Main";

import { nctText } from "../data/nct";

/* pages/nct */
const Nct = () => {
  return (
    <Main title="NCT 영상" description="NCT 영상입니다.">
      <section id="nctPage">
        <h2>NCT</h2>
        <div className="video__inner">
          {nctText.map((video, key) => (
            <div className="video" key={key}>
              <div className="video__thumb play__icon">
                <Link to={`/video/${video.videoId}`}>
                  <img src={video.img} alt={video.title} />
                </Link>
              </div>
              <div className="video__title">
                <Link to={`/video/${video.videoId}`}>{video.title}</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Main>
  );
};

export default Nct;
