import React, { useContext, useEffect, useState } from "react";
import { usersContext } from "../../Contexts/UserContext";
import { postsContext } from "../../Contexts/PostsContext";
import "./style/Hero.css";
import PostsCard from "../PostsCard/PostsCard";
import { useAuth } from "../../Contexts/AuthContext";

const Hero = ({ usern }) => {
  // const {getUsers,users} = useContext(usersContext)
  const { posts, getPosts } = useContext(postsContext);
  const { getUsers, users, addPostToSaves } = useContext(usersContext);
  const { user } = useAuth();

  const [post, setPost] = useState([]);

  useEffect(() => {
    getPosts();
    // getUsers()
  }, []);

  useEffect(() => {
    try {
      let subPosts = posts.filter((elem) => {
        for (let i = 0; i < usern.subscriptions.length; i++) {
          for (let y = 0; y < elem.tags.length; y++) {
            if (elem.tags[y] === usern.subscriptions[i]) {
              return elem;
            }
          }
        }
      });
      let sortSubPosts = subPosts.sort((a, b) => b.date2 - a.date2);
      setPost(sortSubPosts);
      console.log(subPosts);
    } catch (errorn) {
      console.error();
    }
  }, [posts]);

  // useEffect(()=>{

  //     users.forEach(elem => {
  //         if(elem.email === user.email){
  //             setUser(elem)
  //         }
  //     })
  // },[users])

  return (
    <div className="Hero">
      <div className="hero_content">
        {post
          ? post.map((elem) => (
              <PostsCard key={elem.id} elem={elem} usern={usern} />
            ))
          : null}
      </div>
    </div>
  );
};

export default Hero;
