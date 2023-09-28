import React from 'react';
import style from './Header.module.css'
import {Link} from "react-router-dom";
import {Container, Nav, Navbar} from "react-bootstrap";

const Header = () => {
    return (
        <header className={style.header}>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary ">
                <Container>
                    <Navbar.Brand href="/afisha"> <img className={style.logo}
                                                       src="https://broadway.kg/image/logo.gif"
                                                       alt="logo"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse className={style.links} id="responsive-navbar-nav">
                        <Nav className="me-auto">


                        </Nav>
                        <Nav>
                            <Link to="/afisha"><i className={'bullhorn icon'}></i>Афиша</Link>
                            <Link to="/repertuar"><i className="film icon"></i>Сеансы</Link>
                            <Link to="/discount"><i className="microphone icon"></i>Акции и скидки</Link>
                            <Link to="/about"><i className="rss icon"></i>О кинотеатре</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </header>
    );
};

export default Header;