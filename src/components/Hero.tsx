import React from 'react';

const Hero: React.FC = () => {
    return (
        <div style={{
            position: 'relative',
            zIndex: 10,
            height: '100vh',
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0 60px',
            textAlign: 'center',
            pointerEvents: 'none',
        }}>
            {/* Micro Signature Line */}
            <div style={{
                position: 'absolute',
                top: '120px',
                left: '60px',
                fontSize: '10px',
                letterSpacing: '0.3em',
                color: 'rgba(255, 255, 255, 0.3)',
                textTransform: 'uppercase',
            }}>
                EST. 2026 — INDEPENDENT STUDIO
            </div>

            {/* Headline */}
            <h1 style={{
                fontSize: 'calc(24px + 3vw)',
                fontWeight: 300,
                letterSpacing: '0.5em',
                lineHeight: '1.2',
                color: '#fff',
                textTransform: 'uppercase',
                maxWidth: '1200px',
                margin: '0 0 40px 0',
                fontFamily: "'Outfit', sans-serif",
            }}>
                WHERE AUDIO BECOMES ARCHITECTURE
            </h1>

            {/* Subline */}
            <p style={{
                fontSize: '14px',
                fontWeight: 300,
                letterSpacing: '0.2em',
                color: 'rgba(255, 255, 255, 0.6)',
                maxWidth: '600px',
                lineHeight: '1.8',
                textTransform: 'uppercase',
            }}>
                A multidisciplinary studio crafting spatial audio and visual environments.
            </p>

            {/* Location / Meta info */}
            <div style={{
                position: 'absolute',
                bottom: '60px',
                right: '60px',
                fontSize: '10px',
                letterSpacing: '0.3em',
                color: 'rgba(255, 255, 255, 0.3)',
                textTransform: 'uppercase',
                display: 'flex',
                gap: '40px',
            }}>
                <span>MOTION . SOUND . FORM</span>
                <span>BASED IN MARSEILLE</span>
            </div>
        </div>
    );
};

export default Hero;
