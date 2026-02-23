import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

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

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '80px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 60px',
            zIndex: 1000,
            background: 'transparent',
        }}>
            {/* 1) Left — Brand Presence */}
            <div
                onClick={() => navigate('/')}
                style={{
                    textTransform: 'uppercase',
                    letterSpacing: '0.4em',
                    fontSize: '16px',
                    fontWeight: 400,
                    color: '#fff',
                    userSelect: 'none',
                    fontFamily: "'Outfit', sans-serif",
                    cursor: 'pointer',
                }}
            >
                STUDIO AUDIO VISUAL
            </div>

            {/* 2) Center — Navigation Labels */}
            <div style={{
                display: 'flex',
                gap: '40px',
                alignItems: 'center',
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

            {/* 3) Right — Primary Action */}
            <div>
                <button
                    onClick={() => navigate('/contact')}
                    style={{
                        background: 'transparent',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        color: '#fff',
                        padding: '10px 24px',
                        fontSize: '10px',
                        letterSpacing: '0.2em',
                        cursor: 'pointer',
                        transition: 'all 0.4s ease',
                        outline: 'none',
                        textTransform: 'uppercase',
                        fontFamily: "'Inter', sans-serif",
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
            </div>
        </nav>
    );
};

export default Topbar;
