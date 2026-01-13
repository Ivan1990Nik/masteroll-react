import { Link } from 'react-router-dom';
import { UseCart } from '../../contexts/CartContext';
import { GiShoppingCart } from "react-icons/gi";
import { FaPhone } from "react-icons/fa6";
import { LuContactRound } from "react-icons/lu";
import { FaBars } from "react-icons/fa"; // Для бургера
import { FaTimes } from "react-icons/fa"; // Добавлено для кнопки закрыть
import './header.css';
import { useState } from 'react'; // Для состояния меню
import logo from "../../assets/icon/logo.png"

const Header = () => {
    
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Состояние для открытия/закрытия меню
    const { cart } = UseCart();

    return (
        <div className="container">
            <div className='header__header'>
                <div className="header__top">
                    <div className="header__logo">
                        <img src={logo} width="100px" alt="" />
                    </div>
                    {/* Добавлен бургер для мобильных */}
                    <div className="header__menu">
                        <div className='hamburger-menu'>

                        <FaBars className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)} /><div className='hamburger-length'>
                            {cart.length > 0 && ` ${cart.length}`}
                            </div>
                        </div>
                        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                            {/* Кнопка закрыть */}
                            <FaTimes className="close-btn" onClick={() => setIsMenuOpen(false)} />
                            {/* Пункты меню — добавлены onClick для закрытия меню */}
                            <div className="header__item" onClick={() => setIsMenuOpen(false)}>РОЛЛЫ</div>
                            <div className="header__item" onClick={() => setIsMenuOpen(false)}>СЕТЫ</div>
                            <div className="header__item" onClick={() => setIsMenuOpen(false)}>ЗАКУСКА</div>
                            {/* Элементы из header__users, адаптированные для меню */}
                            <a href="#contact" className="header__item" onClick={() => setIsMenuOpen(false)}>
                                <LuContactRound className='cart-icon' />
                                Контакт
                            </a>
                            <a className="header__item header__user-tel" href="tel:61-33-30" onClick={() => setIsMenuOpen(false)}>
                                <FaPhone className='cart-icon' />
                                Позвонить
                            </a>
                            <Link to="/cart" className="header__item" onClick={() => setIsMenuOpen(false)}>
                                <GiShoppingCart className='cart-icon' />
                                Корзина
                                <div className='nav-cart-length'>
                                    {cart.length > 0 && ` ${cart.length}`}
                                </div>
                            </Link>
                        </div>
                        {/* Overlay для закрытия меню по клику вне */}
                        {isMenuOpen && <div className="overlay open" onClick={() => setIsMenuOpen(false)}></div>}
                        {/* Десктопные пункты */}
                        <div className="header__item desktop-only">РОЛЛЫ</div>
                        <div className="header__item desktop-only">ЗАКУСКА</div>
                        <div className="header__item desktop-only">СЕТЫ</div>
                    </div>
                    {/* header__users для десктопа */}
                    <div className="header__users desktop-only">
                        <a href="#contact">
                            <LuContactRound className='cart-icon' />
                        </a>
                        <a className="header__user-tel" href="tel:61-33-30">
                            <FaPhone className='cart-icon' />
                        </a>
                        <nav className="nav-Cart">
                            <Link to="/cart">
                                <GiShoppingCart className='cart-icon' />
                                <div className='nav-cart-length'>
                                    {cart.length > 0 && ` ${cart.length}`}
                                </div>
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
