import { Link, useLocation } from 'react-router-dom';
import launchpad from '../../assets/launchpadtrans.png';
import logo from '../../assets/launchpadlogo.png';
import './Header.scss';

const Header = () => {

    const location = useLocation();

    const isUserPage = location.pathname.match(/^\/user\/\d+(\/|$)/);

    const windowWidth = window.innerWidth;

    const logoSrc = windowWidth >= 768 ? launchpad : logo;

    return (
        <div className='header'>
            <div className="header__logo">
                <Link className="header__home" to='/'>
                    <img className="header__img" src={logoSrc} alt='launchpad'/>
                </Link>
            </div>
            <ul className="header__list">
                <li>
                    <Link className="header__home" to='/'>
                        <p>Home</p>
                        </Link>
                </li>
                <li>
                    <Link className='header__about' to='/about'>
                        <p>About</p>
                        </Link>
                </li>
            </ul>
            {!isUserPage && (
            <div className="header__auth">
                <Link className="header__signup" to='/signup'>
                    <p className="header__signup">Sign-Up</p>
                </Link>
                <Link className="header__login" to='/login'>
                    <p className='header__login'>Login</p>
                </Link>
            </div>
            )}
        </div>
    );
}
    
export default Header;