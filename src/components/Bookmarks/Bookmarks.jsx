import Bookmark from '../Bookmark/Bookmark';
import PropTypes from 'prop-types';
import './Bookmarks.css'

const Bookmarks = ({bookmark}) => {
    return (
        <div className='md:w-1/3 bg-gray-300 rounded-xl p-6 text-center'>
            <h1 className='text-2xl font-bold'>Bookmarked Blogs: {bookmark.length}</h1>
            {
                bookmark.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmark: PropTypes.object.isRequired,
}

export default Bookmarks;