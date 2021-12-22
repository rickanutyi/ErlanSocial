import React, { useContext, useEffect, useState } from 'react';
import './style/UserPage.css'
import { useAuth } from '../../Contexts/AuthContext';
import { usersContext } from '../../Contexts/UserContext';
import { getUserId } from '../Auth/saveThisUser';
import UserPosts from './UserPosts/UserPosts';
//icons
import Settings from '../../images/icons/setting.svg'
import Monster from '../../images/icons/monster.png'
import { useNavigate } from 'react-router-dom';
import { postsContext } from '../../Contexts/PostsContext';
import PostsCard from '../PostsCard/PostsCard';
import Saved from './Saved/Saved';


const UserPage = () => {
    const {user,handleLogOut} = useAuth()
    const {getThisUser,thisUser,users,getUsers} = useContext(usersContext)
    const {getUsersPosts,usersPosts} = useContext(postsContext)

    const [userm,setUser] = useState({})
    const navigate = useNavigate()


    let span = document.querySelectorAll('.inactive')
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    function changeStatus (e){
        span.forEach(elem=>{
            elem.classList.remove('active')
        })
        e.currentTarget.classList.add('active')
    }
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    useEffect(()=>{
        getUsers()
    },[])
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    useEffect(()=>{
        users.forEach(elem => {
            if(elem.email === user.email){
                setUser(elem)
            }
        })
    },[users])
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    function out (){
        localStorage.removeItem('userID')
        handleLogOut()
        navigate('/')
    }
   
    return (
        <div className='user_page'>
            <div className="user_content">
                <div className="about_user">
                    <div className="avatar">
                        <div className="user_photo">
                            {userm.avatar?<img src={userm.avatar} alt='avatar'/>:<img src={Monster} alt="avatar" />}
                        </div>
                        <div className="user_name">{userm.name?userm.name:userm.email}</div>
                        <div className="user_date">в стае с {userm?userm.date:"w"}</div>
                        <span onClick={out}>выйти</span>
                    </div>
                    <div className="user_action">
                        <div className="actions">
                            <div onClick={()=>navigate('/create-post')} className="create_post-btn"><span>Создать пост</span></div>
                            <div onClick={()=>navigate('/update-user')} className="settings"><img className='img' src={Settings} alt="" /></div>
                        </div>
                    </div>
                </div>
                <div className="user_menu">
                    <span className='active inactive' onClick={changeStatus}>статьи</span>
                    <span className='inactive' onClick={changeStatus}>сообщения</span>
                    <span className='inactive' onClick={changeStatus}>подписки</span>
                    <span className='inactive' onClick={changeStatus}>сохраненные</span>
                </div>
            </div>
            {/* <UserPosts usern={userm}/> */}
            <Saved usern={userm}/>
        </div>
    );
};

export default UserPage;