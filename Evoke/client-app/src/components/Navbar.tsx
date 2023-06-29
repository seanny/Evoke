import * as React from 'react';
import './Navbar.css';

export default function Navbar() {
    var isHidden: boolean = true;
    const toggle = document.querySelector(".toggle");
    const menu = document.querySelector(".menu");
    const items = document.querySelectorAll(".item");

    const ToggleMenu = () => {
        if (menu?.classList.contains("active")) {
            menu.classList.remove("active");

            if (toggle != null) {
                var a = toggle?.querySelector("a");
                if (a != null) {
                    a.innerHTML = "O";
                }
            }
        }
        else {
            menu?.classList.add("active");

            // adds the close (x) icon 
            if (toggle != null) {
                var a = toggle?.querySelector("a");
                if (a != null) {
                    a.innerHTML = "C";
                }
            }
        }
    };

    return (
        <nav className="navbar">
            <ul className="menu">
                <li className="logo"><a href="#">Evoke</a></li>
                <li className="toggle"><a href="#" onClick={ToggleMenu}>TOG</a></li>
                <li className="item"><a href="#">Sale</a></li>
                <li className="item has-submenu">
                    <a tabIndex={ 0 }>All Clothing</a>
                    <ul className="submenu">
                        <li className="subitem"><a href="#">View All</a></li>
                        <li className="subitem"><a href="#">Tops</a></li>
                        <li className="subitem"><a href="#">Hoodies</a></li>
                        <li className="subitem"><a href="#">Jeans</a></li>
                        <li className="subitem"><a href="#">Joggers</a></li>
                        <li className="subitem"><a href="#">Leggings</a></li>
                        <li className="subitem"><a href="#">Shorts</a></li>
                    </ul>
                </li>
                <li className="item"><a href="#">Tops</a></li>
                <li className="item button"><a href="#">Account</a></li>
                <li className="item button"><a href="#">Favourites</a></li>
                <li className="item button"><a href="#">Shopping Cart</a></li>
            </ul>
        </nav>
    )
}