import React, { useContext, useEffect, useState } from "react";
import { useAuth } from "../../Contexts/AuthContext";
import "./Home.css";
import Hero from "../Hero/Hero";
import SideBar from "../SideBar/SideBar";
import Login from "../Auth/Login";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import Popular from "../Categories/Popular";
import Fresh from "../Categories/Fresh";
import Business from "../Categories/Business";
import Story from "../Categories/Story";
import Tech from "../Categories/Tech";
import Programming from "../Categories/Programming";
import Design from "../Categories/Design";
import Sport from "../Categories/Sport";
import Marketing from "../Categories/Marketing";
import Job from "../Categories/Job";
import { usersContext } from "../../Contexts/UserContext";

const Home = () => {
  const { user } = useAuth();
  const params = useParams();
  const navigate = useNavigate();
  const { getUsers, users } = useContext(usersContext);
  const [usern, setUser] = useState({});

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    let us = users.filter((elem) => elem.email === user.email);
    setUser(us[0]);
  }, [users]);

  useEffect(() => {
    if (!params["*"]) {
      navigate("hero");
    }
  }, []);

  if (!user) {
    return <Login />;
  }

  return (
    <div className="main">
      <SideBar />
      {/* <Hero /> */}
      <Routes>
        <Route path="hero" element={<Hero usern={usern} />} />
        <Route path="popular" element={<Popular usern={usern} />} />
        <Route path="fresh" element={<Fresh usern={usern} />} />
        <Route path="business" element={<Business usern={usern} />} />
        <Route path="story" element={<Story usern={usern} />} />
        <Route path="tech" element={<Tech usern={usern} />} />
        <Route path="programming" element={<Programming usern={usern} />} />
        <Route path="design" element={<Design usern={usern} />} />
        <Route path="sport" element={<Sport usern={usern} />} />
        <Route path="marketing" element={<Marketing usern={usern} />} />
        <Route path="job" element={<Job usern={usern} />} />
      </Routes>
    </div>
  );
};

export default Home;
