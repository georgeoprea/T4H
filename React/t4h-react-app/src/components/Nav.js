import '../App.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div >
        <nav >
            <h3> TFH </h3>
            <ul className="nav-links">
                <Link to='/about' className='nav-link'>
                    <li>About</li>
                </Link>
                <Link to='/users' className='nav-link'>
                    <li>Users</li>
                </Link>
            </ul>
        </nav>
    </div>
  );
}

export default Nav;
