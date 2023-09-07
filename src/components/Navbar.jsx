import React from 'react'
import { Link } from 'react-router-dom';

function Navbar({ isLogin, func }) {

    return (
        <nav>
            <div className="left">
                <ul>
                    <li>Logo</li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>

                    </li>
                </ul>
            </div>
            <div className="right">
                {!isLogin &&
                    <Link to="/login" onClick={func}>Log In</Link>
                }
                {!isLogin &&
                    <Link to="/signup" >Sign Up</Link>
                }
                {isLogin &&
                    <Link to="/logout" onClick={func}>Log Out</Link>
                }
                {isLogin &&
                    <Link to="/dashboard" >Dashboard</Link>
                }
            </div>
        </nav>
    )
}

export default Navbar;