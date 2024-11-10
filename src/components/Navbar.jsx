import React from 'react'
import About from './about'
import Home from './home'
import Dashboard from './dashboard'
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'


const Navbar = () => {
  return (
    <div>
        <ul>
            <li>
                <NavLink to='/'className={({isActive}) => isActive ? "active-link":""}>
                  Home 
                 </NavLink> 
            </li>
            <li>
                <NavLink to='/about'className={({isActive}) => isActive ? "active-link":""}> 
                 About
                </NavLink>
            </li>
            <li>
                <NavLink to='/dashboard'className={({isActive}) => isActive ? "active-link":""}>
                 Dashboard
                </NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Navbar