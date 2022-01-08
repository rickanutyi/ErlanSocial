import React, { useEffect } from "react";
import "./Messages.css";
import { useContext } from "react";
import { useAuth } from "../../../Contexts/AuthContext";
import { usersContext } from "../../../Contexts/UserContext";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import Mail from "../../../images/icons/mail.png";

const Messages = () => {
  const { getChats, directs, getMainUser, mainUser } = useContext(usersContext);
  const { user } = useAuth();
  const [chats, setChats] = useState([]);

  const params = useParams();
  const navigate = useNavigate();
  //www
  useEffect(() => {
    getChats();
    getMainUser(user.email);
  }, []);
  //www
  // useEffect(() => {
  //   setChats(directs);
  // }, [directs]);
  //www
  console.log(directs);
  let directs2 = directs.filter((elem) => {
    if (elem.users.includes(`${mainUser.email}`)) {
      return elem;
    }
    console.log(elem.users.includes(`${mainUser.email}`));
  });
  console.log(mainUser.chats);
  function goToRoom(elem) {
    console.log(elem.usersId[1]);
    for (let i = 0; i < 2; i++) {
      let id = elem.usersId[1];
      let id2 = elem.usersId[0];
      if (elem.usersId[0] === mainUser.id) {
        navigate(`/send-message/${elem.usersId[1]}/${elem.id}`);
        return;
      } else {
        navigate(`/send-message/${elem.usersId[0]}/${elem.id}`);
        return;
      }
    }
  }
  return (
    <div className="all_directs">
      {directs2
        ? directs2.map((elem) => (
            <div
              onClick={(e) => goToRoom(elem)}
              key={elem.id}
              className="directs"
            >
              <img width="40px" height="40px" src={Mail} alt="" />
              {elem.users[0] === user.email ? elem.users[1] : elem.users[0]}
            </div>
          ))
        : "loading"}
    </div>
  );
};

export default Messages;
