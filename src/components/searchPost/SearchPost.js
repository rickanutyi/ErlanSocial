import React, { useContext, useEffect, useState } from 'react';
import { postsContext } from '../../Contexts/PostsContext';
import { Link } from 'react-router-dom';
import './style/SearchPost.css'

const SearchPost = ({searching,setSearching}) => {
    const {posts,getPosts} = useContext(postsContext)
    const [searchPosts,setPosts] = useState([])


    useEffect(()=>{
        getPosts()
    },[])
    useEffect(()=>{
        let allposts = posts.filter(elem=> elem.title.toUpperCase().includes(searching.toUpperCase()))
        setPosts(allposts)
        console.log(allposts)
    },[searching])

    function closeSearch(){
        setSearching('')
    }
    return (
        <div className='search_post'>
                <div className="search-flex">
                    {searchPosts?searchPosts.map(elem=>(
                        <Link className='searched_post' to={`/post-details/${elem.id}`} onClick={closeSearch}>{elem.title}</Link>
                    )):'ничего не найдено'}
                </div>
        </div>
    );
};

export default SearchPost;