import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";
import { postsContext } from "../../Contexts/PostsContext";
import { usersContext } from "../../Contexts/UserContext";
import PostComments from "./PostComments/PostComments";
import "./style/PostDetails.css";
import AdvertisingCard from "../AdvertisingCard/AdvertisingCard";

const PostDetails = () => {
  const {
    getCurrentPost,
    currentPost,
    updatePost,
    getSamePosts,
    samePosts,
    deleteComment,
  } = useContext(postsContext);
  const { mainUser, getMainUser } = useContext(usersContext);
  const { user } = useAuth();
  const [message, setMessage] = useState("");
  const [usern, setUser] = useState({});

  let params = useParams().id;
  const navigate = useNavigate();

  useEffect(() => {
    getCurrentPost(params);
    getMainUser(user.email);
  }, [params]);

  // useEffect(() => {
  //   users.forEach((elem) => {
  //     if (elem.email === user.email) {
  //       setUser(elem);
  //     }
  //   });
  // }, [users]);
  useEffect(() => {
    setUser(mainUser);
  }, [mainUser]);
  useEffect(() => {
    getSamePosts(currentPost[0] ? currentPost[0].tags : null);
  }, [currentPost]);
  //
  function createComment() {
    let comment = {
      userAvatar: mainUser.avatar ? mainUser.avatar : null,
      user: mainUser.name ? mainUser.name : mainUser.email,
      comment: message,
      id: Date.now(),
    };
    console.log(currentPost);
    let comments = [...currentPost[0].comments];

    comments.push(comment);
    console.log(comments);
    updatePost(comments, currentPost[0].id);
    setMessage("");
  }
  // console.log(samePosts);
  // console.log(currentPost[0].tags);
  return (
    <div className="details">
      <div className="details_content">
        <div className="details-flex">
          <div className="recom">
            <span className="recom_title">Похожие статьи</span>
            {samePosts
              ? samePosts.map((elem) => (
                  <div
                    onClick={() => navigate(`/post-details/${elem.id}`)}
                    className="same_posts"
                  >
                    {elem.title}
                  </div>
                ))
              : null}
          </div>
          <div className="post_date">
            {currentPost[0] ? currentPost[0].date : "loading"}
          </div>
          <div className="details_titl">
            <h2>{currentPost[0] ? currentPost[0].title : null}</h2>
          </div>
          <div className="details_img">
            <img src={currentPost[0] ? currentPost[0].image : null} alt="" />
          </div>
          {usern.premium ? null : (
            <AdvertisingCard id={currentPost[0] ? currentPost[0].id : null} />
          )}
          <div className="details_text">
            {currentPost[0] ? currentPost[0].text : null}
          </div>
          <div
            className="post_author"
            onClick={() => navigate(`/ather-user/${currentPost[0].authorId}`)}
          >
            <span className="user_avatar_comment">
              <img
                src={currentPost[0] ? currentPost[0].authorAvatar : null}
                alt=""
              />
            </span>
            {currentPost[0] ? currentPost[0].author : null}
          </div>
        </div>
        <hr />
        {currentPost[0]
          ? currentPost[0].comments.map((elem) => (
              <>
                <div key={elem.comment} className="post_comments">
                  <span className="ab_user">
                    <span className="user_avatar_comment">
                      <img
                        src={elem.userAvatar ? elem.userAvatar : null}
                        alt=""
                      />
                    </span>
                    {elem.user}
                  </span>
                  <span>{elem.comment}</span>
                </div>
                {elem.user == mainUser.name || mainUser.email === elem.user ? (
                  <>
                    <span
                      onClick={() => deleteComment(currentPost[0], elem.id)}
                      className="comment_action"
                    >
                      удалить
                    </span>
                    <span className="comment_action">изменить</span>
                  </>
                ) : null}
              </>
            ))
          : "нет комментариев"}
        <PostComments
          setMessage={setMessage}
          createComment={createComment}
          message={message}
        />
      </div>
    </div>
  );
};

export default PostDetails;
