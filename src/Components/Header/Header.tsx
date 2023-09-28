import React from 'react';
import style from './Header.module.css'
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <header className="ui   secondary  segment">
            <div className='ui grid secondary  menu ui container'>
                <Link to="/afisha">
                    <img className={style.logo} src="https://broadway.kg/image/logo.gif" alt="logo"/>
                </Link>
                    <div className={'right menu '+style.lists}>
                        <Link className='ui item' to="/afisha">Афиша</Link>
                        <Link className='ui item' to="/repertuar">Сеансы</Link>
                        <Link className='ui item' to="/discount">Акции и скидки</Link>
                        <Link className='ui item' to="/about">О кинотеатре</Link>
                    </div>

            </div>
        </header>
    );
};

export default Header;