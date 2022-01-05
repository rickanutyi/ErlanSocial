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
    getThisUser(params.id);
    getMainUser();
  }, []);
  console.log(params);

  useEffect(async () => {
    getDirect(params.chat);
  }, []);

  useEffect(() => {
    setDirection(direct.direct);
  }, [direct]);
  console.log(direction);

  function createMessage() {
    let newMessage = [...direction];
    let mesObj = {
      sender: user.email,
      date: Date.now(),
      isRead: false,
      message: message,
    };
    setMessage("");
    newMessage.push(mesObj);
    sendMessage(params.chat, newMessage);
  }
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
                  <img
                    src={
                      elem.sender === mainUser.email
                        ? mainUser.avatar
                        : thisUser.avatar
                    }
                    alt=""
                  />
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
