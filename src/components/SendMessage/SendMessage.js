import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";
import { usersContext } from "../../Contexts/UserContext";
import "./style/SendMessage.css";

const SendMessage = () => {
  const {
    getThisUser,
    getMainUser,
    mainUser,
    thisUser,
    sendMessage,
    getDirect,
    direct,
  } = useContext(usersContext);
  const { user } = useAuth();

  const [message, setMessage] = useState("");
  const [direction, setDirection] = useState([]);
  const navigate = useNavigate();

  const params = useParams();

  useEffect(() => {
    getMainUser(user.email);
  }, []);
  console.log(params);

  useEffect(() => {
    getDirect(params.chat);
  }, [params.chat]);

  useEffect(() => {
    setDirection(direct.direct);
  }, [direct, params.chat]);

  function createMessage() {
    if (!message) {
      return;
    }
    let newMessage = [...direction];
    let mesObj = {
      sender: user.email,
      senderAvatar: mainUser.avatar,
      date: Date.now(),
      isRead: false,
      message: message,
    };
    setMessage("");
    newMessage.push(mesObj);
    sendMessage(params.chat, newMessage);
  }

  // let flag = false;

  // for (let i = 0; i < mainUser.chats.length; i++) {
  //   for (let j = 0; j < thisUser.chats.length; j++) {
  //     if (mainUser.chats[i] === thisUser.chats[j]) {
  //       return (flag = true);
  //     }
  //   }
  // }
  // if (!flag) {
  //   navigate("/hero");
  // }
  //;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

  return (
    <div className="letters">
      <div className="letters_list">
        {direction
          ? direction.map((elem) => (
              <div
                style={{
                  marginRight: elem.sender == mainUser.email ? "0" : "auto",
                  textAlign: elem.sender == mainUser.email ? "right" : "left",
                  alignSelf:
                    elem.sender == mainUser.email ? "flex-end" : "flex-start",
                }}
                className="direct_messages"
                key={elem.id}
              >
                <span className="sender_email">
                  <img src={elem.senderAvatar} alt="" />
                  {elem.sender}
                </span>
                <br />
                <span className="message_item">{elem.message}</span>
              </div>
            ))
          : null}
      </div>
      <div className="letters_action">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
        />
        <button onClick={createMessage}>отправить</button>
      </div>
    </div>
  );
};

export default SendMessage;
