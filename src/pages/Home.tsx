import React from 'react';

const Home: React.FC = () => {
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
            <div style={{
                position: 'absolute',
                top: '140px', // Adjusted for more air
                left: '60px',
                fontSize: '10px',
                letterSpacing: '0.4em',
                color: 'rgba(255, 255, 255, 0.4)',
                textTransform: 'uppercase',
                zIndex: 10,
            }}>
                EST. 2026 — [INDEPENDENT PRODUCTION]
            </div>

            <h1 style={{
                fontSize: 'calc(24px + 3vw)',
                fontWeight: 300,
                letterSpacing: '0.55em',
                lineHeight: '1.25',
                color: '#fff',
                textTransform: 'uppercase',
                maxWidth: '1300px',
                margin: '0 0 50px 0',
                fontFamily: "'Outfit', sans-serif",
            }}>
                WHERE AUDIO BECOMES ARCHITECTURE
            </h1>

            <p style={{
                fontSize: '15px',
                fontWeight: 400,
                letterSpacing: '0.25em',
                color: 'rgba(255, 255, 255, 0.9)',
                maxWidth: '700px',
                lineHeight: '2',
                textTransform: 'uppercase',
            }}>
                A multidisciplinary studio crafting spatial audio and visual environments.
            </p>

            <div style={{
                position: 'absolute',
                bottom: '80px',
                left: '60px',
                fontSize: '10px',
                letterSpacing: '0.4em',
                color: 'rgba(255, 255, 255, 0.35)',
                textTransform: 'uppercase',
                display: 'flex',
                gap: '20px',
                flexDirection: 'column',
                textAlign: 'left',
                zIndex: 10,
            }}>
                <span style={{ fontWeight: 400 }}>
                    DEVELOPED BY <a
                        href="https://www.linkedin.com/in/abdelmalek-mazouzi/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: 'rgba(255, 255, 255, 0.6)',
                            textDecoration: 'none',
                            transition: 'color 0.3s ease'
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)')}
                    >
                        ABDELMALEK MAZOUZI
                    </a>
                </span>
                <a
                    href="mailto:aforar.business@gmail.com"
                    style={{
                        color: 'rgba(255, 255, 255, 0.3)',
                        textDecoration: 'none',
                        transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.3)')}
                >
                    CONTACT / AFORAR.BUSINESS@GMAIL.COM
                </a>
            </div>

            <div style={{
                position: 'absolute',
                bottom: '80px',
                right: '60px',
                fontSize: '10px',
                letterSpacing: '0.4em',
                color: 'rgba(255, 255, 255, 0.35)',
                textTransform: 'uppercase',
                display: 'flex',
                gap: '60px',
                zIndex: 10,
            }}>
                <span>MOTION . SOUND . FORM</span>
                <span>BASED IN MARSEILLE</span>
            </div>
        </div>
    );
};

export default Home;
