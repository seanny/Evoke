import * as React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import logo from "../logo192.png";

export const isHiddenContext = React.createContext(true);

export interface ItemProps {
    name: string;
    isActive: boolean;
    href: string;
}

function Item({ name, isActive, href }: ItemProps) {
    let classes = "nav-link";
    if (isActive) {
        classes += " active";
    }

    return (
        <li className="nav-item">
            <a className={classes} href={href}>{name}</a>
        </li>
    )
}

export interface ButtonProps {
    href: string;
    children: any;
}

function ItemButton({ href, children }: ButtonProps) {
    let classes = "item button";

    return (
        <li className={classes}><a href={href}>{children}</a></li>
    )
}

export interface SubMenuProps {
    name: string;
    children: any;
}

function SubMenu({ name, children }: SubMenuProps) {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">{name}</a>
            <ul className="dropdown-menu">
                {children}
            </ul>
        </li>
    )
}

export interface SubitemProps {
    name: string;
    href: string;
}

function Subitem({ name, href }: SubitemProps) {
    let classes = "dropdown-item";

    return (
        <li className={classes}><a href={href}>{name}</a></li>
    )
}

export default function Navbar() {
    const [isHidden, setHidden] = React.useState(true);

    const ToggleMenu = () => {
        setHidden(!isHidden);
    };

    return (
        <nav className="navbar navbar-expand-lg evoke-nav-bg">
            <div className="container-fluid">
                <div className="float-start">
                    <button className="evoke-navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    <a className="navbar-brand" href="#"><img height="30" src={logo} /></a>
                </div>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <Item name="Sale" isActive={false} href="#"/>
                        <SubMenu name="All Clothing">
                            <Subitem name="View All" href="#" />
                            <Subitem name="Tops" href="#" />
                            <Subitem name="Hoodies" href="#" />
                            <Subitem name="Dresses" href="#" />
                            <Subitem name="Jeans" href="#" />
                            <Subitem name="Joggers" href="#" />
                            <Subitem name="Leggings" href="#" />
                            <Subitem name="Shorts" href="#" />
                            <Subitem name="Skirts" href="#" />
                            <Subitem name="Swim" href="#" />
                        </SubMenu>
                        <Item name="Tops" isActive={false} href="#" />
                        <Item name="Dresses" isActive={false} href="#" />
                        <Item name="Swim" isActive={false} href="#" />
                    </ul>
                </div>
                <div className="d-flex">
                    <a className="navbar-brand" href="#"><FontAwesomeIcon icon={faUser} /></a>
                    <a className="navbar-brand" href="#"><FontAwesomeIcon icon={faHeart} /></a>
                    <a className="navbar-brand" href="#"><FontAwesomeIcon icon={faCartShopping} /></a>
                </div>
            </div>
        </nav>
    )
}