import React, { useState } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../assets/favicon.png'; // Adjust the path based on your project structure

const Header = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const toggleNavbar = () => {
        setNavbarOpen(!navbarOpen);
    };

    return (
        <>
            <style jsx>{`
                .navbar {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background-color: #333;
                    padding: 10px;
                }
                .navbar a {
                    color: white;
                    text-decoration: none;
                    padding: 14px 20px;
                }
                .navbar a:hover {
                    background-color: #ddd;
                    color: black;
                }
                .logo {
                    height: 50px; /* Adjust height as needed */
                    margin-right: 20px; /* Margin to separate logo from links */
                }
                .nav-links {
                    display: flex;
                    align-items: center;
                }
                .navbar-toggle {
                    display: none;
                }
                @media (max-width: 600px) {
                    .navbar {
                        flex-direction: column;
                        align-items: flex-start;
                    }
                    .navbar a {
                        display: ${navbarOpen ? 'block' : 'none'};
                    }
                    .navbar-toggle {
                        display: block;
                        background-color: #333;
                        color: white;
                        border: none;
                        padding: 10px;
                        font-size: 16px;
                        margin-right: 20px; /* Adjust margin as needed */
                    }
                }
            `}</style>
            <div className="navbar">
                <a href="https://codingninjas-cuiet.in/" target="_blank" rel="noopener noreferrer">
                    <img src={logo} alt="Logo" className="logo" />
                </a>
                <div className="nav-links">
                    <Link to="#home" className="flex item-center font-black text-sm justify-center cursor-pointer text-[#ffffff] hover:text-[#d27916]">
                        Home
                    </Link>
                    <Link to="#overview" className="flex item-center font-black text-sm justify-center cursor-pointer text-[#ffffff] hover:text-[#d27916]">
                        Overview
                    </Link>
                    <Link to="#prizes" className="flex item-center font-black text-sm justify-center cursor-pointer text-[#ffffff] hover:text-[#d27916]">
                        Prizes
                    </Link>
                    <Link to="#past-events" className="flex item-center font-black text-sm justify-center cursor-pointer text-[#ffffff] hover:text-[#d27916]">
                        Past Events
                    </Link>
                    <Link to="#socials" className="flex item-center font-black text-sm justify-center cursor-pointer text-[#ffffff] hover:text-[#d27916]">
                        Socials
                    </Link>
                </div>
                <button className="navbar-toggle" onClick={toggleNavbar}>
                    ☰
                </button>
            </div>
        </>
    );
};

export default Header;
