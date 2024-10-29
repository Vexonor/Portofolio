"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
    const words = [
        {
            text: "Frontend",
            className: "text-white",
        },
        {
            text: "Web",
            className: "text-white",
        },
        {
            text: "and",
            className: "text-white",
        },
        {
            text: "Mobile",
            className: "text-white",
        },
        {
            text: "Engineer.",
            className: "text-crimson",
        },
    ];
    return (
        <div className="flex flex-col items-start justify-center">
            <TypewriterEffectSmooth words={words} />
        </div>
    );
}

export default TypewriterEffectSmoothDemo;
