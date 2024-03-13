import React, { useState, useEffect } from 'react';
import Loader from '../Components/Loader';
import Sidebar from '../Components/Sidebar';
import Marque from '../Components/Marque'
import Navbar from '../Components/Navbar';
import { motion } from 'framer-motion';

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
        function handleScroll() {
            setScrollPosition(window.scrollY);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPosition]);

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                <main>
                    <Navbar />
                    <Sidebar />
                    <section className='h-screen px-20 pt-20 z-20' style={{ backgroundImage: "radial-gradient(circle at 80% 60%, #0048A1 , transparent 50%)" }}>
                        <div className='text-white text-5xl font-bold mt-48 w-fit leading-[3rem]'>
                            <p className='tracking-widest'>THE WORLD's 1st SOCIAL</p>
                            <p className='tracking-wider'>CURRENCY CARD</p>
                            <p className='text-4xl font-semibold'>FUELLED BY LIKES & SHARE</p>
                            <div className='w-fit mt-10 rounded-lg overflow-hidden'>
                                <motion.button initial={{ backgroundImage: "linear-gradient(to right, #d6a2f2, #9257eb)" }} whileHover={{ backgroundImage: "linear-gradient(to right, #9257eb, #d6a2f2)" }} transition={{ duration: 1, type: "tween" }} className=' w-96 text-4xl font-light py-4'>
                                    Contact Me
                                </motion.button>
                            </div>
                        </div>
                    </section>
                    <section className='relative z-10'>
                        <div className="text-white z-20 tracking-widest h-svh text-[12rem] leading-tight uppercase flex flex-col font-black justify-center items-center">
                            <p className='-translate-x-40 z-20 to-zinc-100'>Buy</p>
                            <p className='translate-x-20 z-20'>Post</p>
                            <p className='-translate-x-20 z-20'>Earn</p>
                        </div>
                        <motion.div className='absolute top-0 w-[1px] z-10 left-[28%] bg-white/60' animate={{ height: scrollPosition - 500, maxHeight: "100%", transformOrigin: 0, transition:{ease: "linear"} }}>
                        </motion.div>
                        <motion.div className='absolute top-0 z-10 w-[1px] left-[45%] bg-white/60' animate={{ height: scrollPosition - 200, maxHeight: "100%", transformOrigin: 0, transition:{ease: "linear"} }}>
                        </motion.div>
                        <motion.div className='absolute top-0 z-10 w-[1px] left-[72%] bg-white/60' animate={{ height: scrollPosition - 600, maxHeight: "100%", transformOrigin: 0, transition:{ease: "linear"} }}>
                        </motion.div>
                        <section className='p-2 z-20'>
                            <motion.div className='bg-gray-500 z-20 h-[40rem] w-[33rem] mx-auto '
                                initial={{ scale: 1.2 }}
                                whileInView={() => {
                                    if (scrollPosition > 1200 && scrollPosition < 1500) {
                                        return { scale: 1 };
                                    }
                                    else {
                                        return { scale: 1.2 };
                                    }
                                }}
                                transition={{ duration: 1, type: "spring", stiffness: 30 }}
                            >
                            </motion.div>
                        </section>
                        <section className='p-2 z-20 mt-40'>
                            <motion.div className='bg-gray-500 z-20 h-[40rem] w-[33rem] mx-auto '
                                initial={{ scale: 1.2 }}
                                whileInView={() => {
                                    if (scrollPosition > 2100 && scrollPosition < 2400) {
                                        return { scale: 1 };
                                    }
                                    else {
                                        return { scale: 1.2 };
                                    }
                                }}
                                transition={{ duration: 1, type: "spring", stiffness: 30 }}
                            >
                            </motion.div>
                        </section>
                        <section className='p-2 z-20 mt-40'>
                            <motion.div className='bg-gray-500 z-20 h-[40rem] w-[33rem] mx-auto '
                                initial={{ scale: 1.2 }}
                                whileInView={() => {
                                    if (scrollPosition > 2800 && scrollPosition < 3100) {
                                        return { scale: 1 };
                                    }
                                    else {
                                        return { scale: 1.2 };
                                    }
                                }}
                                transition={{ duration: 1, type: "spring", stiffness: 30 }}
                            >
                            </motion.div>
                        </section>
                        <section className=' h-dvh flex justify-center items-center w-full overflow-hidden '>
                            <motion.div
                                className='w-fit text-white text-[25rem]'
                                whileInView={() => {
                                    if (scrollPosition > 3800) {
                                        return { scale: 1 + (scrollPosition * 0.0009), opacity: [1,1,1,0], transition: { ease: "linear" } };
                                    }
                                }}
                                exit={{ display: "none" }}
                            >
                                <p>
                                    1000
                                </p>
                            </motion.div>
                        </section>
                        <section className='h-svh mt-40 flex justify-center flex-col'>
                            <div className='text-white w-[33rem] mx-auto text-center text-4xl font-semibold'>
                                <p>1000+ Followers on instagram</p>
                            </div>
                            <motion.div initial={{ marginTop: 200 }} whileInView={{ marginTop: 20 }} className='text-white uppercase w-[33rem] mx-auto text-center text-6xl font-semibold'>
                                <p>Is All You Need</p>
                            </motion.div>
                            <div className='text-white mt-5 relative uppercase w-[33rem] mx-auto text-center text-7xl font-semibold'>
                                <p>to #getWyld</p>
                                <motion.div whileInView={() => {
                                    if (scrollPosition > 4300) {
                                        return { y: 80, transition: { duration: 0.6, ease: "easeInOut" } }
                                    }
                                }} className={`absolute top-0 bg-black w-full h-full`}>
                                </motion.div>
                            </div>
                        </section>
                    </section>
                    <section>
                        <div className={`w-full h-screen ${scrollPosition > 5500 ? "" : "bg-fixed"}`} style={{ backgroundImage: "url(data:image/jpeg;base64,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)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                        </div>
                    </section>
                    <section className='relative'>
                        <motion.div className='absolute z-10 w-[1px] bottom-0 bg-white/60 left-[28%] text-white' animate={{ height: scrollPosition >= 5000 ? (8000 - scrollPosition/10) : 8000 , rotateZ: 180, maxHeight: "100%"}}/>
                        <motion.div className='absolute z-10 w-[1px] bottom-0 bg-white/60 left-[45%] text-white' animate={{ height: scrollPosition >= 5000 ? (8000 - scrollPosition/10) : 8000 , rotateZ: 180, maxHeight: "100%" }} />
                        <motion.div className='absolute z-10 w-[1px] bottom-0 bg-white/60 left-[72%] text-white' animate={{ height: scrollPosition >= 5000 ? (8000 - scrollPosition/10) : 8000 , rotateZ: 180, maxHeight: "100%" }} />
                        <div className='py-20 gap-0 z-20'>
                            <Marque />
                        </div>
                        <div className='flex justify-end'>
                            <div className='text-white w-[72%] font-semibold text-3xl'>
                                <div className='text-[12rem] flex items-center h-40 font-black'>
                                    <p className=''>WYLD?</p>
                                </div>
                                <div className='mt-20 w-5/6 italic'>
                                    <p>Influence is for everyone! Creator? A regular Instagrammer? You just need 1000 followers, and WYLD will help ENCASH YOUR INFLUENCE.</p>
                                </div>
                                <div className='mt-12 italic'>
                                    <p>Shop your favorite brands with the WYLD card → Give the brand a shout out on your Instagram → Earn upto 100% cashback on your purchase! </p>
                                </div>
                                <div className='mt-12 italic'>
                                    <p>Is this illegal? No.</p>
                                </div>
                                <div className=' italic'>
                                    <p>Does it feel like it should be illegal? You bet.</p>
                                </div>
                            </div>
                        </div>
                        <section className='mt-40'>
                            <div className='flex'>
                                <div className='text-white text-5xl font-bold'>
                                    <div className=' w-64'>
                                        <p>SOME BRANDS <span>THAT LOVE</span> US</p>
                                    </div>
                                </div>
                                <div>
                                    {/* marque images */}
                                </div>
                            </div>
                        </section>
                        <section className='mt-20'>
                            <div className='text-white text-center text-[10rem] font-black'>
                                <p className={`backgroundimage`}>WYLDTEAM</p>
                            </div>
                        </section>
                    </section>
                </main>
                </>
            )}
        </>
    );
};

export default Home;
