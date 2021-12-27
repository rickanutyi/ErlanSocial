import React, { useContext, useEffect, useState } from "react";
import { useAuth } from "../../Contexts/AuthContext";
import "./Home.css";
import Hero from "../Hero/Hero";
import SideBar from "../SideBar/SideBar";
import Login from "../Auth/Login";
import { usersContext } from "../../Contexts/UserContext";
import { getUserId } from "../Auth/saveThisUser";
import Chat from "../Chat/Chat";

const Home = () => {
  const { user } = useAuth();

  if (!user) {
    return <Login />;
  }
  console.log(user);
  return (
    <div className="main">
      <SideBar />
      <Hero />
      {/* <Chat /> */}
    </div>
  );
};

export default Home;
