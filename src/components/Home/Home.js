import React, { useContext, useEffect } from 'react';
import { useAuth } from '../../Contexts/AuthContext';
import './Home.css'
import Hero from '../Hero/Hero';
import SideBar from '../SideBar/SideBar';
import Login from '../Auth/Login';
import { usersContext } from '../../Contexts/UserContext';
import { getUserId } from '../Auth/saveThisUser';

const Home = () => {
    const {user} = useAuth()
    const {getThisUser,thisUser} = useContext(usersContext)
    useEffect(()=>{
        getThisUser(getUserId())
    },[])
    // console.log(user)
    if(!user){
        return <Login/>
    }
    console.log(user)
    return (
        <div className='main'>
            <SideBar/>
            <Hero/>
        </div>
    )
    
};

export default Home;