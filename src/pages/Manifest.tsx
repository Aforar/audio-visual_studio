import React from 'react';

const Manifest: React.FC = () => {
    return (
        <div style={{
            height: '100vh',
            width: '100vw',
            display: 'flex',
            alignItems: 'center',
            padding: '0 60px',
            overflow: 'hidden'
        }}>
            {/* Left Column: Text Content */}
            <div style={{
                flex: '0 0 50%',
                paddingRight: '60px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }}>
                <h1 style={{
                    fontSize: 'calc(24px + 2vw)',
                    fontWeight: 300,
                    letterSpacing: '0.4em',
                    lineHeight: '1.2',
                    color: '#fff',
                    textTransform: 'uppercase',
                    marginBottom: '40px',
                    fontFamily: "'Outfit', sans-serif",
                }}>
                    WE DESIGN SPATIAL ATMOSPHERE.
                </h1>

                <div style={{
                    fontSize: '15px',
                    fontWeight: 400,
                    letterSpacing: '0.12em',
                    color: 'rgba(255, 255, 255, 0.85)',
                    lineHeight: '1.8',
                    textTransform: 'uppercase',
                    marginBottom: '40px',
                    maxWidth: '600px'
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
                    gap: '30px',
                    flexWrap: 'wrap',
                    fontSize: '11px',
                    letterSpacing: '0.2em',
                    color: 'rgba(255, 255, 255, 0.45)',
                    textTransform: 'uppercase',
                }}>
                    <span>• Spatial Audio Engineering</span>
                    <span>• Projection Mapping</span>
                    <span>• Light Architecture</span>
                    <span>• Interactive Media Systems</span>
                </div>
            </div>

            {/* Right Column: Real Image with Creative Masking */}
            <div style={{
                flex: '0 0 50%',
                height: '70vh',
                position: 'relative',
                maskImage: "url(\"data:image/svg+xml,%3Csvg width='221' height='122' viewBox='0 0 221 122' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='M183 4C183 1.79086 184.791 0 187 0H217C219.209 0 221 1.79086 221 4V14V28V99C221 101.209 219.209 103 217 103H182C179.791 103 178 104.791 178 107V118C178 120.209 176.209 122 174 122H28C25.7909 122 24 120.209 24 118V103V94V46C24 43.7909 22.2091 42 20 42H4C1.79086 42 0 40.2091 0 38V18C0 15.7909 1.79086 14 4 14H24H43H179C181.209 14 183 12.2091 183 10V4Z' fill='%23D9D9D9'/%3E%3C/svg%3E%0A\")",
                WebkitMaskImage: "url(\"data:image/svg+xml,%3Csvg width='221' height='122' viewBox='0 0 221 122' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='M183 4C183 1.79086 184.791 0 187 0H217C219.209 0 221 1.79086 221 4V14V28V99C221 101.209 219.209 103 217 103H182C179.791 103 178 104.791 178 107V118C178 120.209 176.209 122 174 122H28C25.7909 122 24 120.209 24 118V103V94V46C24 43.7909 22.2091 42 20 42H4C1.79086 42 0 40.2091 0 38V18C0 15.7909 1.79086 14 4 14H24H43H179C181.209 14 183 12.2091 183 10V4Z' fill='%23D9D9D9'/%3E%3C/svg%3E%0A\")",
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                maskSize: 'contain',
                WebkitMaskSize: 'contain',
                maskPosition: 'center',
                WebkitMaskPosition: 'center'
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
