import React from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

import { artistText } from "../../data/artist";

const Artist = () => {
  return (
    <section id="artist">
      <h2>추천 아티스트</h2>
      <div className="artist__inner">
        <Swiper
          slidesPerView={4}
          spaceBetween={15}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 5,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 6,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 7,
              spaceBetween: 15,
            },
            1240: {
              slidesPerView: 8,
              spaceBetween: 15,
            },
            1640: {
              slidesPerView: 9,
              spaceBetween: 15,
            },
            2000: {
              slidesPerView: 10,
              spaceBetween: 20,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {artistText.map((artist, key) => (
            <SwiperSlide key={key}>
              <div className="artist">
                <div className="artist__img play__icon">
                  <Link to={`/channel/${artist.channelId}`}>
                    <img src={artist.img} alt={artist.name} />
                  </Link>
                </div>
                <div className="artist__info">
                  <Link to={`/channel/${artist.channelId}`}>{artist.name}</Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Artist;
