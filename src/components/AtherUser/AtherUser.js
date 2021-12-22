import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { usersContext } from '../../Contexts/UserContext';
import './style/AtherUser.css'

const AtherUser = () => {
    const {getThisUser,thisUser} = useContext(usersContext)

    const params = useParams()
    useEffect(()=>{
        getThisUser(params.id)
    },[])
    // console.log(thisUser)
    return (
        <div className='ather_user'>
            <div className="ather_user-left">
                <div className="ather_user_avatar"><img src={thisUser?thisUser.avatar:null} alt="" /></div>
                <div className="ather_user_name">{thisUser?thisUser.name||thisUser.email:null}</div>
                <div className="ather_user_date">{thisUser?thisUser.date:null}</div>
            </div>
            <div className="ather_user-right">
                <span className='send_message'>написать</span>
            </div>
        </div>
    );
};

export default AtherUser;