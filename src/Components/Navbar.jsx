import React from 'react';

const Navbar = () => {
    const links = <>
    <li className='mx-2 font-bold'>Home</li>
    <li className='mx-2 font-bold'>About</li>
    <li className='mx-2 font-bold'>Skills</li>
    <li className='mx-2 font-bold'>Project</li>
    <li className='mx-2 font-bold'>Contact</li>
    </>

return (
    <div className="navbar bg-[#D7D7D7] shadow-sm basic-font ">
        <div className="navbar-start">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                   {
                    links
                   }
                </ul>
            </div>
            <a className="text-xl font-bold hidden md:block">Rayhan</a>
        </div>
        <div className="navbar-center hidden md:flex">
            <ul className="menu menu-horizontal px-1">
               {
                links
               }
            </ul>
        </div>
        <div className="navbar-end">
            <a className="btn rounded-full ">Contact Me</a>
        </div>
    </div>
);
};

export default Navbar;