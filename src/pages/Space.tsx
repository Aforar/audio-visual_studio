import React from 'react';

const Space: React.FC = () => {
    return (
        <div style={{
            height: '100vh',
            width: '100vw',
            display: 'flex',
            alignItems: 'center',
            padding: '0 60px',
            overflow: 'hidden'
        }}>
            <div style={{
                maxWidth: '1200px',
                width: '100%',
                display: 'flex',
                gap: '100px',
                alignItems: 'center'
            }}>
                <div style={{ flex: '1' }}>
                    <h1 style={{
                        fontSize: 'calc(24px + 1.5vw)',
                        fontWeight: 300,
                        letterSpacing: '0.4em',
                        lineHeight: '1.2',
                        color: '#fff',
                        textTransform: 'uppercase',
                        marginBottom: '40px',
                        fontFamily: "'Outfit', sans-serif",
                    }}>
                        CONTROLLED ENVIRONMENT.
                    </h1>
                    <p style={{
                        fontSize: '16px',
                        fontWeight: 400,
                        letterSpacing: '0.12em',
                        color: 'rgba(255, 255, 255, 0.85)',
                        lineHeight: '1.8',
                        textTransform: 'uppercase',
                        marginBottom: '50px',
                    }}>
                        Our Marseille-based studio is engineered for spatial mixing, projection research, and real-time visual experimentation.
                    </p>

                    <div style={{
                        padding: '30px',
                        background: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                    }}>
                        <h3 style={{
                            fontSize: '10px',
                            letterSpacing: '0.3em',
                            color: 'rgba(255, 255, 255, 0.4)',
                            marginBottom: '20px',
                            textTransform: 'uppercase'
                        }}>TECHNICAL INVENTORY</h3>

                        <ul style={{
                            listStyle: 'none',
                            fontSize: '11px',
                            letterSpacing: '0.15em',
                            color: 'rgba(255, 255, 255, 0.7)',
                            lineHeight: '2.5',
                            textTransform: 'uppercase'
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
                    flex: '1.2',
                    height: '60vh',
                    background: 'rgba(255, 255, 255, 0.015)',
                    border: '1px solid rgba(255, 255, 255, 0.03)',
                    position: 'relative',
                    overflow: 'hidden'
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
