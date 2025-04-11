import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'; // Import the faBars icon

import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    const [menuVisible, setMenuVisible] = React.useState(false);

    const handleMenu = () => {
        setMenuVisible(!menuVisible);
    }

    return (
        <>
            <div className='float-top px-4 py-3 flex flex-row justify-between items-center bg-gray-200 text-white'>
                <div className='right-0 text-gray-900 font-bold flex flex-row items-center'>
                    <img src="https://cdn-icons-png.flaticon.com/512/4340/4340844.png" className='h-7' alt="" /> Laravel PasteBin
                </div>
                <ul className='left-0 gap-4 flex flex-row items-center text-black Dropdown'>
                    <li><Link className="text-sm rounded-md px-2 py-1.5 hover:bg-gray-100 hover:text-gray-700 hover:shadow-sm focus:outline-2 focus:outline-offset-2 focus:outline-white" to="/">Home</Link></li>
                    <li><Link className="text-sm rounded-md px-2 py-1.5 hover:bg-gray-100 hover:text-gray-700 hover:shadow-sm focus:outline-2 focus:outline-offset-2 focus:outline-white" to="/about">About</Link></li>
                    <li><Link className='text-sm rounded-md px-2 py-1.5 hover:bg-gray-100 hover:text-gray-700 hover:shadow-sm focus:outline-2 focus:outline-offset-2 focus:outline-white' to="/contact">Contact</Link></li>
                    <li><Link className='text-sm rounded-md px-2 py-1.5 hover:bg-gray-100 hover:text-gray-700 hover:shadow-sm focus:outline-2 focus:outline-offset-2 focus:outline-white' to="/signup">Sign Up</Link></li>
                </ul>
                <div className="Dropdown-Mobile flex-col">
                    { menuVisible ?
                        (
                        <button type="button" onClick={() => handleMenu()} className="p-0 px-1 rounded-md hover:bg-gray-100 hover:text-gray-700 hover:shadow-sm focus:outline-2 focus:outline-offset-2 focus:outline-white">
                            <FontAwesomeIcon icon={faClose} color="black"/>
                        </button>
                        ) : (
                        <button type="button" onClick={() => handleMenu()} className="p-0 px-1 rounded-md hover:bg-gray-100 hover:text-gray-700 hover:shadow-sm focus:outline-2 focus:outline-offset-2 focus:outline-white">
                            <FontAwesomeIcon icon={faBars} color="black"/>
                        </button> 
                        )
                    }
                    
                    {/* mobile menu */}
                    { menuVisible ? 
                        (
                        <ul className='menuList gap-4 flex flex-col items-center text-black absolute right-0 top-12 w-screen bg-gray-200 py-3'>
                            <li><Link className="flex-grow text-sm rounded-md px-2 py-1.5 hover:bg-gray-100 hover:text-gray-700 hover:shadow-sm " to="/">Home</Link></li>
                            <li><Link className="flex-grow text-sm rounded-md px-2 py-1.5 hover:bg-gray-100 hover:text-gray-700 hover:shadow-sm " to="">About</Link></li>
                            <li><Link className='flex-grow text-sm rounded-md px-2 py-1.5 hover:bg-gray-100 hover:text-gray-700 hover:shadow-sm ' to="/contact">Contact</Link></li>
                            <li><Link className='flex-grow text-sm rounded-md px-2 py-1.5 hover:bg-gray-100 hover:text-gray-700 hover:shadow-sm ' to="">Sign Up</Link></li>
                        </ul>
                        ) : null 
                    }
                </div>
            </div>
        </>

    )
 };