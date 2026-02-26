import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useWindowSize } from '../hooks/useWindowSize';

const navItems = [
    { num: '01', label: 'MANIFEST', path: '/manifest' },
    { num: '02', label: 'WORKS', path: '/works' },
    { num: '03', label: 'PROCESS', path: '/process' },
    { num: '04', label: 'SPACE', path: '/space' },
    { num: '05', label: 'CLIENTS', path: '/clients' },
];

const Topbar: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { width } = useWindowSize();
    const isMobile = width <= 768;

    return (
        <>
            {/* Full Screen Mobile Menu Overlay */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(0,0,0,0.95)',
                zIndex: 999,
                display: isMenuOpen ? 'flex' : 'none',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '30px',
                opacity: isMenuOpen ? 1 : 0,
                transition: 'opacity 0.4s ease',
            }}>
                {navItems.map((item, index) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <div
                            key={index}
                            onClick={() => {
                                setIsMenuOpen(false);
                                navigate(item.path);
                            }}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                cursor: 'pointer',
                            }}
                        >
                            <span style={{
                                fontSize: '12px',
                                fontWeight: 300,
                                color: isActive ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.4)',
                                letterSpacing: '0.1em',
                            }}>{item.num}</span>
                            <span style={{
                                fontSize: '24px',
                                fontWeight: 300,
                                color: isActive ? '#fff' : 'rgba(255, 255, 255, 0.5)',
                                letterSpacing: '0.2em',
                            }}>
                                {item.label}
                            </span>
                        </div>
                    );
                })}
            </div>

            <nav style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: isMobile ? '0 20px' : '0 60px',
                zIndex: 1000,
                background: 'transparent',
                transition: 'padding 0.3s ease',
            }}>
                {/* 1) Left — Brand Presence */}
                <div
                    onClick={() => {
                        if (isMenuOpen) setIsMenuOpen(false);
                        navigate('/');
                    }}
                    style={{
                        textTransform: 'uppercase',
                        letterSpacing: isMobile ? '0.2em' : '0.4em',
                        fontSize: isMobile ? '12px' : '16px',
                        fontWeight: 400,
                        color: '#fff',
                        userSelect: 'none',
                        fontFamily: "'Outfit', sans-serif",
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        whiteSpace: 'nowrap',
                    }}
                >
                    STUDIO AUDIO VISUAL
                </div>

                {/* 2) Center — Navigation Labels */}
                <div className="hide-on-mobile" style={{
                    display: 'flex',
                    gap: width <= 1024 ? '20px' : '40px',
                    alignItems: 'center',
                    transition: 'gap 0.3s ease',
                }}>
                    {navItems.map((item, index) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <div
                                key={index}
                                onClick={() => navigate(item.path)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    cursor: 'pointer',
                                }}
                            >
                                <span style={{
                                    fontSize: '10px',
                                    fontWeight: 300,
                                    color: isActive ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.4)',
                                    letterSpacing: '0.1em',
                                    transition: 'color 0.4s ease',
                                }}>{item.num}</span>
                                <span style={{
                                    fontSize: '12px',
                                    fontWeight: 300,
                                    color: isActive ? '#fff' : 'rgba(255, 255, 255, 0.5)',
                                    letterSpacing: '0.2em',
                                    transition: 'color 0.4s ease',
                                }}
                                    onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                                    onMouseLeave={(e) => (e.currentTarget.style.color = isActive ? '#fff' : 'rgba(255, 255, 255, 0.5)')}
                                >
                                    {item.label}
                                </span>
                            </div>
                        );
                    })}
                </div>

                {/* 3) Right — Primary Action & Hamburger */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <button
                        onClick={() => {
                            if (isMenuOpen) setIsMenuOpen(false);
                            navigate('/contact');
                        }}
                        style={{
                            background: 'transparent',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            color: '#fff',
                            padding: isMobile ? '8px 16px' : '10px 24px',
                            fontSize: '10px',
                            letterSpacing: '0.2em',
                            cursor: 'pointer',
                            transition: 'all 0.4s ease',
                            outline: 'none',
                            textTransform: 'uppercase',
                            fontFamily: "'Inter', sans-serif",
                            whiteSpace: 'nowrap',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                        }}
                    >
                        CONTACT
                    </button>

                    {/* Mobile Menu Toggle */}
                    {isMobile && (
                        <div
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            style={{
                                cursor: 'pointer',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '5px',
                                zIndex: 1001
                            }}
                        >
                            <div style={{ width: '25px', height: '1px', background: '#fff', transition: 'all 0.3s ease', transform: isMenuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
                            <div style={{ width: '25px', height: '1px', background: '#fff', transition: 'all 0.3s ease', opacity: isMenuOpen ? 0 : 1 }} />
                            <div style={{ width: '25px', height: '1px', background: '#fff', transition: 'all 0.3s ease', transform: isMenuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
};

export default Topbar;
