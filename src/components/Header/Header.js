import { Link, useLocation } from 'react-router-dom';
import launchpad from '../../assets/launchpadtrans.png';
import logo from '../../assets/launchpadlogo.png';
import './Header.scss';

const Header = () => {

    const location = useLocation();

    const isUserPage = location.pathname.match(/^\/user\/\d+(\/|$)/);

    return (
        <div className='header'>
            <div className="header__logo">
                <Link className="header__home" to='/'>
                    <img className="header__img" src={logo} alt='launchpad'/>
                </Link>
            </div>
            <ul className="header__list">
                <li>
                    <Link className="header__home" to='/'>Home</Link>
                </li>
                <li>
                    <Link className='header__about' to='/about'>About</Link>
                </li>
            </ul>
            {!isUserPage && (
            <div className="header__auth">
                <Link className="header__signup" to='/signup'>
                    <button className="header__signup" type="button">Sign-Up</button>
                </Link>
                <Link className="header__login" to='/login'>
                    <button className='header__login' type="button">Login</button>
                </Link>
            </div>
            )}
        </div>
    );
}
    
export default Header;