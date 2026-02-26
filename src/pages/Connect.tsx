import React from 'react';
import { useWindowSize } from '../hooks/useWindowSize';

const Connect: React.FC = () => {
    const { width } = useWindowSize();
    const isMobile = width <= 768;

    return (
        <div style={{
            minHeight: '100vh',
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: isMobile ? '100px 20px 40px' : '0 60px',
            textAlign: 'center',
            overflowX: 'hidden',
            overflowY: isMobile ? 'auto' : 'hidden',
            transition: 'all 0.3s ease',
        }}>
            <h1 style={{
                fontSize: isMobile ? '9px' : '11px',
                letterSpacing: isMobile ? '0.3em' : '0.6em',
                color: 'rgba(255, 255, 255, 0.35)',
                textTransform: 'uppercase',
                marginBottom: isMobile ? '30px' : '60px',
                fontFamily: "'Outfit', sans-serif",
                transition: 'all 0.3s ease',
            }}>
                06 / CONTACT
            </h1>

            <h2 style={{
                fontSize: isMobile ? 'calc(20px + 1vw)' : 'calc(24px + 1.5vw)',
                fontWeight: 300,
                letterSpacing: isMobile ? '0.2em' : '0.4em',
                lineHeight: '1.2',
                color: '#fff',
                textTransform: 'uppercase',
                marginBottom: isMobile ? '25px' : '40px',
                fontFamily: "'Outfit', sans-serif",
                transition: 'all 0.3s ease',
            }}>
                PRIVATE COMMISSION
            </h2>

            <p style={{
                fontSize: isMobile ? '12px' : '16px',
                fontWeight: 400,
                letterSpacing: isMobile ? '0.1em' : '0.2em',
                color: 'rgba(255, 255, 255, 0.75)',
                maxWidth: '650px',
                lineHeight: isMobile ? '1.8' : '2',
                textTransform: 'uppercase',
                marginBottom: isMobile ? '50px' : '80px',
                transition: 'all 0.3s ease',
            }}>
                For collaborations, installations, or commissioned work, contact the studio directly to initiate a conceptual dialogue.
            </p>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: isMobile ? '40px' : '30px',
                alignItems: 'center',
                transition: 'all 0.3s ease',
            }}>
                <a href="mailto:studio@audiovisual.com" style={{
                    fontSize: isMobile ? 'calc(16px + 1vw)' : '28px', // Responsive size
                    color: '#fff',
                    textDecoration: 'none',
                    letterSpacing: isMobile ? '0.15em' : '0.3em',
                    fontWeight: 300,
                    borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
                    paddingBottom: isMobile ? '8px' : '12px',
                    transition: 'border-color 0.4s ease, all 0.3s ease',
                    wordBreak: 'break-all'
                }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.6)')}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)')}
                >
                    STUDIO@AUDIOVISUAL.COM
                </a>

                <div style={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    gap: isMobile ? '20px' : '40px',
                    marginTop: isMobile ? '30px' : '60px',
                    transition: 'all 0.3s ease',
                }}>
                    <span style={{
                        fontSize: isMobile ? '9px' : '11px',
                        letterSpacing: isMobile ? '0.2em' : '0.4em',
                        color: 'rgba(255, 255, 255, 0.3)',
                        textTransform: 'uppercase',
                        transition: 'all 0.3s ease',
                    }}>EST. 2026</span>
                    <span style={{
                        fontSize: isMobile ? '9px' : '11px',
                        letterSpacing: isMobile ? '0.2em' : '0.4em',
                        color: 'rgba(255, 255, 255, 0.3)',
                        textTransform: 'uppercase',
                        transition: 'all 0.3s ease',
                    }}>AVAILABLE INTERNATIONALLY</span>
                </div>
            </div>
        </div>
    );
};

export default Connect;
