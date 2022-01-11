import React, { useContext, useEffect, useState } from "react";
import "./style/Header.css";
import { useAuth } from "../../Contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { usersContext } from "../../Contexts/UserContext";
import { getUserId } from "../Auth/saveThisUser";
import MainLogo from "../../images/image_3-removebg-preview.png";
import Messages from "../../images/icons/messages.png";
import SearchPost from "../searchPost/SearchPost";
import Menu from "../Menu/Menu";
import { postsContext } from "../../Contexts/PostsContext";

const Header = () => {
  const { user, handleLogOut } = useAuth();
  const { thisUser, getThisUser, getMainUser, mainUser } =
    useContext(usersContext);
  const { getPosts } = useContext(postsContext);
  const navigate = useNavigate();
  const [userm, setUser] = useState({});
  const [searching, setSearching] = useState("");
  // console.log(user)
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getMainUser(user.email);
    setOpen(false);
  }, []);

  useEffect(() => {
    setUser(mainUser);
  }, [mainUser]);
  // useEffect(() => {
  //   if (!user) return;
  //   users.forEach((elem) => {
  //     if (elem.email === user.email) {
  //       setUser(elem);
  //       // console.log(elem)
  //     }
  //   });
  // }, [users]);
  function mainPage() {
    getPosts();
  }

  function openMenu() {
    document.querySelector(".menu-item").classList.toggle("bg-menu-active");
    setOpen(!open);
  }

  return (
    <div className="Header">
      {open ? <Menu setOpen={setOpen} /> : null}
      <div className="header_content">
        <div className="header-left">
          <Link to="hero">
            <img onClik={mainPage} src={MainLogo} alt="" />
          </Link>
          <div className="searche">
            <input
              type="text"
              placeholder="поиск"
              onChange={(e) => setSearching(e.target.value)}
            />
            {searching ? (
              <SearchPost searching={searching} setSearching={setSearching} />
            ) : null}
          </div>
        </div>
        {/* menu */}
        <div onClick={openMenu} className="burger-menu">
          <div className="bg-menu">
            <span className="menu-item"></span>
          </div>
        </div>
        {/* k */}
        <div className="header-right">
          {userm ? (
            <div className="user_items">
              <div className="header_avatar">
                <img onClick={() => navigate("/chat")} src={Messages} alt="" />
              </div>
              <div
                onClick={() => navigate("/user-page/posts")}
                className="header_avatar"
              >
                <img src={userm ? userm.avatar : null} alt="" />
              </div>
            </div>
          ) : (
            <span onClick={() => navigate("/login")}>войти</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
