import React, { useContext, useEffect, useState } from "react";
import "./style/UserPage.css";
import { useAuth } from "../../Contexts/AuthContext";
import { usersContext } from "../../Contexts/UserContext";
import UserPosts from "./UserPosts/UserPosts";
import { Link, Outlet, Route, Routes } from "react-router-dom";
//icons
import Settings from "../../images/icons/setting.svg";
import Monster from "../../images/icons/monster.png";
import { useNavigate, useParams } from "react-router-dom";
import Saved from "./Saved/Saved";
import Messages from "./Messages/Messages";
import Subscriptions from "./Subscriptions/Subscriptions";

const UserPage = () => {
  const { user, handleLogOut } = useAuth();
  const { getMainUser, mainUser } = useContext(usersContext);
  // const {getUsersPosts,usersPosts} = useContext(postsContext)

  const navigate = useNavigate();

  let span = document.querySelectorAll(".inactive");
  //;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
  function changeStatus(e) {
    span.forEach((elem) => {
      elem.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  }
  //*!;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
  useEffect(() => {
    getMainUser(user.email);
  }, []);

  //;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
  console.log(mainUser);
  //;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
  function out() {
    localStorage.removeItem("userID");
    handleLogOut();
    navigate("/");
  }
  //    console.log(Date.now())
  return (
    <div className="user_page">
      <div className="user_content">
        <div className="about_user">
          <div className="avatar">
            <div className="user_photo">
              {mainUser.avatar ? (
                <img src={mainUser.avatar} alt="avatar" />
              ) : (
                <img src={Monster} alt="avatar" />
              )}
            </div>
            <div className="user_name">
              {mainUser.name ? mainUser.name : mainUser.email}
            </div>
            <div className="user_date">
              в стае с {mainUser ? mainUser.date : "w"}
            </div>
            <span className="out" onClick={out}>
              выйти
            </span>
          </div>
          <div className="user_action">
            <div className="actions">
              <div
                onClick={() => navigate("/create-post")}
                className="create_post-btn"
              >
                <span>Создать пост</span>
              </div>
              <div
                onClick={() => navigate("/update-user")}
                className="settings"
              >
                <img className="img" src={Settings} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="user_menu">
          <Link
            onClick={(e) => changeStatus(e, "pos")}
            className="active inactive"
            to="posts"
          >
            <span>статьи</span>
          </Link>
          <Link
            onClick={(e) => changeStatus(e, "sav")}
            className="inactive"
            to="messages"
          >
            <span>сообщения</span>
          </Link>
          <Link
            onClick={(e) => changeStatus(e, "sav")}
            className="inactive"
            to="subscriptions"
          >
            <span>подписки</span>
          </Link>
          <Link
            onClick={(e) => changeStatus(e, "sav")}
            className="inactive"
            to="saved"
          >
            <span>сохраненные</span>
          </Link>
        </div>
      </div>
      <Routes>
        <Route path="posts" element={<UserPosts usern={mainUser} />} />
        <Route path="saved" element={<Saved usern={mainUser} />} />
        <Route path="messages" element={<Messages />} />
        <Route
          path="subscriptions"
          element={<Subscriptions usern={mainUser} />}
        />
      </Routes>
    </div>
  );
};

export default UserPage;
