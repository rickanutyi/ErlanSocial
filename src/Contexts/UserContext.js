import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  query,
  updateDoc,
} from "firebase/firestore";
import React, { createContext, useReducer } from "react";
import {
  GET_CHAT,
  GET_DIRECT,
  GET_MAIN_USER,
  GET_THIS_USER,
  GET_USERS,
} from "../conts/const";
import { db } from "../firebase";
import { useAuth } from "./AuthContext";

export const usersContext = createContext();

const INIT_STATE = {
  users: [],
  thisUser: {},
  chat: [],
  mainUser: {},
  direct: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.payload };
    case GET_THIS_USER:
      return { ...state, thisUser: action.payload };
    case GET_CHAT:
      return { ...state, chat: action.payload };
    case GET_MAIN_USER:
      return { ...state, mainUser: action.payload };
    case GET_DIRECT:
      return { ...state, direct: action.payload };
    default:
      return state;
  }
};

const UsersContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const { user } = useAuth();
  const q = query(collection(db, "users"));
  const qm = query(collection(db, "chat"));
  const qmes = query(collection(db, "messages"));

  function getUsers() {
    ////////////////////////////////////get users
    onSnapshot(q, (querySnapshot) => {
      const usersList = [];

      querySnapshot.forEach((doc) => {
        usersList.push({ ...doc.data(), id: doc.id });
      });
      // console.log(usersList)
      dispatch({
        type: GET_USERS,
        payload: usersList,
      });
    });
  }

  // get thisUser ////////////////////
  // const userRef = collection(db, "users");
  // let user = query(userRef,where("email", "==", "erlan11@gmail.com"))
  const getThisUser = async (id) => {
    const docRef = doc(db, "users", `${id}`);
    const docSnap = await getDoc(docRef);

    dispatch({
      type: GET_THIS_USER,
      payload: docSnap.data(),
    });
  };
  //add id
  const addIdUser = (id) => {
    let userRef = doc(db, "users", `${id}`);
    updateDoc(userRef, {
      id: id,
    });
  };
  //update user avatar
  const updateUser = (uid, changes) => {
    let userRef = doc(db, "users", `${uid}`);
    updateDoc(userRef, {
      avatar: changes.img,
      name: changes.name,
    });
  };
  //update user name
  const updateUserName = (uid, name) => {
    let userRef = doc(db, "users", `${uid}`);
    updateDoc(userRef, {
      name: name,
    });
  };
  // saved d
  function addPostToSaves(saves, uid) {
    let userRef = doc(db, "users", `${uid}`);
    updateDoc(userRef, {
      saved: saves,
    });
  }

  //sub
  const subToTag = (uid, val) => {
    let userRef = doc(db, "users", `${uid}`);
    updateDoc(userRef, {
      subscriptions: val,
    });
  };
  //send message
  // function sendMessage(sid,gid,data){
  //     let userRef = doc(db,'users',`${sid}`)
  //     updateDoc(userRef,{
  //         messages: data
  //     })

  //     let userRef2 = doc(db,'users',`${gid}`)
  //     updateDoc(userRef2,{
  //         messages
  //     })
  // }

  function getChat() {
    ////////////////////////////////////get users
    onSnapshot(qm, (querySnapshot) => {
      const chat = [];

      querySnapshot.forEach((doc) => {
        chat.push({ ...doc.data(), id: doc.id });
      });
      // console.log(usersList)
      dispatch({
        type: GET_CHAT,
        payload: chat,
      });
    });
  }
  //change status
  async function changeStatus(uid) {
    let userRef = doc(db, "users", `${uid}`);
    updateDoc(userRef, {
      premium: true,
    });
  }
  //
  async function getMainUser() {
    // getUsers();

    state.users.forEach((elem) => {
      if (elem.email === user.email) {
        dispatch({
          type: GET_MAIN_USER,
          payload: elem,
        });
      }
    });
  }
  //get direct

  async function getDirect(id) {
    // const docRef = doc(db, "messages", `${id}`);
    // const docSnap = await getDoc(docRef);
    // console.log(docSnap.data());
    // dispatch({
    //   type: GET_DIRECT,
    //   payload: docSnap.data(),
    // });

    onSnapshot(qmes, (querySnapshot) => {
      let direct = {};

      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        if (doc.id === id) {
          direct = { ...doc.data() };
        }
      });
      dispatch({
        type: GET_DIRECT,
        payload: direct,
      });
    });
  }

  async function sendMessage(id, dir) {
    let userRef = doc(db, "messages", `${id}`);
    updateDoc(userRef, {
      direct: dir,
    });
  }

  const values = {
    users: state.users,
    getUsers,
    getThisUser,
    addIdUser,
    thisUser: state.thisUser,
    updateUser,
    updateUserName,
    addPostToSaves,
    getChat,
    chat: state.chat,
    subToTag,
    changeStatus,
    getMainUser,
    mainUser: state.mainUser,
    getDirect,
    direct: state.direct,
    sendMessage,
  };

  return (
    <usersContext.Provider value={values}>{children}</usersContext.Provider>
  );
};
export default UsersContextProvider;
