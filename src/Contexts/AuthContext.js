import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "@firebase/auth";
import { getDoc } from "firebase/firestore";
import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { saveUserId } from "../components/Auth/saveThisUser";
import { GET_USER } from "../conts/const";
import { auth } from "../firebase";

const authContext = createContext();

export const useAuth = () => {
  return useContext(authContext);
};
const INIT_STATE = {
  user: {},
};
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  // const [user, setUser] = useState('')
  const [hasAccount, setHasAccount] = useState("");

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const handleSignUp = () => {
    clearInputs();
    createUserWithEmailAndPassword(auth, email, password).catch((error) => {
      switch (error.code) {
        case "auth/email-already-in-use":
          setEmailError(error.message);
        case "auth/invalid-email":
          setEmailError(error.message);
          break;
        case "auth/weak-password":
          setPasswordError(error.message);
          break;
      }
    });
  };

  const handleLogIn = () => {
    clearErrors();
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            clearInputs();
            console.log(user);
            dispatch({
              type: GET_USER,
              payload: user,
            });
          } else {
            dispatch({
              type: GET_USER,
              payload: null,
            });
          }
        });
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(error.message);
            break;
          case "auth/wrong-password":
            setPasswordError(error.message);
            break;
        }
      });
    clearInputs();
  };

  const handleLogOut = () => {
    try {
      signOut(auth);
      dispatch({
        type: GET_USER,
        payload: null,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const authListener = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        clearInputs();
        dispatch({
          type: GET_USER,
          payload: user,
        });
      } else {
        dispatch({
          type: GET_USER,
          payload: null,
        });
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  const values = {
    handleSignUp,
    emailError,
    passwordError,
    setPassword,
    setEmail,
    handleLogIn,
    user: state.user,
    handleLogOut,
    email,
    password,
  };

  return (
    <authContext.Provider value={values}> {children} </authContext.Provider>
  );
};

export default AuthContextProvider;
