import React, { useContext, useEffect, useState } from "react";
import "./style/PostCard.css";
import AuthorIcon from "../../images/icons/author-icon.png";
import { useNavigate } from "react-router-dom";
import Save from "../../images/icons/save.png";
import Saved from "../../images/icons/saved.png";
import Comments from "../../images/icons/comment.png";
import Up from "../../images/icons/up-arrow.png";
import Down from "../../images/icons/down-arrow.png";
import { postsContext } from "../../Contexts/PostsContext";
import { useAuth } from "../../Contexts/AuthContext";
import { usersContext } from "../../Contexts/UserContext";

const PostsCard = ({ elem, savePost, usern }) => {
  const navigate = useNavigate();
  const { likePost } = useContext(postsContext);
  const { addPostToSaves } = useContext(usersContext);
  const { user } = useAuth();
  // const [isLiked,setIsLiked] = useState(false)
  const [isSaved, setIsSaved] = useState(false);

  function addLike() {
    // console.log(elem.likes)
    let [...likes] = elem.likes;
    if (likes.includes(user.email)) {
      let dislike = likes.filter((elem) => elem !== user.email);
      likePost(dislike, elem.id);
    } else {
      likes.push(user.email);
      likePost(likes, elem.id);
    }
  }

  function savePost(elem) {
    let flag = false;
    let saved = [...usern.saved];

    // console.log(saved)
    saved.forEach((item) => {
      if (item.id == elem.id) {
        flag = true;
      }
    });
    if (flag) {
      saved = saved.filter((item) => item.id !== elem.id);
      setIsSaved(false);
    } else {
      saved.push(elem);
      setIsSaved(true);
    }
    addPostToSaves(saved, usern.id);
  }
  useEffect(() => {
    try {
      if (!usern.saved) throw Error("no saved");
      if (usern.saved) {
        usern.saved.forEach((item) => {
          if (item.id == elem.id) {
            setIsSaved(true);
          }
        });
      }
    } catch (error) {
      console.log(error);
    }
  }, [usern]);

  return (
    <div className="post_card">
      <div className="author">
        <div>
          {" "}
          <span onClick={() => navigate(`/ather-user/${elem.authorId}`)}>
            <img
              src={elem.authorAvatar ? elem.authorAvatar : AuthorIcon}
              alt=""
            />
            {elem.author}
          </span>
          <span>{elem.date}</span>
        </div>
        <div className="post_actions">
          <div className="action_item">
            {elem.likes ? (
              <img
                src={elem.likes.includes(user.email) ? Down : Up}
                alt=""
                onClick={addLike}
              />
            ) : (
              <img src={Up} alt="" onClick={addLike} />
            )}
          </div>
          <div className="action_item comments_icon">
            <img src={Comments} alt="" />
            <span className="comments-count">
              {elem.comments ? elem.comments.length : 0}
            </span>
          </div>
          <div className="action_item">
            <img
              src={isSaved ? Saved : Save}
              alt=""
              onClick={() => savePost(elem)}
            />
          </div>
        </div>
      </div>
      <div
        onClick={() => navigate(`/post-details/${elem.id}`)}
        className="card_title"
      >
        <h2>{elem.title}</h2>
      </div>
      <div
        onClick={() => navigate(`/post-details/${elem.id}`)}
        className="card_image"
      >
        <img src={elem.image} alt="" />
      </div>
      <div
        onClick={() => navigate(`/post-details/${elem.id}`)}
        className="card_text"
      >
        {elem.text}
      </div>
    </div>
  );
};

export default PostsCard;
