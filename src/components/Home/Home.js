import React, { useContext, useEffect, useState } from "react";
import { useAuth } from "../../Contexts/AuthContext";
import "./Home.css";
import Hero from "../Hero/Hero";
import SideBar from "../SideBar/SideBar";
import Login from "../Auth/Login";
import { Route, Routes } from "react-router-dom";
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

const Home = () => {
  const { user } = useAuth();

  if (!user) {
    return <Login />;
  }
  // console.log(user);
  return (
    <div className="main">
      <SideBar />
      {/* <Hero /> */}
      <Routes>
        <Route path="hero" element={<Hero />} />
        <Route path="popular" element={<Popular />} />
        <Route path="fresh" element={<Fresh />} />
        <Route path="business" element={<Business />} />
        <Route path="story" element={<Story />} />
        <Route path="tech" element={<Tech />} />
        <Route path="programming" element={<Programming />} />
        <Route path="design" element={<Design />} />
        <Route path="sport" element={<Sport />} />
        <Route path="marketing" element={<Marketing />} />
        <Route path="job" element={<Job />} />
      </Routes>
    </div>
  );
};

export default Home;
