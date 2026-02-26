import React from 'react';
import { useWindowSize } from '../hooks/useWindowSize';

const Clients: React.FC = () => {
    const { width } = useWindowSize();
    const isMobile = width <= 768;
    const isTablet = width <= 1024;

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
                letterSpacing: isMobile ? '0.2em' : '0.5em',
                color: 'rgba(255, 255, 255, 0.35)',
                textTransform: 'uppercase',
                marginBottom: isMobile ? '40px' : '80px',
                fontFamily: "'Outfit', sans-serif",
                transition: 'all 0.3s ease',
            }}>
                05 / COLLABORATIONS
            </h1>

            <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
                gap: '2px', // Grid line look
                maxWidth: '1100px',
                width: '100%',
                background: 'rgba(255, 255, 255, 0.05)',
                transition: 'all 0.3s ease',
            }}>
                {[
                    'ATELIER NOIRE',
                    'KINETIC LAB',
                    'ASTRA HOTELS',
                    'VELUM COLLECTIVE',
                    'IND. FASHION HOUSES',
                    'ART FOUNDATIONS'
                ].map((client, idx) => (
                    <div key={idx} style={{
                        background: '#000',
                        fontSize: isMobile ? '11px' : '13px', // Responsive size
                        fontWeight: 400, // Legibility
                        letterSpacing: isMobile ? '0.15em' : '0.35em',
                        color: 'rgba(255, 255, 255, 0.7)',
                        padding: isMobile ? '30px 15px' : '50px 20px',
                        textTransform: 'uppercase',
                        textAlign: 'center',
                        transition: 'color 0.4s ease, all 0.3s ease'
                    }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)')}
                    >
                        {client}
                    </div>
                ))}
            </div>

            <p style={{
                marginTop: isMobile ? '40px' : '80px',
                fontSize: isMobile ? '9px' : '11px',
                letterSpacing: isMobile ? '0.2em' : '0.4em',
                color: 'rgba(255, 255, 255, 0.25)',
                textTransform: 'uppercase',
                transition: 'all 0.3s ease',
            }}>
                AVAILABLE FOR INTERNATIONAL COMMISSIONS
            </p>
        </div>
    );
};

export default Clients;
