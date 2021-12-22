import React, { useContext, useEffect, useState } from 'react';
import { usersContext } from '../../Contexts/UserContext';
import { postsContext } from '../../Contexts/PostsContext';
import './style/Hero.css'
import PostsCard from '../PostsCard/PostsCard';
import { useAuth } from '../../Contexts/AuthContext';

const Hero = () => {
    // const {getUsers,users} = useContext(usersContext)
    const {posts,getPosts} = useContext(postsContext)
    const {getUsers,users,addPostToSaves} = useContext(usersContext)
    const {user} = useAuth()

    const [usern,setUser] = useState({})

    
    useEffect(()=>{
        getPosts()
        getUsers()
    },[])


    // useEffect(()=>{
    // },[])
   
    useEffect(()=>{

        users.forEach(elem => {
            if(elem.email === user.email){
                setUser(elem)
            }
        })
    },[users])
   
   
    return (
        <div className='Hero'>
            <div className="hero_content">
              {posts?posts.map(elem=>(
                  <PostsCard key={elem.id} elem={elem} usern={usern}/>
              )):null}
            </div>            
        </div>
    );
};

export default Hero;