import React, { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { usersContext } from "../../Contexts/UserContext";
import "./style/AtherUser.css";
import UserPosts from "../UserPage/UserPosts/UserPosts";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

const AtherUser = () => {
  const { getThisUser, thisUser, getMainUser, mainUser } =
    useContext(usersContext);
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  const params = useParams();
  useEffect(() => {
    getMainUser();
  }, []);
  useEffect(() => {
    setUser(mainUser);
  }, [mainUser]);
  console.log(mainUser);
  useEffect(() => {
    getThisUser(params.id);
  }, []);
  // useEffect(()=>{
  //     if(thisUser.email===user.email) navigate('/user-page/posts')
  // },[thisUser])
  // console.log(thisUser)
  async function createChat() {
    for (let i = 0; i < mainUser.chats.length; i++) {
      for (let j = 0; j < thisUser.chats.length; j++) {
        if (mainUser.chats[i] === thisUser.chats[j]) {
          navigate(`/send-message/${thisUser.id}/${mainUser.chats[i]}`);
          return;
        }
      }
    }
    let data = await addDoc(collection(db, "messages"), {
      direct: [],
    });
    let chats = [...mainUser.chats];
    chats.push(data.id);
    let userRef = doc(db, "users", `${mainUser.id}`);
    updateDoc(userRef, {
      chats: chats,
    });
    let chats2 = [...thisUser.chats];
    chats2.push(data.id);
    let userRef2 = doc(db, "users", `${thisUser.id}`);
    updateDoc(userRef2, {
      chats: chats2,
    });

    navigate(`/send-message/${thisUser.id}/${data.id}`);
  }
  return (
    <>
      <div className="ather_user">
        <div className="ather_user-left">
          <div className="ather_user_avatar">
            <img src={thisUser ? thisUser.avatar : null} alt="" />
          </div>
          <div className="ather_user_name">
            {thisUser ? thisUser.name || thisUser.email : null}
          </div>
          <div className="ather_user_date">
            {thisUser ? thisUser.date : null}
          </div>
        </div>
        <div onClick={() => createChat()} className="ather_user-right">
          <span className="send_message">написать</span>
        </div>
      </div>
      <UserPosts usern={thisUser} mainUser={user} />
    </>
  );
};

export default AtherUser;
