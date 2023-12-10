import React from "react";
import { Link } from "react-router-dom";

import Main from "../components/section/Main";

import { riizeText } from "../data/riize";

const Riize = () => {
  return (
    <Main title="RIIZE 영상" description="RIIZE 영상입니다.">
      <section id="riizePage">
        <h2>RIIZE</h2>
        <div className="video__inner">
          {riizeText.map((video, key) => (
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

export default Riize;
