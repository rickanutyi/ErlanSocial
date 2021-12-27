import React, { useState } from "react";
import "./style/Menu.css";
import SideBar from "../SideBar/SideBar";
import { useAuth } from "../../Contexts/AuthContext";
import { useContext } from "react";
import { usersContext } from "../../Contexts/UserContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Menu = ({ setOpen }) => {
  const { user } = useAuth();
  const { users, getUsers } = useContext(usersContext);

  const [usern, setUser] = useState({});

  const navigate = useNavigate();
  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    users.forEach((elem) => {
      if (elem.email === user.email) {
        setUser(elem);
      }
    });
  }, [users]);

  function goPage() {
    navigate(`/user-page/${usern.id}`);
    setOpen(false);
  }

  let display = "block";
  return (
    <div className="menu">
      <div className="user-menu">
        <span>
          <img onClick={goPage} src={usern ? usern.avatar : null} alt="" />
        </span>
      </div>
      <div className="side">
        <SideBar block={display} />
      </div>
    </div>
  );
};

export default Menu;
