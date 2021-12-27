import React, { useContext, useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { usersContext } from "../../Contexts/UserContext";
import "./style/AtherUser.css";

import { useAuth } from "../../Contexts/AuthContext";

const AtherUser = () => {
  const { getThisUser, thisUser } = useContext(usersContext);
  const { user } = useAuth();

  const navigate = useNavigate();

  const params = useParams();
  useEffect(() => {
    getThisUser(params.id);
  }, []);

  // useEffect(()=>{
  //     if(thisUser.email===user.email) navigate('/user-page/posts')
  // },[thisUser])
  // console.log(thisUser)
  return (
    <div className="ather_user">
      <div className="ather_user-left">
        <div className="ather_user_avatar">
          <img src={thisUser ? thisUser.avatar : null} alt="" />
        </div>
        <div className="ather_user_name">
          {thisUser ? thisUser.name || thisUser.email : null}
        </div>
        <div className="ather_user_date">{thisUser ? thisUser.date : null}</div>
      </div>
      <div
        onClick={() => navigate(`/send-message/${thisUser.id}`)}
        className="ather_user-right"
      >
        <span className="send_message">написать</span>
      </div>
    </div>
  );
};

export default AtherUser;
