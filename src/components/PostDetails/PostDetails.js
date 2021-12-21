import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../Contexts/AuthContext';
import { postsContext } from '../../Contexts/PostsContext';
import { usersContext } from '../../Contexts/UserContext';
import PostComments from './PostComments/PostComments';
import './style/PostDetails.css'

const PostDetails = () => {
    const {getCurrentPost,currentPost,updatePost} = useContext(postsContext)
    const {users,getUsers} = useContext(usersContext)
    const {user} = useAuth()
    const [message,setMessage] = useState('')
    const [usern,setUser] = useState('')

    let params = useParams().id

    useEffect(()=>{
        getCurrentPost(params)
        getUsers()
    },[])

    useEffect(()=>{
        users.forEach(elem=>{
            if(elem.email===user.email){
                setUser(elem)
            }
        })
    },[users])
   

    function createComment(){
        let comment = {
            userAvatar: usern.avatar?usern.avatar:null,
            user: usern.name?usern.name:usern.email,
            comment: message
        }
        console.log(currentPost)
        let comments = [...currentPost[0].comments]

        comments.push(comment)
        console.log(comments)
        updatePost(comments,currentPost[0].id)
        setMessage('')
    }
    return (
        <div className='details'>
            <div className="details_content">
                <div className="details-flex">
                
                    <div className="post_date">{currentPost[0]?currentPost[0].date:'loading'}</div>
                    <div className="details_titl"><h2>{currentPost[0]?currentPost[0].title:null}</h2></div>
                    <div className="details_img"><img src={currentPost[0]?currentPost[0].image:null} alt="" /></div>
                    <div className="details_text">{currentPost[0]?currentPost[0].text:null}</div>
                    <div className="post_author">
                        <span className='user_avatar_comment'><img src={currentPost[0]?currentPost[0].authorAvatar:null} alt="" /></span>
                        {currentPost[0]?currentPost[0].author:null}
                    </div>
                </div>
                <hr />
                {currentPost[0]?currentPost[0].comments.map((elem)=>(
                    <div key={elem.comment} className='post_comments'>
                        <span className='ab_user'><span className='user_avatar_comment'><img src={elem.userAvatar?elem.userAvatar:null} alt="" /></span>{elem.user}</span>
                        <span>{elem.comment}</span>
                    </div>
                )):"нет комментариев"}
                <PostComments setMessage={setMessage} createComment={createComment} message={message}/>
            </div>
        </div>
    );
};

export default PostDetails;