import './Header.css';
import Logo from "./assets/logo.png";
import React, { useRef } from 'react';

function Header() {
    const iconRef = useRef(null);
    const icon2Ref = useRef(null);
    const navRef = useRef(null);

    const openLinks = () => {
        iconRef.current.classList.add("invisible");
        icon2Ref.current.classList.remove("invisible");
        navRef.current.classList.remove("invisible");
    }

    const closeLinks = () => {
        iconRef.current.classList.remove("invisible");
        icon2Ref.current.classList.add("invisible");
        navRef.current.classList.add("invisible");
    }

    // Nueva función para manejar el desplazamiento suave
    const smoothScrollTo = (target) => {
        const element = document.getElementById(target);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div className="header animate__animated animate__fadeInDown">
            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>
            <div className="open">
                <i ref={iconRef} className="fa-solid fa-chevron-down" onClick={openLinks} title='Open Menu'></i>
                <i ref={icon2Ref} className="fa-solid fa-chevron-up invisible" onClick={closeLinks}></i>
            </div>
            <div ref={navRef} className="buttons invisible" id="open-links">
                <a onClick={() => smoothScrollTo('description')}><h5>Description</h5></a>
                <a onClick={() => smoothScrollTo('models')}><h5>Models</h5></a>
                <a onClick={() => smoothScrollTo('discover')}><h5>Discover</h5></a>
                <a onClick={() => smoothScrollTo('contact')}><h5>Contact</h5></a>
            </div>
        </div>
    );
}

export default Header;
