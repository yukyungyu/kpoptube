import React from "react";
import Main from "../components/section/Main";

import { Link } from "react-router-dom";
import { artistText } from "../data/artist";

const Artist = () => {
  return (
    <Main title="케이팝 아티스트" description="케이팝 아티스트 페이지입니다.">
      <section id="artistPage">
        <h2>추천 아티스트</h2>
        <div className="artist__inner">
          {artistText.map((artist, key) => (
            <div className="artist" key={key}>
              <div className="artist__img play__icon">
                <Link to={`/channel/${artist.channelId}`}>
                  <img src={artist.img} alt={artist.name} />
                </Link>
              </div>
              <div className="artist__info">
                <Link to={`/channel/${artist.channelId}`}>{artist.name}</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Main>
  );
};

export default Artist;
