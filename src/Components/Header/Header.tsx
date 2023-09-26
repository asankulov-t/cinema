import React from 'react';
import style from './Header.module.css'
const Header = () => {
    return (
        <header className={style.header}>
            <a href="#">
                <img className={style.logo} src="https://broadway.kg/image/logo.gif" alt="logo"/>
            </a>
            <ul className={style.lists}>
                <li><a href="#">Сеансы</a></li>
                <li><a href="#">Скоро в кино</a></li>
                <li><a href="#">Акции и скидки</a></li>
                <li><a href="#">О кинотеатре</a></li>
            </ul>
        </header>
    );
};

export default Header;