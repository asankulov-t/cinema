import React, {useCallback, useState} from 'react';
import style from './Header.module.css'
import {Link} from "react-router-dom";
import {Container, Nav, Navbar} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {setTitle} from "../../Store/TitleReducer";

const Header = () => {
    let dis=useDispatch()
    let changeTitle=(title:string)=>{
        // @ts-ignore
        dis(setTitle(title))
    }
    return (
        <header className={style.header}>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary ">
                <Container>
                    <Navbar.Brand onClick={()=>setTitle('Афиша')} href="/afisha"> <img className={style.logo}
                                                       src="https://broadway.kg/image/logo.gif"
                                                       alt="logo"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse className={style.links} id="responsive-navbar-nav">
                        <Nav className="me-auto">


                        </Nav>
                        <Nav>
                            <Link onClick={()=>changeTitle('Афиша')} to="/afisha"><i className={'bullhorn icon'}></i>Афиша</Link>
                            <Link onClick={()=>changeTitle('Сеансы на сегодня')} to="/repertuar"><i className="film icon"></i>Сеансы</Link>
                            <Link onClick={()=>changeTitle('Волшебный вторник')}  to="/discount"><i className="microphone icon"></i>Акции и скидки</Link>
                            <Link onClick={()=>changeTitle('О кинотеатре')}  to="/about"><i className="rss icon"></i>О кинотеатре</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </header>
    );
};

export default Header;