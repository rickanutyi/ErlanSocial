import React, { useContext, useEffect } from 'react';
import { postsContext } from '../../../Contexts/PostsContext';
import PostsCard from '../../PostsCard/PostsCard';
import './style/UserPosts.css'

const UserPosts = () => {
    const {posts,getPosts} = useContext(postsContext)
    useEffect(()=>{
        getPosts()
    },[])
    return (
        <div className='user_posts'>
           {posts?posts.map(elem=>(
               <PostsCard key = {elem.id} elem={elem}/>
           )):
            <div className="posts_title">
                <p>Если у вас есть интересная идея для статьи, не стесняйтесь <br /> и скорее начинайте писать</p>
                <button>создать запись</button>
            </div>}
           
        </div>
    );
};

export default UserPosts;