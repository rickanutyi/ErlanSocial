import { addDoc, collection } from "firebase/firestore";
import React, {
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import { useAuth } from "../../Contexts/AuthContext";
import { usersContext } from "../../Contexts/UserContext";
import { db } from "../../firebase";
import "./style/Chat.css";

const Chat = () => {
  const { user } = useAuth();
  const { users, getUsers, getChat, chat, getMainUser, mainUser } =
    useContext(usersContext);

  const [usern, setUser] = useState({});
  const [text, setText] = useState("");
  const ref = useRef(null);

  const scroll = (x) => {
    ref.current.scrollTop = 10000;
  };
  useEffect(() => {
    getMainUser(user.email);
    getChat();
    ref.current.scrollTop = 10000;
  }, []);
  console.log(ref);
  console.log(document.querySelector(".chat_content"));
  // useEffect(() => {
  //   ref.scrollTop();
  // }, []);

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
      email: mainUser.email,
      sender: mainUser.name ? mainUser.name : mainUser.email,
      date: Date.now(),
      message: text,
      image: mainUser.avatar,
    });
    scroll(300);
    setText("");
  }

  let chat2 = chat.sort((a, b) => a.date - b.date);
  return (
    <div className="chat">
      <div ref={ref} className="chat_content">
        {chat
          ? chat.map((elem) => (
              <div
                key={elem.id}
                style={{
                  textAlign: mainUser.email === elem.email ? "right" : "left",
                  alignSelf:
                    mainUser.email === elem.email ? "flex-end" : "flex-start",
                  backgroundColor: "rgba(0,0,0,0.1)",
                  padding: "10px",
                  borderRadius: "10px",
                  // display: "inline",
                  margin: "2px",
                  width: "50%",
                  marginBottom: "20px",
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
        <span id="scroll"></span>
      </div>
      <div className="chat_actions">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
        />
        <button
          onClick={() => {
            sandMessage();
          }}
        >
          sand
        </button>
      </div>
    </div>
  );
};

export default Chat;
