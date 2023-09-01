import { Link } from 'react-router-dom';
import launchpad from '../../assets/launchpadtrans.png';
import './Header.scss';

const Header = () => {
    return (
        <div className='header'>
            <div class="header__logo">
                <img className="header__img" src={launchpad} alt='launchpad'/>
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
                <button className="header__signup" type="button">Sign-Up</button>
                <button className='header__login' type="button">Login</button>
            </div>
        </div>
    );
    }
    
export default Header;