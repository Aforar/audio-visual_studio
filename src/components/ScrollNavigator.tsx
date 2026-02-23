import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const routes = ['/', '/manifest', '/works', '/process', '/space', '/clients', '/contact'];

const ScrollNavigator: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isAnimating, setIsAnimating] = useState(false);
    const scrollAcc = useRef(0);
    const touchStart = useRef<number | null>(null);

    useEffect(() => {
        const currentIndex = routes.indexOf(location.pathname);

        const handleNavigation = (direction: number) => {
            if (isAnimating) return;

            const nextIndex = currentIndex + direction;
            if (nextIndex >= 0 && nextIndex < routes.length) {
                setIsAnimating(true);
                navigate(routes[nextIndex]);

                // Lock for the duration of the animation (match AnimatedRoutes transition)
                setTimeout(() => {
                    setIsAnimating(false);
                    scrollAcc.current = 0;
                }, 1000);
            }
        };

        const handleWheel = (e: WheelEvent) => {
            if (Math.abs(e.deltaY) < 10) return;

            scrollAcc.current += e.deltaY;

            if (Math.abs(scrollAcc.current) > 50) {
                handleNavigation(scrollAcc.current > 0 ? 1 : -1);
            }
        };

        const handleTouchStart = (e: TouchEvent) => {
            touchStart.current = e.touches[0].clientY;
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (touchStart.current === null) return;

            const touchEnd = e.touches[0].clientY;
            const delta = touchStart.current - touchEnd;

            if (Math.abs(delta) > 50) {
                handleNavigation(delta > 0 ? 1 : -1);
                touchStart.current = null;
            }
        };

        window.addEventListener('wheel', handleWheel, { passive: false });
        window.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchmove', handleTouchMove);

        return () => {
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, [location.pathname, navigate, isAnimating]);

    return null;
};

export default ScrollNavigator;
