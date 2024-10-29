import React from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";

export function BackgroundBeamsWithCollisionDemo() {
    return (
        <BackgroundBeamsWithCollision>
            <h2 className="font-poppins text-xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-charcoal dark:text-white tracking-tight">
                Hello Im{" "}
                <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                    <div className="relative bg-clip-text text-transparent bg-no-repeat bg-white py-4">
                        <span className="font-poppins">Shafiq</span>
                    </div>
                </div>
            </h2>
        </BackgroundBeamsWithCollision>
    );
}

export default BackgroundBeamsWithCollisionDemo;