import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postsContext } from "../../../../Contexts/PostsContext";
import { usersContext } from "../../../../Contexts/UserContext";
import { db, storage } from "../../../../firebase";
import { getUserId } from "../../../Auth/saveThisUser";
import { useAuth } from "../../../../Contexts/AuthContext";
import "./style/CreatePost.css";
import Avatar from "../../../../images/icons/author-icon.png";

const CreatePost = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [usern, setUser] = useState({});
  const { getThisUser, thisUser, users, getUsers } = useContext(usersContext);
  const { user } = useAuth();
  const { addIdPost } = useContext(postsContext);

  const navigate = useNavigate();

  useEffect(() => {
    getUsers();
  }, []);
  useEffect(() => {
    users.forEach((elem) => {
      if (elem.email === user.email) {
        setUser(elem);
      }
    });
  }, [users]);

  const checkbox = document.querySelectorAll(".tagsinp");
  const createPost = async () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + "/" + dd + "/" + yyyy;

    let tags2 = [];
    checkbox.forEach((item) => {
      if (item.checked) {
        tags2.push(item.value);
      }
      console.log(tags2);
    });

    if (!document.querySelector(".post-photo")) return;
    let input = document.querySelector(".post-photo");
    const file = input.files[0];
    if (!file) return;

    const storageRef = ref(storage, `${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on("storage_changed", null, null, async () => {
      getDownloadURL(uploadTask.snapshot.ref).then(async (res) => {
        let data = await addDoc(collection(db, "posts"), {
          title: postTitle,
          text: postText,
          tags: tags2,
          image: res,
          author: usern.name ? usern.name : usern.email,
          authorId: usern.id,
          date: today,
          comments: [],
          likes: [],
          authorAvatar: usern.avatar ? usern.avatar : null,
          date2: Date.now(),
        });
        addIdPost(data.id);
      });
    });
    navigate("/user-page");
  };
  return (
    <div className="create_post">
      <div className="create_post_form">
        <input
          type="text"
          placeholder="Загаловок"
          onChange={(e) => setPostTitle(e.target.value)}
        />

        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          onChange={(e) => setPostText(e.target.value)}
        />
        <div className="addPhoto">
          <input className="post-photo" type="file" id="file" name="file" />
          <label htmlFor="file">добавить фото</label>
        </div>
      </div>
      <div className="tags">
        <input
          value="programming"
          className="tagsinp"
          type="checkbox"
          id="programming"
          name="tags"
        />{" "}
        <label htmlFor="programming">Программирование</label>
        <input
          value="marketing"
          className="tagsinp"
          type="checkbox"
          id="marketing"
          name="tags"
        />{" "}
        <label htmlFor="marketing">Маркетинг</label>
        <input
          value="story"
          className="tagsinp"
          type="checkbox"
          id="story"
          name="tags"
        />{" "}
        <label htmlFor="story">Личная история</label>
        <input
          value="job"
          className="tagsinp"
          type="checkbox"
          id="job"
          name="tags"
        />{" "}
        <label htmlFor="job">Работа</label>
        <input
          value="business"
          className="tagsinp"
          type="checkbox"
          id="business"
          name="tags"
        />{" "}
        <label htmlFor="business">Бизнес</label>
        <input
          value="design"
          className="tagsinp"
          type="checkbox"
          id="design"
          name="tags"
        />{" "}
        <label htmlFor="design">Дизайн</label>
        <input
          value="sport"
          className="tagsinp"
          type="checkbox"
          id="sport"
          name="tags"
        />{" "}
        <label htmlFor="sport">Спорт</label>
        <input
          value="technology"
          className="tagsinp"
          type="checkbox"
          id="technology"
          name="tags"
        />{" "}
        <label htmlFor="technology">Техналогии</label>
      </div>

      <button onClick={createPost}>добавить</button>
      <button onClick={() => navigate("/user-page/posts")}>закрыть</button>
    </div>
  );
};

export default CreatePost;
