import React from 'react'
import ThreeDCard from '../components/card';
import BackgroundBeamsWithCollisionDemo from '../components/bg-beam';
import TypewriterEffectSmoothDemo from '../components/type-effect';

export const HomeSection = () => {
    return (
        <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1 flex justify-center items-center">
                <ThreeDCard />
            </div>
            <div className="col-span-2 flex flex-col justify-center">
                <BackgroundBeamsWithCollisionDemo />
                <TypewriterEffectSmoothDemo />
            </div>
        </div>

    )
}

export default HomeSection;
