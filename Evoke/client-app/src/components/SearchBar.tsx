import * as React from 'react';
import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function SearchBar() {
    return (
        <div className="d-lg-none" id="mobile-search">
            <div className="p-2 search-form">
                <form className="d-flex align-items-center bg-white p-2">
                    <input type="search" name="search" className="search-bar" id="exampleFormControlInput1" placeholder="Search..." />
                    <div id="search-buttons" className="d-flex align-items-center">
                        <button className="icon-search"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                    </div>
                </form>
            </div>
        </div>
    )
}