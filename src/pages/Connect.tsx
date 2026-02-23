import React from 'react';

const Connect: React.FC = () => {
    return (
        <div style={{
            height: '100vh',
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0 60px',
            textAlign: 'center',
        }}>
            <h1 style={{
                fontSize: '11px',
                letterSpacing: '0.6em',
                color: 'rgba(255, 255, 255, 0.35)',
                textTransform: 'uppercase',
                marginBottom: '60px',
                fontFamily: "'Outfit', sans-serif"
            }}>
                06 / CONTACT
            </h1>

            <h2 style={{
                fontSize: 'calc(24px + 1.5vw)',
                fontWeight: 300,
                letterSpacing: '0.4em',
                lineHeight: '1.2',
                color: '#fff',
                textTransform: 'uppercase',
                marginBottom: '40px',
                fontFamily: "'Outfit', sans-serif",
            }}>
                PRIVATE COMMISSION
            </h2>

            <p style={{
                fontSize: '16px',
                fontWeight: 400,
                letterSpacing: '0.2em',
                color: 'rgba(255, 255, 255, 0.75)',
                maxWidth: '650px',
                lineHeight: '2',
                textTransform: 'uppercase',
                marginBottom: '80px'
            }}>
                For collaborations, installations, or commissioned work, contact the studio directly to initiate a conceptual dialogue.
            </p>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '30px',
                alignItems: 'center'
            }}>
                <a href="mailto:studio@audiovisual.com" style={{
                    fontSize: '28px', // Larger
                    color: '#fff',
                    textDecoration: 'none',
                    letterSpacing: '0.3em',
                    fontWeight: 300,
                    borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
                    paddingBottom: '12px',
                    transition: 'border-color 0.4s ease'
                }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.6)')}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)')}
                >
                    STUDIO@AUDIOVISUAL.COM
                </a>

                <div style={{
                    display: 'flex',
                    gap: '40px',
                    marginTop: '60px'
                }}>
                    <span style={{
                        fontSize: '11px',
                        letterSpacing: '0.4em',
                        color: 'rgba(255, 255, 255, 0.3)',
                        textTransform: 'uppercase'
                    }}>EST. 2026</span>
                    <span style={{
                        fontSize: '11px',
                        letterSpacing: '0.4em',
                        color: 'rgba(255, 255, 255, 0.3)',
                        textTransform: 'uppercase'
                    }}>AVAILABLE INTERNATIONALLY</span>
                </div>
            </div>
        </div>
    );
};

export default Connect;
