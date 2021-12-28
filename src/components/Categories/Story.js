import React, { useContext, useEffect, useState } from "react";
import { postsContext } from "../../Contexts/PostsContext";
import PostsCard from "../PostsCard/PostsCard";

const Story = () => {
  const { getPosts, posts } = useContext(postsContext);

  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    let popular = posts.sort((a, b) => b.comments.length - a.comments.length);
    setPopular(popular);
  }, [posts]);

  return (
    <div className="posts">
      <div className="posts_content">
        {popular
          ? popular.map((elem) => <PostsCard elem={elem} key={elem.id} />)
          : null}
      </div>
    </div>
  );
};

export default Story;
