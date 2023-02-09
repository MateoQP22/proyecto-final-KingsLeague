import { useRef, useState } from 'react';
import { BsList, BsXCircle } from "react-icons/bs";
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/react.svg';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
    const header = useRef();
    const modal = useRef();

    const { user, setUser } = useAuth();
    
    const showMenu = () => {
        header.current.classList.add('header--menu');
        modal.current.classList.add('modal--show');
    };

    const hideMenu = () => {
        header.current.classList.remove('header--menu');
        modal.current.classList.remove('modal--show');
    };

    return (
        <header
            className="header"
            ref={header}
        >
            <nav className="nav">
                <div className="container f-elements f-elements--header">
                    <Link to="/">
                        <img src={logo} alt="Logo" className="nav__logo" width="32" height="32" />
                    </Link>
                    <div
                        className="modal modal--header"
                        ref={modal}
                        onClick={hideMenu}
                    >
                        <ul
                            className="list list--header f-elements f-elements--responsive f-elements--center gap-md"
                            onClick={e => e.stopPropagation()}
                        >
                            <li>
                                <NavLink to="/">Inicio</NavLink>
                            </li>
                            <li>
                                <NavLink to="/nosotros">Nosotros</NavLink>
                            </li>
                            <li>
                                {user ?
                                    <button onClick={() => { setUser(false) }}>Logout</button>
                                    :
                                    <NavLink to="/login">Login</NavLink>
                                    
                                }
                            </li>
                            <li
                                className="icon icon--close"
                                onClick={hideMenu}
                            >
                                <BsXCircle />
                            </li>
                        </ul>
                    </div>
                    <div className="f-elements f-elements--center">
                        <button
                            className="icon icon--menu"
                            onClick={showMenu}
                        >
                            <BsList />
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;