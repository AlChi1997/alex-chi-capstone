import { Link } from 'react-router-dom';
import launchpad from '../../assets/launchpadtrans.png';
import './Header.scss';

const Header = () => {
    return (
        <div className='header'>
            <div class="header__logo">
                <Link className="header__home" to='/'>
                    <img className="header__img" src={launchpad} alt='launchpad'/>
                </Link>
            </div>
            <ul class="header__list">
                <li>
                    <Link className="header__home" to='/'>Home</Link>
                </li>
                <li>
                    <Link className='header__about' to='/about'>About</Link>
                </li>
            </ul>
            <div class="header__auth">
                <Link className="header__signup" to='/signup'>
                    <button className="header__signup" type="button">Sign-Up</button>
                </Link>
                <Link className="header__login" to='/login'>
                    <button className='header__login' type="button">Login</button>
                </Link>
            </div>
        </div>
    );
    }
    
export default Header;