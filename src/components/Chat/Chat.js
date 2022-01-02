import { addDoc, collection } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { useAuth } from "../../Contexts/AuthContext";
import { usersContext } from "../../Contexts/UserContext";
import { db } from "../../firebase";
import "./style/Chat.css";

const Chat = () => {
  const { user } = useAuth();
  const { users, getUsers, getChat, chat } = useContext(usersContext);

  const [usern, setUser] = useState({});
  const [text, setText] = useState("");

  useEffect(() => {
    getUsers();
    getChat();
  }, []);

  useEffect(() => {
    users.forEach((elem) => {
      if (elem.email === user.email) {
        setUser(elem);
      }
    });
  }, [users]);

  async function sandMessage() {
    if (!text.trim()) return;
    let data = await addDoc(collection(db, "chat"), {
      email: usern.email,
      sender: usern.name ? usern.name : usern.email,
      date: Date.now(),
      message: text,
      image: usern.avatar,
    });
    console.log(chat);
  }

  let chat2 = chat.sort((a, b) => a.date - b.date);
  return (
    <div className="chat">
      <div className="chat_content">
        {chat
          ? chat.map((elem) => (
              <div
                key={elem.id}
                style={{
                  textAlign: usern.email === elem.email ? "right" : "left",
                  alignSelf:
                    usern.email === elem.email ? "flex-end" : "flex-start",
                  backgroundColor: "rgba(0,0,0,0.1)",
                  padding: "10px",
                  borderRadius: "10px",
                  // display: "inline",
                  margin: "2px",
                  width: "50%",
                  marginBottom: "50px",
                }}
              >
                <img
                  width="40px"
                  height="40px"
                  src={elem.image ? elem.image : null}
                  alt=""
                />
                <span style={{ color: "green" }}>
                  {elem.sender ? elem.sender : null}
                </span>
                <br />
                <span
                  style={{
                    display: "inline-block",
                    textAlign: "center",
                    // height: "300px",
                    width: "100%",
                    overflow: "hidden",
                    display: "flex",
                    justifyContent: "center",
                    margin: "2px",
                    fontSize: "1.2rem",
                    padding: "4px",
                  }}
                >
                  {elem.message}
                </span>
              </div>
            ))
          : null}
      </div>
      <div className="chat_actions">
        <input onChange={(e) => setText(e.target.value)} type="text" />
        <button onClick={sandMessage}>sand</button>
      </div>
    </div>
  );
};

export default Chat;
