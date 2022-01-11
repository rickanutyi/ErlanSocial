import React, { useContext } from "react";
import { useAuth } from "../../Contexts/AuthContext";
import "./style/Login.css";
import Logo from "../../images/image__1_-removebg-preview.png";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { usersContext } from "../../Contexts/UserContext";
import { saveUserId } from "./saveThisUser";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const Login = () => {
  const {
    handleSignUp,
    passwordError,
    emailError,
    setEmail,
    setPassword,
    user,
    handleLogIn,
    email,
    password,
    forgotPassword,
  } = useAuth();

  const { addIdUser } = useContext(usersContext);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  async function createUser() {
    if (!password || !email) return;
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + "/" + dd + "/" + yyyy;

    let data = await addDoc(collection(db, "users"), {
      email: email,
      date: today,
      avatar: null,
      posts: [],
      friends: [],
      raiting: 0,
      userStatus: null,
      messages: [],
      saved: [],
      chats: [],
      subscriptions: [],
      name: "",
    });
    // console.log(data.id);
    handleSignUp();
    addIdUser(data.id);
    saveUserId(data.id);
  }

  function login() {
    handleLogIn();
    navigate("/hero");
  }

  useEffect(() => {
    if (user) {
      navigate("/hero");
    }
  });
  return (
    <div className="login">
      <div className="login_card">
        <div className="auth_title">
          <img src={Logo} alt="" />
        </div>
        <div className="login_content">
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
          <p>{emailError}</p>
          <input
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
          <p>{passwordError}</p>

          <button onClick={login}>войти</button>
          <button onClick={createUser}>зарегистрироваться</button>
          <button onClikc={() => navigate("/password")}>
            <Link to="/password">забыли пароль?</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
