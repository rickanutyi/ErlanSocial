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
        <div className='details'>
            <div className="details_content">
                <div className="details-flex">
                
                    <div className="post_date">{currentPost[0]?currentPost[0].date:'loading'}</div>
                    <div className="details_titl"><h2>{currentPost[0]?currentPost[0].title:null}</h2></div>
                    <div className="details_img"><img src={currentPost[0]?currentPost[0].image:null} alt="" /></div>
                    <div className="details_text">{currentPost[0]?currentPost[0].text:null}</div>
                    <div className="post_author">{currentPost[0]?currentPost[0].author:null}</div>
                </div>
            </div>
        </div>
    );
};

export default PostDetails;