import React from 'react';
import './style/PostCard.css'
import AuthorIcon from '../../images/icons/author-icon.png'
import { useNavigate } from 'react-router-dom';

const PostsCard = ({elem}) => {
    const navigate = useNavigate()
    return (
        <div onClick={()=>navigate(`/post-details/${elem.id}`)} className='post_card'>
            <div className="author"><img src={AuthorIcon} alt="" />{elem.author}</div>
            <div className="card_title"><h2>{elem.title}</h2></div>
            <div className="card_text">{elem.text}</div>
            <div className="card_image"><img src={elem.image} alt="" /></div>
        </div>
    );
};

export default PostsCard;