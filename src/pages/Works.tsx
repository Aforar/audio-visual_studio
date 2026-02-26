import React from 'react';
import { useWindowSize } from '../hooks/useWindowSize';

const projects = [
    {
        id: '01',
        title: 'Obsidian Pulse',
        category: 'Live Performance',
        technical: 'Ableton Live, TouchDesigner, 4K Projection',
        image: '/assets/works_01.jpg'
    },
    {
        id: '02',
        title: 'Echo Chamber',
        category: 'Spatial Sound',
        technical: 'Ambisonics, Acoustic Calibration',
        image: '/assets/works_02.jpg'
    },
    {
        id: '03',
        title: 'Midnight Frame',
        category: 'Luxury Brand',
        technical: 'Laser Array, Timecode Synced',
        image: '/assets/works_03.jpg'
    },
    {
        id: '04',
        title: 'Sonic Architecture',
        category: 'Corporate Spatial',
        technical: 'Max/MSP, Motion Sensors',
        image: '/assets/works_04.jpg'
    },
    {
        id: '05',
        title: 'Deep Current',
        category: 'Fashion Show',
        technical: 'Multichannel DMX Control',
        image: '/assets/works_05.jpg'
    },
    {
        id: '06',
        title: 'Void Transmission',
        category: 'Experimental Film',
        technical: 'Blackmagic 6K, Sound Synthesis',
        image: '/assets/works_06.jpg'
    }
];

const Works: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
    const { width } = useWindowSize();
    const isMobile = width <= 768;
    const isTablet = width <= 1024;

    return (
        <div style={{
            minHeight: '100vh',
            width: '100vw',
            padding: isMobile ? '100px 20px 40px' : '120px 60px 60px',
            display: 'flex',
            flexDirection: 'column',
            transition: 'padding 0.3s ease',
        }}>
            <h1 style={{
                fontSize: isMobile ? '8px' : '11px',
                letterSpacing: isMobile ? '0.2em' : '0.5em',
                color: 'rgba(255, 255, 255, 0.35)',
                textTransform: 'uppercase',
                marginBottom: isMobile ? '25px' : '40px',
                fontFamily: "'Outfit', sans-serif",
                transition: 'all 0.3s ease',
            }}>
                INDEX — PRODUCTION ARCHIVE [23/26]
            </h1>

            <div style={{
                flexGrow: 1,
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
                gap: isMobile ? '15px' : '20px',
                paddingBottom: '20px',
                transition: 'all 0.3s ease',
            }}>
                {projects.map((p, i) => {
                    const isHovered = hoveredIndex === i;
                    return (
                        <div key={i} style={{
                            position: 'relative',
                            background: isHovered ? 'rgba(255, 255, 255, 0.03)' : 'rgba(255, 255, 255, 0.01)',
                            border: '1px solid',
                            borderColor: isHovered ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.03)',
                            padding: isMobile ? '20px' : '30px',
                            minHeight: isMobile ? '200px' : 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                            transition: 'all 0.6s cubic-bezier(0.77, 0, 0.175, 1)',
                            cursor: 'pointer',
                            overflow: 'hidden'
                        }}
                            onMouseEnter={() => setHoveredIndex(i)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Visual Asset Layer */}
                            {p.image ? (
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    zIndex: 0,
                                    opacity: isHovered ? 1 : 0.4,
                                    transition: 'all 0.8s cubic-bezier(0.77, 0, 0.175, 1)'
                                }}>
                                    <img
                                        src={p.image}
                                        alt={p.title}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            filter: isHovered ? 'grayscale(0) contrast(1.1)' : 'grayscale(0.3) contrast(1.1)',
                                            transition: 'all 0.8s cubic-bezier(0.77, 0, 0.175, 1)',
                                            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
                                        }}
                                    />
                                    <div style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        background: isHovered
                                            ? 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)'
                                            : 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%)',
                                        transition: 'all 0.8s ease'
                                    }} />
                                </div>
                            ) : (
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    zIndex: 0,
                                    opacity: 0.1,
                                    background: 'radial-gradient(circle at center, rgba(141, 125, 202, 0.2) 0%, transparent 100%)'
                                }} />
                            )}

                            {/* Content Layer */}
                            <div style={{ position: 'relative', zIndex: 1 }}>
                                <span style={{
                                    fontSize: '9px',
                                    fontFamily: 'monospace',
                                    color: 'rgba(255, 255, 255, 0.25)',
                                    display: 'block',
                                    marginBottom: '10px'
                                }}>{p.id}</span>
                                <h2 style={{
                                    fontSize: '16px',
                                    fontWeight: 500,
                                    letterSpacing: '0.25em',
                                    marginBottom: '8px',
                                    color: '#fff',
                                    textTransform: 'uppercase'
                                }}>{p.title}</h2>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'baseline'
                                }}>
                                    <span style={{
                                        fontSize: '9px',
                                        letterSpacing: '0.15em',
                                        color: 'rgba(255, 255, 255, 0.4)',
                                        textTransform: 'uppercase'
                                    }}>{p.category}</span>
                                </div>
                            </div>

                            <div style={{
                                position: 'relative',
                                zIndex: 1,
                                marginTop: '15px',
                                fontSize: '8px',
                                letterSpacing: '0.1em',
                                color: 'rgba(255, 255, 255, 0.2)',
                                textTransform: 'uppercase',
                                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                                paddingTop: '10px'
                            }}>
                                {p.technical}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};


export default Works;
