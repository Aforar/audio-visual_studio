import React from 'react';
import { ReactLenis } from 'lenis/react';
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react';
import BubbleCursor from './BubbleCursor';
import Topbar from './Topbar';
import ScrollNavigator from './ScrollNavigator';
import AnimatedRoutes from './AnimatedRoutes';

const MainLayout: React.FC = () => {
    return (
        <ReactLenis root>
            <div style={{ width: '100vw', height: '100vh', background: '#000', position: 'relative', overflow: 'hidden' }}>
                {/* Persistent UI Layer (Frontmost) */}
                <div style={{ position: 'relative', zIndex: 1000 }}>
                    <Topbar />
                    <BubbleCursor />
                    <ScrollNavigator />
                </div>

                {/* Page Content Container (Foreground) */}
                <main style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 500 }}>
                    <AnimatedRoutes />
                </main>

                {/* Background Layer (Deep Background) */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                    <ShaderGradientCanvas
                        style={{
                            width: '100%',
                            height: '100%',
                        }}
                        lazyLoad={undefined}
                        fov={undefined}
                        pixelDensity={1}
                        pointerEvents="none"
                    >
                        <ShaderGradient
                            animate="on"
                            type="waterPlane"
                            wireframe={false}
                            shader="defaults"
                            uTime={8}
                            uSpeed={0.3}
                            uStrength={1.5}
                            uDensity={1.5}
                            uFrequency={0}
                            uAmplitude={0}
                            positionX={0}
                            positionY={0}
                            positionZ={0}
                            rotationX={50}
                            rotationY={0}
                            rotationZ={-60}
                            color1="#242880"
                            color2="#8d7dca"
                            color3="#212121"
                            reflection={0.1}
                            cAzimuthAngle={180}
                            cPolarAngle={80}
                            cDistance={2.8}
                            cameraZoom={9.1} lightType="3d"
                            brightness={1}
                            envPreset="city"
                            grain="on"
                            toggleAxis={false}
                            zoomOut={false}
                            hoverState=""
                            enableTransition={false}
                        />
                    </ShaderGradientCanvas>
                </div>

                {/* Visual Overlay for cinematic depth (Ambient) */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.5) 100%)',
                    pointerEvents: 'none',
                    zIndex: 1
                }} />
            </div>
        </ReactLenis>
    );
};

export default MainLayout;
