import Bookmark from '../Bookmark/Bookmark';
import PropTypes from 'prop-types';
import './Bookmarks.css'

const Bookmarks = ({bookmark, readTime}) => {
    return (
        <div className='md:w-1/3 bg-gray-300 rounded-xl p-6 text-center'>
            <div className='text-purple-500 text-2xl text-center font-bold bg-white p-6 mb-5 rounded-xl'>
                <h2>Spent time On Read: {readTime}</h2>
            </div>
            <h1 className='text-2xl font-bold'>Bookmarked Blogs: {bookmark.length}</h1>
            {
                bookmark.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmark: PropTypes.object.isRequired,
    readTime: PropTypes.number
}

export default Bookmarks;