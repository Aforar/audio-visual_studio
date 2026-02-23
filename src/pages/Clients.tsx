import React from 'react';

const Clients: React.FC = () => {
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
                letterSpacing: '0.5em',
                color: 'rgba(255, 255, 255, 0.35)',
                textTransform: 'uppercase',
                marginBottom: '80px',
                fontFamily: "'Outfit', sans-serif"
            }}>
                05 / COLLABORATIONS
            </h1>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '2px', // Grid line look
                maxWidth: '1100px',
                width: '100%',
                background: 'rgba(255, 255, 255, 0.05)',
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
                        fontSize: '13px', // Increased size
                        fontWeight: 400, // Legibility
                        letterSpacing: '0.35em',
                        color: 'rgba(255, 255, 255, 0.7)',
                        padding: '50px 20px',
                        textTransform: 'uppercase',
                        textAlign: 'center',
                        transition: 'color 0.4s ease'
                    }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)')}
                    >
                        {client}
                    </div>
                ))}
            </div>

            <p style={{
                marginTop: '80px',
                fontSize: '11px',
                letterSpacing: '0.4em',
                color: 'rgba(255, 255, 255, 0.25)',
                textTransform: 'uppercase'
            }}>
                AVAILABLE FOR INTERNATIONAL COMMISSIONS
            </p>
        </div>
    );
};

export default Clients;
