import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { postsContext } from "../../../Contexts/PostsContext";
import { usersContext } from "../../../Contexts/UserContext";
import PostsCard from "../../PostsCard/PostsCard";
import "./style/UserPosts.css";

const UserPosts = ({ usern }) => {
  const { usersPosts, getUsersPosts } = useContext(postsContext);
  const {} = useContext(usersContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getUsersPosts(usern.id);
  }, [usern]);
  useEffect(() => {
    let sortPOsts = usersPosts.sort((a, b) => b.date2 - a.date2);
    setPosts(sortPOsts);
  }, [usersPosts]);
  return (
    <div className="user_posts">
      {posts ? (
        posts.map((elem) => (
          <PostsCard key={elem.id} elem={elem} usern={usern} />
        ))
      ) : (
        <div className="posts_title">
          <p>
            Если у вас есть интересная идея для статьи, не стесняйтесь <br /> и
            скорее начинайте писать
          </p>
          <button>создать запись</button>
        </div>
      )}
    </div>
  );
};

export default UserPosts;
