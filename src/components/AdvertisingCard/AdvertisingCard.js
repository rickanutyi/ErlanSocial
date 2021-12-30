import React from "react";
import "./AdvertisingCard.css";

const AdvertisingCard = () => {
  return (
    <div className="reclam">
      <div className="reclam_title">Тут реклама</div>
      <div className="reclam_text">
        Тут какой-то текст Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Et aliquam eius magnam, voluptas eveniet iste consequatur vero
        veritatis, sit repudiandae fuga! Natus veniam, obcaecati voluptatem
        reiciendis temporibus optio cumque dignissimos.
      </div>
      <div className="reclam_image">
        <img
          src="https://img3.goodfon.ru/wallpaper/nbig/7/18/death-note-tetrad-smerti-l-2361.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default AdvertisingCard;
