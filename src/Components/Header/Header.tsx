import React from 'react';
import style from './Header.module.css'
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <header className={style.header}>
            <a href="#">
                <img className={style.logo} src="https://broadway.kg/image/logo.gif" alt="logo"/>
            </a>
            <ul className={style.lists}>
                <li><Link to="/afisha">Афиша</Link></li>
                <li><Link to="/repertuar">Сеансы</Link></li>
                <li><Link to="/soon">Скоро в кино</Link></li>
                <li><Link to="/discount">Акции и скидки</Link></li>
                <li><Link to="/about">О кинотеатре</Link></li>
            </ul>
        </header>
    );
};

export default Header;