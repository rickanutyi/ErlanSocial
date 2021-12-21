import React from 'react';
import './style/PostComments.css'

const PostComments = ({setMessage,createComment,message}) => {
    return (
        <div className='comments'>
            <div className="comment_list"></div>
            <div className="add_comment">
                <input type="text" placeholder='оставить  комментарий' value={message} onChange={(e)=>setMessage(e.target.value)}/><button onClick={createComment}>отправить</button>
            </div>
        </div>
    );
};

export default PostComments;