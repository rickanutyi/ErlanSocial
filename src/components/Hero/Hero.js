import React, { useContext, useEffect } from 'react';
import { usersContext } from '../../Contexts/UserContext';
import { postsContext } from '../../Contexts/PostsContext';
import './style/Hero.css'
import PostsCard from '../PostsCard/PostsCard';

const Hero = () => {
    // const {getUsers,users} = useContext(usersContext)
    const {posts,getPosts} = useContext(postsContext)
    
    useEffect(()=>{
        // getUsers()
        getPosts()
    },[])
   
    return (
        <div className='Hero'>
            <div className="hero_content">
              {posts?posts.map(elem=>(
                  <PostsCard key={elem.id} elem={elem}/>
              )):null}
            </div>            
        </div>
    );
};

export default Hero;