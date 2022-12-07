import {useState} from 'react';
import { Link } from "react-router-dom";


import './Navbar.css';


const Navbar = () => {

    const [navMenu, setNavMenu] = useState("");

   

    return(
        <>

        <header className="header">
            
            <nav className={`nav ${navMenu}`}>
            <ion-icon name="close" class="header__close" onClick={() => setNavMenu("")}></ion-icon>
                <ul className="nav__list" onClick={() => setNavMenu("")}>
                    <li className="nav__item">
                        <Link to="/" className="nav__link">Mirror</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/" className="nav__link">Story</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/" className="nav__link">Write</Link>
                    </li>
                </ul>

         

                <ul className="nav__list btn__login__register" onClick={() => setNavMenu("")}>
                    <li className="nav__item">
                        <Link to="/account/login" className="nav__link nav__btn__login">Login</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/" className="nav__link btn btn__register">Register</Link>
                    </li>
                </ul>
            </nav>
            <div className='brand'>INDOTHON</div>
            <ion-icon name="menu" class="header__toggle" onClick={() => setNavMenu("show")}></ion-icon>

        </header>


        

        </>
    )
}

export default Navbar;