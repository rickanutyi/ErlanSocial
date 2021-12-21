import React, { useContext, useEffect, useState } from 'react';
import './style/UpdateUser.css'
import  ReplacePhoto from '../../../images/icons/replace.png'
import { usersContext } from '../../../Contexts/UserContext';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../../firebase';
import { getUserId } from '../../Auth/saveThisUser';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../../Contexts/AuthContext';


const UpdateUser = () => {
    const {updateUser,thisUser,getUsers,users} = useContext(usersContext)
    // const [userAvatar,setUserAvatar] = useState('')
    const [usern,setUser] = useState('')
    const {user,handleLogOut} = useAuth()

    // useEffect(()=>{
    //     getThisUser(getUserId())

    // },[])
    // useEffect(()=>{
    //     setUserName(thisUser.name)
    //     console.log(userName)
    // },[thisUser])
    useEffect(()=>{
        getUsers()
    },[])

    useEffect(()=>{

        users.forEach(elem => {
            if(elem.email === user.email){
                setUser(elem)
            }
        })
    },[users])


    const changePhoto = async () => {
        if(!document.querySelector('.change_photo')) return
        const input = document.querySelector('.change_photo')
        const file = input.files[0]
        if(!file) return

        const storageRef = ref(storage,`${file.name}`)
        const uploadTask = uploadBytesResumable(storageRef,file)
        console.log(uploadTask)
        uploadTask.on('state_changed',null,null,async () => {
            getDownloadURL(uploadTask.snapshot.ref).then(res=>{
                let changes = {
                    img: res,
                    name: usern.name,
                }
                updateUser(usern.id,changes)
            })
        })      
    }

   
    return (
        
        <div className='update_user'>
            <div className="change_users_photo">
                <input className = 'change_photo' type='file' name='file' id='file'/>
                <label htmlFor='file' className='label_change'><img src={ReplacePhoto}/><br /> изменить аватарку</label>
            </div>
            <div className="change_name">
                <input type="text" value={usern.name} onChange={(e)=>setUser({...usern,name: e.target.value})}/>
            </div>
            <div className="save_updates"><button onClick={changePhoto}>save</button></div>
        </div>
        
    );
};

export default UpdateUser;