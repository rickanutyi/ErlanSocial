import React from "react";
import "./styles/SideBar.css";
import Fire from "../../images/icons/fire.png";
import Fresh from "../../images/icons/fresh.png";
import Business from "../../images/icons/free-icon-money-179645.png";
import Book from "../../images/icons/book.png";
import Tech from "../../images/icons/technology.png";
import Proger from "../../images/icons/coding-language.png";
import Design from "../../images/icons/ux-design.png";
import Sport from "../../images/icons/sport.png";
import Marketing from "../../images/icons/bullhorn.png";
import Job from "../../images/icons/job.png";
import { useNavigate } from "react-router-dom";

const SideBar = ({ block, setOpen }) => {
  const navigate = useNavigate();
  function goToMenu(val) {
    navigate(val);
    if (setOpen) {
      setOpen(false);
    }
  }
  let style = { display: "block", textAlign: "center", width: "100%" };
  return (
    <div style={block ? style : null} className="side_bar-left">
      <ul className="side_bar-top">
        <li onClick={() => goToMenu("popular")}>
          <img width="20px" src={Fire} alt="" /> Популярное
        </li>
        <li onClick={() => goToMenu("fresh")}>
          <img width="20px" src={Fresh} alt="" /> Свежее
        </li>
        <li onClick={() => goToMenu("business")}>
          <img width="20px" src={Business} alt="" /> Бизнес
        </li>
        <li onClick={() => goToMenu("story")}>
          <img width="20px" src={Book} alt="" /> Личная история
        </li>
        <li onClick={() => goToMenu("tech")}>
          <img width="20px" src={Tech} alt="" /> Техника
        </li>
        <li onClick={() => goToMenu("programming")}>
          <img width="20px" src={Proger} alt="" /> Программирование
        </li>
        <li onClick={() => goToMenu("design")}>
          <img width="20px" src={Design} alt="" /> Дизайн
        </li>
        <li onClick={() => goToMenu("sport")}>
          <img width="20px" src={Sport} alt="" /> Спорт
        </li>
        <li onClick={() => goToMenu("marketing")}>
          <img width="20px" src={Marketing} alt="" /> Маркетинг
        </li>
        <li onClick={() => goToMenu("job")}>
          <img width="20px" src={Job} alt="" /> Работа
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
