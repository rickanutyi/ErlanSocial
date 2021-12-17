import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { postsContext } from '../../Contexts/PostsContext';
import './style/PostDetails.css'

const PostDetails = () => {
    const {getCurrentPost,currentPost} = useContext(postsContext)
    // const [post,setPost] = useState({})

    let params = useParams().id

    useEffect(()=>{
        getCurrentPost(params)
    },[])
    console.log(currentPost)
   
    return (
        <div>
            
        </div>
    );
};

export default PostDetails;