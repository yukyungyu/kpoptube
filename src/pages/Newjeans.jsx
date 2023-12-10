import React from "react";
import { Link } from "react-router-dom";

import Main from "../components/section/Main";

import { newjeansText } from "../data/newjeans";

/* pages/newjeans */
const Newjeans = () => {
  return (
    <Main title="NewJeans 영상" description="NewJeans 영상입니다.">
      <section id="newjeansPage">
        <h2>NewJeans</h2>
        <div className="video__inner">
          {newjeansText.map((video, key) => (
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

export default Newjeans;
