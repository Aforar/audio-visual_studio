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
            padding: window.innerWidth <= 768 ? '0 20px' : '0 60px',
            textAlign: 'center',
            transition: 'padding 0.3s ease',
        }}>
            <div style={{
                position: 'absolute',
                top: window.innerWidth <= 768 ? '100px' : '140px',
                left: window.innerWidth <= 768 ? '20px' : '60px',
                fontSize: window.innerWidth <= 768 ? '8px' : '10px',
                letterSpacing: window.innerWidth <= 768 ? '0.2em' : '0.4em',
                color: 'rgba(255, 255, 255, 0.4)',
                textTransform: 'uppercase',
                zIndex: 10,
                transition: 'all 0.3s ease',
            }}>
                EST. 2026 — [INDEPENDENT PRODUCTION]
            </div>

            <h1 style={{
                fontSize: window.innerWidth <= 768 ? 'calc(20px + 2vw)' : 'calc(24px + 3vw)',
                fontWeight: 300,
                letterSpacing: window.innerWidth <= 768 ? '0.3em' : '0.55em',
                lineHeight: '1.25',
                color: '#fff',
                textTransform: 'uppercase',
                maxWidth: '1300px',
                margin: window.innerWidth <= 768 ? '0 0 30px 0' : '0 0 50px 0',
                fontFamily: "'Outfit', sans-serif",
                transition: 'all 0.3s ease',
            }}>
                WHERE AUDIO BECOMES ARCHITECTURE
            </h1>

            <p style={{
                fontSize: window.innerWidth <= 768 ? '12px' : '15px',
                fontWeight: 400,
                letterSpacing: window.innerWidth <= 768 ? '0.15em' : '0.25em',
                color: 'rgba(255, 255, 255, 0.9)',
                maxWidth: '700px',
                lineHeight: window.innerWidth <= 768 ? '1.8' : '2',
                textTransform: 'uppercase',
                transition: 'all 0.3s ease',
            }}>
                A multidisciplinary studio crafting spatial audio and visual environments.
            </p>

            <div className={window.innerWidth <= 768 ? "" : ""} style={{
                position: 'absolute',
                bottom: window.innerWidth <= 768 ? '40px' : '80px',
                left: window.innerWidth <= 768 ? '20px' : '60px',
                fontSize: window.innerWidth <= 768 ? '8px' : '10px',
                letterSpacing: window.innerWidth <= 768 ? '0.2em' : '0.4em',
                color: 'rgba(255, 255, 255, 0.35)',
                textTransform: 'uppercase',
                display: 'flex',
                gap: window.innerWidth <= 768 ? '10px' : '20px',
                flexDirection: 'column',
                textAlign: 'left',
                zIndex: 10,
                transition: 'all 0.3s ease',
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

            <div className="hide-on-mobile" style={{
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
