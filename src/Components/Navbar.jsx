import React from 'react'
import logo from '../Assests/logo.svg'

const Navbar = () => {
    return (
        <header className='fixed w-full bg-black/30 z-[999]'>
            <div className='h-24 w-full px-20 flex items-center'>
                <div className='flex'>
                    <div className='w-24 mr-5'>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className='w-fit text-white items-end flex'>
                        <img src="" alt="" />
                        <p className='uppercase text-6xl font-bold'>mukul goyal</p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
