import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => (
    <nav className={'navbar navbar-dark bg-primary navbar-expand-lg'}>
        <div className={'navbar-brand'}>
            Github Search
        </div>
        <ul className={'navbar-nav'}>
            <li className={'nav-item'}>
                <NavLink to={'/'} exact className={'nav-link'}>Main</NavLink>
            </li>
            <li className={'nav-item'}>
                <NavLink to={'/about'} className={'nav-link'}>Information</NavLink>
            </li>
        </ul>
    </nav>
)
