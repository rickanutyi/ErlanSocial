import React, { useContext, useEffect, useState } from "react";
import { postsContext } from "../../Contexts/PostsContext";
import PostsCard from "../PostsCard/PostsCard";

const Design = ({ usern }) => {
  const { getPosts, posts } = useContext(postsContext);

  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    let popular = posts.filter((elem) => elem.tags.includes("design"));
    let sortedPopular = popular.sort((a, b) => b.date2 - a.date2);
    setPopular(sortedPopular);
  }, [posts]);

  return (
    <div className="posts">
      <div className="posts_content">
        {popular
          ? popular.map((elem) => (
              <PostsCard elem={elem} key={elem.id} usern={usern} />
            ))
          : null}
      </div>
    </div>
  );
};

export default Design;
