import React from 'react';
import { appleImg, bagImg, searchImg } from '../utils'
import { navLists } from '../constants'

const Navbar = () => {
    return (
        <header className='py-5 px-5 w-full flex-center'>
            <nav className='w-full flex screen-max-width justify-between items-center'>
                <img
                    className='w-6'
                    src={appleImg}
                    alt="apple" />

                <div className='flex gap-3 items-center max-sm:hidden text-sm px-5 text-gray-400 '>
                    {navLists.map((item, index) => (
                        <a href="" key={index} className='hover:text-white transition-all'>{item}
                        </a>
                    ))}
                </div>

                <div className='flex gap-4'>
                    <img className='w-6' src={searchImg} alt="search" />
                    <img className='w-6' src={bagImg} alt="bag" />
                </div>
            </nav>

        </header>
    );
};

export default Navbar;