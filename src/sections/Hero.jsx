import { Leva } from 'leva';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';

import Cube from '../components/Cube.jsx';
import Rings from '../components/Rings.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import Button from '../components/Button.jsx';
import Target from '../components/Target.jsx';
import CanvasLoader from '../components/Loading.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import { calculateSizes } from '../constants/index.js';
import { HackerRoom } from '../components/HackerRoom.jsx';

const Hero = () => {
    // Use media queries to determine screen size
    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section className="min-h-screen w-full flex flex-col relative" id="home">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
                    Hi, I am Sunny <span className="waving-hand">👋</span>
                </p>
                <p className="hero_tag text-gray_gradient">Full-Stack Developer & Software Engineer</p>
            </div>

            <div className="w-full h-full absolute inset-0">
                <Canvas className="w-full h-full" dpr={[1, 1.5]}>
                    <Suspense fallback={<CanvasLoader />}>
                        {/* To hide controller */}
                        <Leva hidden />
                        <PerspectiveCamera makeDefault position={[0, 0, 30]} />

                        <HeroCamera isMobile={isMobile}>
                            <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]} />
                        </HeroCamera>

                        <group>
                            {/* <Target position={sizes.targetPosition} /> */}
                            <ReactLogo position={sizes.reactLogoPosition} />
                            <Rings position={sizes.ringPosition} />
                            <Cube position={sizes.cubePosition} />
                        </group>

                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />
                    </Suspense>
                </Canvas>
            </div>

            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space flex sm:flex-row flex-col justify-center items-center gap-4">
                <a href="#about" className="w-fit max-sm:w-full">
                    <Button name="Explore My Work" isBeam containerClass="sm:w-fit w-full sm:min-w-56" />
                </a>
                <a
                    href="/resume.html"
                    target="_blank"
                    rel="noreferrer"
                    className="w-fit max-sm:w-full flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-black-300 hover:bg-black-500 border border-black-200 hover:border-white transition-all text-white text-base font-medium shadow-xl">
                    <span>View Resume</span>
                    <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
                </a>
            </div>
        </section>
    );
};

export default Hero;
