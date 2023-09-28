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
                        <Link className='ui item' to="/afisha"><i className={'bullhorn icon'}></i>Афиша</Link>
                        <Link className='ui item' to="/repertuar"><i className="film icon"></i>Сеансы</Link>
                        <Link className='ui item' to="/discount"><i className="microphone icon"></i>Акции и скидки</Link>
                        <Link className='ui item' to="/about"><i className="rss icon"></i>О кинотеатре</Link>
                    </div>

            </div>
        </header>
    );
};

export default Header;