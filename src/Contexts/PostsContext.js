import { collection, doc, getDoc, onSnapshot, query, updateDoc, where } from "firebase/firestore";
import React, { createContext, useReducer } from "react";
import { db } from "../firebase";
import {GET_CURRENT_POST, GET_POSTS,GET_USERS_POSTS} from '../conts/const'

export const postsContext = createContext()
const q = query(collection(db,'posts'))


const INIT_STATE = {
    posts: [],
    usersPosts: [],
    currentPost: {}
}

const reducer = (state=INIT_STATE,action)=> {
    switch(action.type){
        case GET_POSTS:
            return {...state,posts: action.payload}
        case GET_USERS_POSTS:
            return {...state,usersPosts: action.payload}
        case GET_CURRENT_POST:
            return {...state,currentPost: action.payload}
        default:
            return state
    }
}
const PostsContextProvider = ({children}) => {

    const [state,dispatch] = useReducer(reducer,INIT_STATE)

    const addIdPost = (pid) => {
        let postRef = doc(db,'posts',`${pid}`)
        updateDoc(postRef,{
            id: pid
        })
    }

    const getPosts = () => {
        onSnapshot(q,(querySnapshot)=>{
            const postsList = [];

            querySnapshot.forEach((doc) => {
                postsList.push({...doc.data()})
            });
            // console.log(postsList)
            dispatch({
                type: GET_POSTS,
                payload: postsList
            })
        })
    }
    //wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
    
    const getUsersPosts = (id) => {
        console.log(id)
        onSnapshot(q,(querySnapshot)=>{
            const postsList = [];

            querySnapshot.forEach((doc) => {
                if(doc.data().authorId === id){

                    postsList.push({...doc.data()})
                }
            });
            console.log(postsList)
            dispatch({
                type: GET_USERS_POSTS,
                payload: postsList
            })
        })
    }
    // get post for details
  async  function getCurrentPost (id){
    onSnapshot(q,(querySnapshot)=>{
        const postsList = [];

        querySnapshot.forEach((doc) => {
            if(doc.data().id === id){

                postsList.push({...doc.data()})
            }
        });
        // console.log(postsList)
        dispatch({
            type: GET_CURRENT_POST,
            payload: postsList
        })
    })

    }

    //add comment
    function updatePost(comments,pid){
        let postsRef = doc(db,'posts',`${pid}`)
        updateDoc(postsRef,{
            comments: comments
        })
    }

    const values = {
        addIdPost,
        posts: state.posts,
        getPosts,
        getUsersPosts,
        usersPosts: state.usersPosts,
        currentPost: state.currentPost,
        getCurrentPost,
        updatePost
    }
    return <postsContext.Provider value = {values}>{children}</postsContext.Provider>
}
export default PostsContextProvider