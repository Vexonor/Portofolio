import React from 'react'
import ThreeDCard from '../components/card';
import BackgroundBeamsWithCollisionDemo from '../components/bg-beam';
import TypewriterEffectSmoothDemo from '../components/type-effect';

export const HomeSection = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 md:gap-4">
            <div className="col-span-1 flex justify-center items-center">
                <ThreeDCard />
            </div>
            <div className="col-span-1 lg:col-span-2 flex flex-col items-center justify-center lg:items-start">
                <BackgroundBeamsWithCollisionDemo />
                <TypewriterEffectSmoothDemo />
            </div>
        </div>

    )
}

export default HomeSection;
