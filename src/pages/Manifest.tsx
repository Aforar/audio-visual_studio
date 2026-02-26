import React from 'react';
import { useWindowSize } from '../hooks/useWindowSize';

const Manifest: React.FC = () => {
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
            {/* Left Column: Text Content */}
            <div style={{
                flex: isMobile ? 'none' : '0 0 50%',
                width: isMobile ? '100%' : 'auto',
                paddingRight: isMobile ? '0' : '60px',
                marginBottom: isMobile ? '40px' : '0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                order: isMobile ? 2 : 1, // Move text below image on mobile
            }}>
                <h1 style={{
                    fontSize: isMobile ? 'calc(20px + 2vw)' : 'calc(24px + 2vw)',
                    fontWeight: 300,
                    letterSpacing: isMobile ? '0.2em' : '0.4em',
                    lineHeight: '1.2',
                    color: '#fff',
                    textTransform: 'uppercase',
                    marginBottom: isMobile ? '25px' : '40px',
                    fontFamily: "'Outfit', sans-serif",
                    transition: 'all 0.3s ease',
                }}>
                    WE DESIGN SPATIAL ATMOSPHERE.
                </h1>

                <div style={{
                    fontSize: isMobile ? '12px' : '15px',
                    fontWeight: 400,
                    letterSpacing: isMobile ? '0.08em' : '0.12em',
                    color: 'rgba(255, 255, 255, 0.85)',
                    lineHeight: isMobile ? '1.6' : '1.8',
                    textTransform: 'uppercase',
                    marginBottom: isMobile ? '25px' : '40px',
                    maxWidth: '600px',
                    transition: 'all 0.3s ease',
                }}>
                    <p style={{ marginBottom: '24px' }}>
                        Studio Audio Visual is a multidisciplinary production studio specializing in immersive audio, projection environments, and architectural light design.
                    </p>
                    <p>
                        We engineer experiences where sound, motion, and space operate as a unified system. Our work spans branded environments, live performances, gallery installations, and commercial productions.
                    </p>
                </div>

                <div style={{
                    display: 'flex',
                    gap: isMobile ? '15px' : '30px',
                    flexWrap: 'wrap',
                    fontSize: isMobile ? '9px' : '11px',
                    letterSpacing: isMobile ? '0.1em' : '0.2em',
                    color: 'rgba(255, 255, 255, 0.45)',
                    textTransform: 'uppercase',
                    transition: 'all 0.3s ease',
                }}>
                    <span>• Spatial Audio Engineering</span>
                    <span>• Projection Mapping</span>
                    <span>• Light Architecture</span>
                    <span>• Interactive Media Systems</span>
                </div>
            </div>

            {/* Right Column: Real Image with Creative Masking */}
            <div style={{
                flex: isMobile ? 'none' : '0 0 50%',
                width: isMobile ? '100%' : 'auto',
                height: isMobile ? '40vh' : '70vh',
                position: 'relative',
                order: isMobile ? 1 : 2, // Image on top on mobile
                marginBottom: isMobile ? '40px' : '0',
                maskImage: "url(\"data:image/svg+xml,%3Csvg width='221' height='122' viewBox='0 0 221 122' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='M183 4C183 1.79086 184.791 0 187 0H217C219.209 0 221 1.79086 221 4V14V28V99C221 101.209 219.209 103 217 103H182C179.791 103 178 104.791 178 107V118C178 120.209 176.209 122 174 122H28C25.7909 122 24 120.209 24 118V103V94V46C24 43.7909 22.2091 42 20 42H4C1.79086 42 0 40.2091 0 38V18C0 15.7909 1.79086 14 4 14H24H43H179C181.209 14 183 12.2091 183 10V4Z' fill='%23D9D9D9'/%3E%3C/svg%3E%0A\")",
                WebkitMaskImage: "url(\"data:image/svg+xml,%3Csvg width='221' height='122' viewBox='0 0 221 122' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='M183 4C183 1.79086 184.791 0 187 0H217C219.209 0 221 1.79086 221 4V14V28V99C221 101.209 219.209 103 217 103H182C179.791 103 178 104.791 178 107V118C178 120.209 176.209 122 174 122H28C25.7909 122 24 120.209 24 118V103V94V46C24 43.7909 22.2091 42 20 42H4C1.79086 42 0 40.2091 0 38V18C0 15.7909 1.79086 14 4 14H24H43H179C181.209 14 183 12.2091 183 10V4Z' fill='%23D9D9D9'/%3E%3C/svg%3E%0A\")",
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                maskSize: 'contain',
                WebkitMaskSize: 'contain',
                maskPosition: 'center',
                WebkitMaskPosition: 'center',
                transition: 'all 0.3s ease',
            }}>
                <img
                    src="/assets/manifest_hero.jpg"
                    alt="Production Master"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'grayscale(0.3) brightness(0.8) contrast(1.1)',
                    }}
                />
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(45deg, rgba(141, 125, 202, 0.1) 0%, transparent 100%)',
                    pointerEvents: 'none'
                }} />
            </div>
        </div>
    );
};

export default Manifest;
