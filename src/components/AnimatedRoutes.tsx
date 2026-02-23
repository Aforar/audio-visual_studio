import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Import All Section Components
import Home from '../pages/Home';
import Manifest from '../pages/Manifest';
import Works from '../pages/Works';
import Process from '../pages/Process';
import Space from '../pages/Space';
import Clients from '../pages/Clients';
import Connect from '../pages/Connect';

const pageVariants = {
    initial: (direction: number) => ({
        y: direction > 0 ? '100%' : '-100%',
        opacity: 0
    }),
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: [0.77, 0, 0.175, 1] as any
        }
    },
    exit: (direction: number) => ({
        y: direction > 0 ? '-100%' : '100%',
        opacity: 0,
        transition: {
            duration: 0.8,
            ease: [0.77, 0, 0.175, 1] as any
        }
    })
};

const AnimatedRoutes: React.FC = () => {
    const location = useLocation();
    const routes = ['/', '/manifest', '/works', '/process', '/space', '/clients', '/contact'];

    // Determine scroll direction based on route index
    const prevPath = React.useRef(location.pathname);
    const prevIndex = routes.indexOf(prevPath.current);
    const currentIndex = routes.indexOf(location.pathname);
    const direction = currentIndex > prevIndex ? 1 : -1;

    React.useEffect(() => {
        prevPath.current = location.pathname;
    }, [location.pathname]);

    return (
        <AnimatePresence mode="wait" custom={direction}>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={
                    <motion.div custom={direction} variants={pageVariants} initial="initial" animate="animate" exit="exit" style={{ width: '100%', height: '100%' }}>
                        <Home />
                    </motion.div>
                } />
                <Route path="/manifest" element={
                    <motion.div custom={direction} variants={pageVariants} initial="initial" animate="animate" exit="exit" style={{ width: '100%', height: '100%' }}>
                        <Manifest />
                    </motion.div>
                } />
                <Route path="/works" element={
                    <motion.div custom={direction} variants={pageVariants} initial="initial" animate="animate" exit="exit" style={{ width: '100%', height: '100%' }}>
                        <Works />
                    </motion.div>
                } />
                <Route path="/process" element={
                    <motion.div custom={direction} variants={pageVariants} initial="initial" animate="animate" exit="exit" style={{ width: '100%', height: '100%' }}>
                        <Process />
                    </motion.div>
                } />
                <Route path="/space" element={
                    <motion.div custom={direction} variants={pageVariants} initial="initial" animate="animate" exit="exit" style={{ width: '100%', height: '100%' }}>
                        <Space />
                    </motion.div>
                } />
                <Route path="/clients" element={
                    <motion.div custom={direction} variants={pageVariants} initial="initial" animate="animate" exit="exit" style={{ width: '100%', height: '100%' }}>
                        <Clients />
                    </motion.div>
                } />
                <Route path="/contact" element={
                    <motion.div custom={direction} variants={pageVariants} initial="initial" animate="animate" exit="exit" style={{ width: '100%', height: '100%' }}>
                        <Connect />
                    </motion.div>
                } />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;
