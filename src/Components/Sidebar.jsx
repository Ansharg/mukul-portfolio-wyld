import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { FaInstagram } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { FaYoutube } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';

const Sidebar = () => {
    const [click, setClick] = useState(false);
    return (
        <div className=' h-svh w-24 bg-black/30 fixed right-0 z-[999]'>
            <div className='h-full bg-transparent flex flex-col justify-between'>
                <motion.div className=' bg-transparent' transition={{ type: "tween", ease: "easeInOut", duration: 1 }}>
                    <AnimatePresence>
                        {click ? (
                            <motion.div
                                key="closeButton"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className='bg-transparent flex justify-center mt-4'
                                onClick={() => setClick(false)}
                            >
                                <RxCross2 className='text-white text-4xl bg-transparent' />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="openButton"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className='bg-transparent flex justify-center mt-4'
                                onClick={() => setClick(true)}
                            >
                                <RxHamburgerMenu className='text-white text-4xl bg-transparent' />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
                <div>
                    <div className='text-yellow-500 text-2xl'>
                        <div className='py-8 flex justify-center duration-200 ease-in-out hover:bg-white/10'>
                            <FaInstagram />
                        </div>
                        <div className='py-8 flex justify-center duration-200 ease-in-out hover:bg-white/10'>
                            <GrLinkedinOption />
                        </div>
                        <div className='py-8 flex justify-center duration-200 ease-in-out hover:bg-white/10'>
                            <FaYoutube />
                        </div>
                    </div>
                    <div className='h-52'>
                        <div className=' h-full flex items-center justify-center text-3xl font-light text-white'>
                            <button className=' -rotate-90'>
                                Scroll
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Sidebar
