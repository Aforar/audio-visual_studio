import React from 'react';
import { useWindowSize } from '../hooks/useWindowSize';

const Space: React.FC = () => {
    const { width } = useWindowSize();
    const isMobile = width <= 768;

    return (
        <div style={{
            minHeight: '100vh',
            width: '100vw',
            display: 'flex',
            alignItems: 'center',
            padding: isMobile ? '100px 20px 40px' : '0 60px',
            overflowX: 'hidden',
            overflowY: isMobile ? 'auto' : 'hidden',
            transition: 'all 0.3s ease',
        }}>
            <div style={{
                maxWidth: '1200px',
                width: '100%',
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                gap: isMobile ? '40px' : '100px',
                alignItems: 'center',
            }}>
                <div style={{
                    flex: isMobile ? 'none' : '1',
                    width: isMobile ? '100%' : 'auto',
                    order: isMobile ? 2 : 1 // Text below image on mobile
                }}>
                    <h1 style={{
                        fontSize: isMobile ? 'calc(20px + 2vw)' : 'calc(24px + 1.5vw)',
                        fontWeight: 300,
                        letterSpacing: isMobile ? '0.2em' : '0.4em',
                        lineHeight: '1.2',
                        color: '#fff',
                        textTransform: 'uppercase',
                        marginBottom: isMobile ? '25px' : '40px',
                        fontFamily: "'Outfit', sans-serif",
                        transition: 'all 0.3s ease',
                    }}>
                        CONTROLLED ENVIRONMENT.
                    </h1>
                    <p style={{
                        fontSize: isMobile ? '14px' : '16px',
                        fontWeight: 400,
                        letterSpacing: isMobile ? '0.08em' : '0.12em',
                        color: 'rgba(255, 255, 255, 0.85)',
                        lineHeight: isMobile ? '1.6' : '1.8',
                        textTransform: 'uppercase',
                        marginBottom: isMobile ? '30px' : '50px',
                        transition: 'all 0.3s ease',
                    }}>
                        Our Marseille-based studio is engineered for spatial mixing, projection research, and real-time visual experimentation.
                    </p>

                    <div style={{
                        padding: isMobile ? '20px' : '30px',
                        background: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        transition: 'all 0.3s ease',
                    }}>
                        <h3 style={{
                            fontSize: '10px',
                            letterSpacing: isMobile ? '0.15em' : '0.3em',
                            color: 'rgba(255, 255, 255, 0.4)',
                            marginBottom: isMobile ? '15px' : '20px',
                            textTransform: 'uppercase',
                            transition: 'all 0.3s ease',
                        }}>TECHNICAL INVENTORY</h3>

                        <ul style={{
                            listStyle: 'none',
                            fontSize: isMobile ? '9px' : '11px',
                            letterSpacing: isMobile ? '0.1em' : '0.15em',
                            color: 'rgba(255, 255, 255, 0.7)',
                            lineHeight: isMobile ? '2' : '2.5',
                            textTransform: 'uppercase',
                            transition: 'all 0.3s ease',
                        }}>
                            <li>• 12-channel Monitoring System</li>
                            <li>• Modular Analog Synthesis</li>
                            <li>• 4K Projection Testing Wall</li>
                            <li>• Fully Blackout Soundstage</li>
                            <li>• Cinema-Grade Narrative Systems</li>
                        </ul>
                    </div>
                </div>

                {/* Studio Image Frame */}
                <div style={{
                    flex: isMobile ? 'none' : '1.2',
                    width: isMobile ? '100%' : 'auto',
                    height: isMobile ? '40vh' : '60vh',
                    background: 'rgba(255, 255, 255, 0.015)',
                    border: '1px solid rgba(255, 255, 255, 0.03)',
                    position: 'relative',
                    overflow: 'hidden',
                    order: isMobile ? 1 : 2, // Image on top on mobile
                    transition: 'all 0.3s ease',
                }}>
                    <img
                        src="/assets/space_audio.jpg"
                        alt="Studio Environment"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            filter: 'grayscale(0.2) contrast(1.1) brightness(0.85)'
                        }}
                    />
                    {/* Subtle light leak effect */}
                    <div style={{
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                        width: '300px',
                        height: '300px',
                        background: 'radial-gradient(circle at bottom right, rgba(141, 125, 202, 0.2) 0%, transparent 70%)',
                        pointerEvents: 'none'
                    }} />
                </div>
            </div>
        </div>
    );
};

export default Space;
