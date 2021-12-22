import { collection, doc, getDoc, onSnapshot, query, updateDoc } from "firebase/firestore";
import React, { createContext, useReducer } from "react";
import { GET_THIS_USER, GET_USERS } from "../conts/const";
import { db } from "../firebase";

export const usersContext = createContext()

const INIT_STATE = {
    users: [],
    thisUser: {}
}

const reducer = (state = INIT_STATE,action) => {
    switch(action.type){
        case GET_USERS:
            return {...state,users: action.payload};
        case GET_THIS_USER: 
            return {...state,thisUser: action.payload}
        default: return state
    }
}

const UsersContextProvider = ({children}) =>{
    const [state,dispatch] = useReducer(reducer,INIT_STATE)
    const q = query(collection(db,'users'))



    function getUsers (){                ////////////////////////////////////get users
        onSnapshot(q, (querySnapshot) => {
            const usersList = [];

            querySnapshot.forEach((doc) => {
                usersList.push({...doc.data(),id:doc.id})
            });
            // console.log(usersList)
            dispatch({
                type: GET_USERS,
                payload: usersList
            })
          });
    }
    
    // get thisUser ////////////////////
    // const userRef = collection(db, "users");
    // let user = query(userRef,where("email", "==", "erlan11@gmail.com"))
    const getThisUser =  async (id) => {

        const docRef = doc(db,'users',`${id}`)
        const docSnap = await getDoc(docRef)

        dispatch({
            type: GET_THIS_USER,
            payload: docSnap.data()
        })
    }
    //add id 
    const addIdUser = (id) => {
        let userRef = doc(db,'users',`${id}`)
        updateDoc(userRef,{
            id: id
        })
    }
    //update user avatar
    const updateUser = (uid,changes)=> {
        let userRef = doc(db,'users',`${uid}`)
        updateDoc(userRef,{
            avatar: changes.img,
            name: changes.name,
        })
    }
    //update user name
    const updateUserName = (uid,name) => {
        let userRef = doc(db,'users',`${uid}`)
        updateDoc(userRef,{
            name: name
        })
    }
    // saved d
    function addPostToSaves(saves,uid){
        let userRef = doc(db,'users',`${uid}`)
        updateDoc(userRef,{
            saved: saves
        })
    }

        const values = {
            users: state.users,
            getUsers,
            getThisUser,
            addIdUser,
            thisUser: state.thisUser,
            updateUser,
            updateUserName,
            addPostToSaves
        }

    return (
        <usersContext.Provider value = {values}>
            {children}
        </usersContext.Provider>
    )
}
export default UsersContextProvider