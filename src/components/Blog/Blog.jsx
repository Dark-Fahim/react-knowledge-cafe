import "./Blog.css"
import PropTypes from 'prop-types';
const Blog = ({ blog }) => {
    const { title, cover_image, author_name, author_image, reading_time, posted_date, hashtags } = blog;
    return (
        <div>
            <img className="w-full h-full lg:w-[800px] lg:h-[450px] rounded-lg" src={cover_image} alt="" />
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
                </div>
            </div>
            <h2 className="text-3xl font-bold">{title}</h2>
            <p className="my-5">
                {
                    hashtags.map((hash, idx)=> <span className="text-[#0B0B0B63] mx-3" key={idx}>{hash}</span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;