import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { postsContext } from "../../../Contexts/PostsContext";
import { usersContext } from "../../../Contexts/UserContext";
import "./Sub.css";

const Subscriptions = () => {
  const { posts, getPosts } = useContext(postsContext);
  const { subToTag, getMainUser, mainUser } = useContext(usersContext);
  const [isSub, setisSub] = useState(true);
  const [usern, setUser] = useState({});
  useEffect(() => {
    getMainUser();
  }, []);
  useEffect(() => {
    setUser(mainUser);
  }, [mainUser]);
  const subscribe = async (val) => {
    let [...subs] = usern.subscriptions;
    subs.push(val);
    console.log(mainUser);
    subToTag(mainUser.id, subs);
    getMainUser();
  };

  const unsub = async (val) => {
    let subs = usern.subscriptions.filter((elem) => elem !== val);
    console.log(subs);
    subToTag(usern.id, subs);
    getMainUser();
  };
  return (
    <div className="subscriptions">
      <div className="sub_item">
        Business{" "}
        {usern.subscriptions && !usern.subscriptions.includes("business") ? (
          <span onClick={() => subscribe("business")} className="sub">
            подписаться
          </span>
        ) : (
          <span onClick={() => unsub("business")} className="unsub">
            отписаться
          </span>
        )}
      </div>
      <div className="sub_item">
        Design{" "}
        {usern.subscriptions && !usern.subscriptions.includes("design") ? (
          <span onClick={() => subscribe("design")} className="sub">
            подписаться
          </span>
        ) : (
          <span onClick={() => unsub("design")} className="unsub">
            отписаться
          </span>
        )}
      </div>
      <div className="sub_item">
        Job{" "}
        {usern.subscriptions && !usern.subscriptions.includes("job") ? (
          <span onClick={() => subscribe("job")} className="sub">
            подписаться
          </span>
        ) : (
          <span onClick={() => unsub("job")} className="unsub">
            отписаться
          </span>
        )}
      </div>
      <div className="sub_item">
        Marketing{" "}
        {usern.subscriptions && !usern.subscriptions.includes("marketing") ? (
          <span onClick={() => subscribe("marketing")} className="sub">
            подписаться
          </span>
        ) : (
          <span onClick={() => unsub("marketing")} className="unsub">
            отписаться
          </span>
        )}
      </div>
      <div className="sub_item">
        Programming{" "}
        {usern.subscriptions && !usern.subscriptions.includes("programming") ? (
          <span onClick={() => subscribe("programming")} className="sub">
            подписаться
          </span>
        ) : (
          <span onClick={() => unsub("programming")} className="unsub">
            отписаться
          </span>
        )}
      </div>
      <div className="sub_item">
        Sport{" "}
        {usern.subscriptions && !usern.subscriptions.includes("sport") ? (
          <span onClick={() => subscribe("sport")} className="sub">
            подписаться
          </span>
        ) : (
          <span onClick={() => unsub("sport")} className="unsub">
            отписаться
          </span>
        )}
      </div>
      <div className="sub_item">
        Story{" "}
        {usern.subscriptions && !usern.subscriptions.includes("story") ? (
          <span onClick={() => subscribe("story")} className="sub">
            подписаться
          </span>
        ) : (
          <span onClick={() => unsub("story")} className="unsub">
            отписаться
          </span>
        )}
      </div>
      <div className="sub_item">
        Tech{" "}
        {usern.subscriptions && !usern.subscriptions.includes("tech") ? (
          <span onClick={() => subscribe("tech")} className="sub">
            подписаться
          </span>
        ) : (
          <span onClick={() => unsub("tech")} className="unsub">
            отписаться
          </span>
        )}
      </div>
    </div>
  );
};

export default Subscriptions;
