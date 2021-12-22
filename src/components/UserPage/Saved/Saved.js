import React, { useContext, useEffect, useState } from 'react';
import { postsContext } from '../../../Contexts/PostsContext';
import PostsCard from '../../PostsCard/PostsCard';
import './style/Saved.css'

const Saved = ({usern}) => {
    const [saved,setSaved] = useState([])
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
useEffect(()=>{
    setSaved(usern.saved)
},[usern])
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// console.log(saved)
    return (
        <div className='saved'>
            {saved?saved.map(elem=>(
                <PostsCard key={elem.id} elem={elem} usern={usern}/>
            )):null}
        </div>
    );
};

export default Saved;