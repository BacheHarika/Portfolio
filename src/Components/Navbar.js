
import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav>
        <div>
          <Link to="/">
            <h6>Bache Harika</h6>
          </Link>
        </div>
        <div>
          <ul className='navbar-list'>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
            <li className='separator'></li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li className='separator'></li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;



