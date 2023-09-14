import './Header.css'
import Profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex flex-col md:flex-row justify-between container mx-auto my-8 p-5 border-b-2'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={Profile} alt="" />
        </header>
    );
};

export default Header;