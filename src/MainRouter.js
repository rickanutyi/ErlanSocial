import React from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Login from "./components/Auth/Login";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import App from "./App";
import AuthContextProvider from "./Contexts/AuthContext";
import UsersContextProvider from "./Contexts/UserContext";
import UserPage from "./components/UserPage/UserPage";
import UpdateUser from "./components/UserPage/UodateUser/UpdateUser";
import PostsContextProvider from "./Contexts/PostsContext";
import CreatePost from "./components/UserPage/UserPosts/CreatePost/CreatePost";
import PostsCard from "./components/PostsCard/PostsCard";
import PostDetails from "./components/PostDetails/PostDetails";
import SearchPost from "./components/searchPost/SearchPost";
import AtherUser from "./components/AtherUser/AtherUser";
import SendMessage from "./components/SendMessage/SendMessage";
import Chat from "./components/Chat/Chat";
import Menu from "./components/Menu/Menu";
import SideBar from "./components/SideBar/SideBar";
import AdvertisingCard from "./components/AdvertisingCard/AdvertisingCard";
import Paymant from "./components/Paymant/Paymant";

function MainRoutes() {
  return (
    <PostsContextProvider>
      <AuthContextProvider>
        <UsersContextProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/Login" element={<Login />} />
              <Route path="/*" element={<Home />} />
              <Route path="/user-page/*" element={<UserPage />} />
              <Route path="/send-message/:id" element={<SendMessage />} />
              <Route path="/ather-user/:id" element={<AtherUser />} />
              <Route path="/update-user" element={<UpdateUser />} />
              <Route path="/create-post" element={<CreatePost />} />
              <Route path="/post-card" element={<PostsCard />} />
              <Route path="/post-details/:id" element={<PostDetails />} />
              <Route path="/search" element={<SearchPost />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/side-bar" element={<SideBar />} />
              <Route path="/reclam" element={<AdvertisingCard />} />
              {/* <Route path="/bot" element={<Bot />} /> */}
              <Route path="/paymant/:id" element={<Paymant />} />
            </Routes>
          </BrowserRouter>
        </UsersContextProvider>
      </AuthContextProvider>
    </PostsContextProvider>
  );
}
export default MainRoutes;
