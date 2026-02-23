import React from 'react';

const Process: React.FC = () => {
    return (
        <div style={{
            height: '100vh',
            width: '100vw',
            display: 'flex',
            alignItems: 'center',
            padding: '0 60px',
            overflow: 'hidden'
        }}>
            {/* Visual Image / Placeholder (Left) */}
            <div style={{
                flex: '0 0 45%',
                height: '80vh',
                background: 'rgba(255, 255, 255, 0.015)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                position: 'relative',
                overflow: 'hidden',
                marginRight: '80px'
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
            <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
                <h1 style={{
                    fontSize: '11px',
                    letterSpacing: '0.5em',
                    color: 'rgba(255, 255, 255, 0.35)',
                    textTransform: 'uppercase',
                    marginBottom: '60px',
                    fontFamily: "'Outfit', sans-serif"
                }}>
                    03 / METHODOLOGY
                </h1>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '40px',
                    maxWidth: '500px'
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
                                fontSize: '15px',
                                fontWeight: 500,
                                letterSpacing: '0.2em',
                                marginBottom: '10px',
                                color: '#fff',
                                textTransform: 'uppercase'
                            }}>{item.title}</h2>
                            <p style={{
                                fontSize: '13px',
                                lineHeight: '1.6',
                                color: 'rgba(255, 255, 255, 0.75)',
                                fontWeight: 400
                            }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Process;
