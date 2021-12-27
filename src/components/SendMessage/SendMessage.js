import { doc, updateDoc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";
import { usersContext } from "../../Contexts/UserContext";
import { db } from "../../firebase";
import "./style/SendMessage.css";

const SendMessage = () => {
  const { getThisUser, thisUser, getUsers, users } = useContext(usersContext);
  const { user } = useAuth();

  const [message, setMessage] = useState("");
  // const [gEmail,setGEmail] = useState('')
  const [usern, setUser] = useState({});
  const navigate = useNavigate();

  const params = useParams();

  useEffect(() => {
    getThisUser(params.id);
  }, []);

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    users.forEach((elem) => {
      console.log(elem.email);
      if (elem.email == user.email) {
        setUser(elem);
      }
    });
  }, [users]);

  // let data = await addDoc(collection(db, "users"), {
  //       email: email,
  //       date: today,
  //       avatar: null,
  //       posts: [],
  //       friends: [],
  //       raiting: 0,
  //       userStatus: null,
  //       messages: [],
  //       saved: [],
  //     })
  function sendMessage() {
    let mesObj = {
      sender: user.email,
      date: Date.now(),
      isRead: false,
      message: message,
    };
  }
  //;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

  return (
    <div className="letters">
      <div className="letters_list"></div>
      <div className="letters_action">
        <input onChange={(e) => setMessage(e.target.value)} type="text" />
        <button>отправить</button>
      </div>
    </div>
  );
};

export default SendMessage;
