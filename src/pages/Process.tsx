import React from 'react';
import { useWindowSize } from '../hooks/useWindowSize';

const Process: React.FC = () => {
    const { width } = useWindowSize();
    const isMobile = width <= 768;

    return (
        <div style={{
            minHeight: '100vh',
            width: '100vw',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'center',
            padding: isMobile ? '100px 20px 40px' : '0 60px',
            overflowX: 'hidden',
            overflowY: isMobile ? 'auto' : 'hidden',
            transition: 'all 0.3s ease',
        }}>
            {/* Visual Image / Placeholder (Left) */}
            <div style={{
                flex: isMobile ? 'none' : '0 0 45%',
                width: isMobile ? '100%' : 'auto',
                height: isMobile ? '35vh' : '80vh',
                background: 'rgba(255, 255, 255, 0.015)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                position: 'relative',
                overflow: 'hidden',
                marginRight: isMobile ? '0' : '80px',
                marginBottom: isMobile ? '30px' : '0',
                order: isMobile ? 1 : 1, // Optional: adjust order if you want image below text later
                transition: 'all 0.3s ease',
            }}>
                <img
                    src="/assets/process_studio.jpg"
                    alt="Studio Suite"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'grayscale(0.4) contrast(1.1) brightness(0.8)'
                    }}
                />
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(225deg, rgba(141, 125, 202, 0.15) 0%, transparent 100%)',
                    pointerEvents: 'none'
                }} />
            </div>

            {/* Content (Right) */}
            <div style={{
                flex: isMobile ? 'none' : '1',
                width: isMobile ? '100%' : 'auto',
                display: 'flex',
                flexDirection: 'column',
                order: isMobile ? 2 : 2,
            }}>
                <h1 style={{
                    fontSize: isMobile ? '9px' : '11px',
                    letterSpacing: isMobile ? '0.2em' : '0.5em',
                    color: 'rgba(255, 255, 255, 0.35)',
                    textTransform: 'uppercase',
                    marginBottom: isMobile ? '30px' : '60px',
                    fontFamily: "'Outfit', sans-serif",
                    transition: 'all 0.3s ease',
                }}>
                    03 / METHODOLOGY
                </h1>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: isMobile ? '25px' : '40px',
                    maxWidth: '500px',
                    transition: 'all 0.3s ease',
                }}>
                    {[
                        { step: '01', title: 'RESEARCH', desc: 'Space analysis, acoustic profiling, and narrative mapping.' },
                        { step: '02', title: 'COMPOSITION', desc: 'Layered sound design, light architecture, and motion systems.' },
                        { step: '03', title: 'CALIBRATION', desc: 'Extensive technical testing in simulated environments.' },
                        { step: '04', title: 'EXECUTION', desc: 'High-precision deployment with on-site technical control.' }
                    ].map((item, idx) => (
                        <div key={idx} style={{
                            paddingLeft: '30px',
                            borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
                            position: 'relative'
                        }}>
                            <div style={{
                                position: 'absolute',
                                left: '-5px',
                                top: '0',
                                width: '10px',
                                height: '10px',
                                background: idx % 2 === 0 ? '#8d7dca' : '#242880',
                                borderRadius: '50%',
                                opacity: 0.5
                            }} />
                            <h2 style={{
                                fontSize: isMobile ? '13px' : '15px',
                                fontWeight: 500,
                                letterSpacing: isMobile ? '0.1em' : '0.2em',
                                marginBottom: '10px',
                                color: '#fff',
                                textTransform: 'uppercase',
                                transition: 'all 0.3s ease',
                            }}>{item.title}</h2>
                            <p style={{
                                fontSize: isMobile ? '11px' : '13px',
                                lineHeight: '1.6',
                                color: 'rgba(255, 255, 255, 0.75)',
                                fontWeight: 400,
                                transition: 'all 0.3s ease',
                            }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Process;
