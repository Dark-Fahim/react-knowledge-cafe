import './Bookmark.css'
import PropTypes from 'prop-types';
const Bookmark = ({bookmark}) => {
    console.log(bookmark)
    const {title} = bookmark
    return (
        <div className='p-5  my-3 shadow-xl bg-white rounded-lg text-left'>
            <h1 className='text-2xl font-semibold'>{title}</h1>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark : PropTypes.object.isRequired
}

export default Bookmark;