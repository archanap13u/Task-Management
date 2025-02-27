import React, { useEffect, useRef, useState } from 'react'
import { MdOutlineSearch } from 'react-icons/md'
import { CgProfile } from "react-icons/cg";
import { AiOutlineLogout } from "react-icons/ai";
import { BiMenu } from 'react-icons/bi';
import { BiX } from 'react-icons/bi';
import Sidebarr from './Sidebarr';
import Profile from './Profile';
function Navbar() {

   
    const [menuopen,setmenuopen]=useState(false)
    const menuOpens=()=>{
        setmenuopen(!menuopen)
    }

    const [open, setopen] = useState(false)
    const opens = () => {
        setopen(!open)
    }


    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setopen((prev) => !prev);
    };

    const closeDropdown = () => {
        setopen(false);
    };

    // Close dropdown if clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setopen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <>
            <div className='flex justify-between items-center bg-white px-4 py-3 2xl:py-4 sticky z-10 top-0'>
                <div className='flex gap-4' >
                    <button className='text-2xl text-grey-500 block md:hidden'><BiMenu fontSize={24} onClick={menuOpens}/></button>
                    <div className={`fixed left-0 top-0 h-full bg-white w-64 shadow-lg p-4 transition-transform duration-300
                ${menuopen ? "translate-x-0" : "-translate-x-full"} 
                md:hidden`}>
                {/* Close Button */}
                <button onClick={menuOpens} className="text-gray-500 text-xl">✖</button>
                <p className="mt-4">
                    <Sidebarr/>
                </p>
            </div>
                    <div className='w-64 2xl:w-[400px] flex items-center py-2 px-3 gap-2 rounded-full bg-[#f3f4f6]'>
                        <MdOutlineSearch className='text-grey-500 text-xl' />
                        <input type='text'
                            placeholder='search'
                            className='flex-1 outline-none bg-transparent placeholder:text-grey-500 text-grey-800'></input>
                    </div>
                </div>

                <div className="flex gap-2 items-center">
            <div className="relative inline-block text-left" ref={dropdownRef}>
                {/* Profile Image */}
                <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/019/879/186/small_2x/user-icon-on-transparent-background-free-png.png"
                    className="w-[50px] h-[40px] object-contain rounded-lg hover:border-blue-700"
                    onClick={toggleDropdown}
                    style={{ cursor: "pointer" }}
                    alt="Profile"
                />

                {/* Dropdown Menu */}
                {open && (
                    <div className="absolute mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg right-0 z-10">
                        <ul className="py-2">
                            <Profile/>

                            <li
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500 flex"
                                onClick={closeDropdown} // Close on Logout click
                            >
                                <AiOutlineLogout size={22} className="mt-1 me-2" />
                                Logout
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
        </div>
        </>
    )
}

export default Navbar