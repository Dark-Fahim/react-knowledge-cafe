import { useState } from 'react';
import './Blogs.css'
import { useEffect } from 'react';
import Blog from '../Blog/Blog';
import PropTypes from 'prop-types';
const Blogs = ({handleBookmark, handleMarAsRead}) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className='md:w-2/3'>
            <h1>Blogs {blogs.length}</h1>
            <div className='blogs-container'>
                {
                    blogs.map((blog, idx) => <Blog
                        handleMarAsRead={handleMarAsRead}
                         handleBookmark={handleBookmark}
                         key={idx} 
                         blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

Blogs.propTypes = {
    handleBookmark : PropTypes.func.isRequired,
    handleMarAsRead: PropTypes.func
}

export default Blogs;