import React from 'react';
import './style/PostCard.css'
import AuthorIcon from '../../images/icons/author-icon.png'
import { useNavigate } from 'react-router-dom';
import Save from '../../images/icons/save.png'
import Saved from '../../images/icons/saved.png'
import Comments from '../../images/icons/comment.png'
import Up from '../../images/icons/up-arrow.png'
import Down from '../../images/icons/down-arrow.png'

const PostsCard = ({elem}) => {
    const navigate = useNavigate()
    return (
        <div  className='post_card'>
            <div className="author">
               <div> <span><img src={elem.authorAvatar?elem.authorAvatar:AuthorIcon} alt="" />
                {elem.author}</span>
                
                <span>{elem.date}</span>
                </div>
                <div className="post_actions">
                    <div className='action_item'><img src={Up} alt="" /></div>
                        <div className='action_item comments_icon'>
                            <img src={Comments} alt="" />
                            <span className='comments-count'>{elem.comments?elem.comments.length:0}</span>
                        </div>
                    <div className='action_item'><img src={Save} alt="" /></div>
                </div>
            </div>
            <div onClick={()=>navigate(`/post-details/${elem.id}`)} className="card_title"><h2>{elem.title}</h2></div>
            <div onClick={()=>navigate(`/post-details/${elem.id}`)} className="card_image"><img src={elem.image} alt="" /></div>
            <div onClick={()=>navigate(`/post-details/${elem.id}`)} className="card_text">{elem.text}</div>
            
        </div>
    );
};

export default PostsCard;