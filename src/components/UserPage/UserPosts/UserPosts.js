import React, { useContext, useEffect } from 'react';
import { postsContext } from '../../../Contexts/PostsContext';
import { usersContext } from '../../../Contexts/UserContext';
import PostsCard from '../../PostsCard/PostsCard';
import './style/UserPosts.css'

const UserPosts = ({usern}) => {
    const {posts,usersPosts,getUsersPosts} = useContext(postsContext)
    const {} = useContext(usersContext)


    useEffect(()=>{
        getUsersPosts(usern.id)
    },[usern])
    return (
        <div className='user_posts'>
           {usersPosts?usersPosts.map(elem=>(
               <PostsCard key = {elem.id} elem={elem} usern={usern}/>
           )):
            <div className="posts_title">
                <p>Если у вас есть интересная идея для статьи, не стесняйтесь <br /> и скорее начинайте писать</p>
                <button>создать запись</button>
            </div>}
           
        </div>
    );
};

export default UserPosts;