import "./Blog.css"
import PropTypes from 'prop-types';
import { FaRegBookmark } from 'react-icons/fa';
const Blog = ({ blog, handleBookmark, handleMarAsRead }) => {
    const {article_id, title, cover_image, author_name, author_image, reading_time, posted_date, hashtags } = blog;
    return (
        <div className="my-5">
            <img className="w-full mb-4 rounded-lg" src={cover_image} alt="" />
            <div className="flex justify-between">
                <div className="flex my-8">
                    <img className="w-14" src={author_image} alt="" />
                    <div className="ml-5">
                        <h2 className="font-bold text-2xl">{author_name}</h2>
                        <p className="text-[#0B0B0B63]">{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span className="text-xl font-medium text-[#0B0B0B63]">{reading_time} min read</span>
                    <button onClick={() => handleBookmark(blog)} className="text-red-400 text-2xl ml-3"><FaRegBookmark></FaRegBookmark></button>
                </div>
            </div>
            <h2 className="text-3xl font-bold">{title}</h2>
            <p className="my-5">
                {
                    hashtags.map((hash, idx)=> <span className="text-[#0B0B0B63] mx-3" key={idx}>{hash}</span>)
                }
            </p>
            <button onClick={() => handleMarAsRead(article_id, reading_time)} className="text-purple-600 underline font-bold">Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired, 
    handleBookmark: PropTypes.func.isRequired,
    handleMarAsRead: PropTypes.func
}

export default Blog;