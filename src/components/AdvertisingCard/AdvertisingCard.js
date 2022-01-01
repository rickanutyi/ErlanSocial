import React from "react";
import { useNavigate } from "react-router-dom";
import "./AdvertisingCard.css";

const AdvertisingCard = ({ id }) => {
  const navigate = useNavigate();
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
        {/* <img
          src="https://img3.goodfon.ru/wallpaper/nbig/7/18/death-note-tetrad-smerti-l-2361.jpg"
          alt=""
        /> */}
        <span onClick={() => navigate(`/paymant/${id}`)}>убрать рекламу</span>
      </div>
    </div>
  );
};

export default AdvertisingCard;
