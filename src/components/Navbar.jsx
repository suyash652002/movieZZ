import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='w-[100%] bg-black text-white flex gap-5 items-center  mx-auto h-[70px] lg:h-[70px]'>
            <div >
                <h1 className='flex items-center font-extrabold text-xl lg:text-2xl p-2 lg:p-4'><Link to={'/'}>movie</Link><span className='text-purple-900'>ZZ</span></h1>
            </div>
            <div>
                <ul className='flex items-center gap-3 lg:gap-8'>
                    <li className='p-1 lg:p-5 text-md text-sm font-semibold lg:text-xl'><Link to={"/movies"}>Movies</Link></li>
                    <li className='p-1 lg:p-5 text-md text-sm font-semibold lg:text-xl'>Series</li>
                    <li className='p-1 lg:p-5 text-md text-sm font-semibold lg:text-xl'>News</li>
                    <li className='p-1 lg:p-5 text-md text-sm font-semibold lg:text-xl'>Contact</li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
