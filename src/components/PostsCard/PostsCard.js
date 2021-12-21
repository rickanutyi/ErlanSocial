import React from 'react';
import './style/PostCard.css'
import AuthorIcon from '../../images/icons/author-icon.png'
import { useNavigate } from 'react-router-dom';

const PostsCard = ({elem}) => {
    const navigate = useNavigate()
    return (
        <div  className='post_card'>
            <div className="author">
                <span><img src={elem.authorAvatar?elem.authorAvatar:AuthorIcon} alt="" />
                {elem.author}</span>
                
                <span>{elem.date}</span>
            </div>
            <div onClick={()=>navigate(`/post-details/${elem.id}`)} className="card_title"><h2>{elem.title}</h2></div>
            <div onClick={()=>navigate(`/post-details/${elem.id}`)} className="card_image"><img src={elem.image} alt="" /></div>
            <div onClick={()=>navigate(`/post-details/${elem.id}`)} className="card_text">{elem.text}</div>
        </div>
    );
};

export default PostsCard;