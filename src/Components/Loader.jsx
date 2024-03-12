import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function App() {
  const [isWhite, setIsWhite] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsWhite((prevIsWhite) => !prevIsWhite);
    }, 500); // Change color every 0.5 seconds

    return () => clearInterval(interval);
  }, []); // Run only once when the component mounts

  return (
    <motion.div
      animate={{
        color: isWhite ? 'black' : 'white',
        backgroundColor: isWhite ? 'white' : 'black'
      }}
      transition={{type: "spring", stiffness: 15}}
      className='w-full h-svh overflow-hidden flex justify-center items-center'
    >
      <motion.div
        initial={{ scale: 4 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, delay: 0.3, type: "spring", stiffness: 30 }}
        className='xl:text-9xl text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase font-extrabold font-sans'
      >
        <p>Mukul Goyal</p>
      </motion.div>
    </motion.div>
  );
}

export default App;
