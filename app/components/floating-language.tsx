"use client";

import React from "react";
import { FloatingDock } from "./ui/floating-dock";

export function FloatingDockDemo() {
    const links = [
        {
            title: "PHP",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="size-10 md:size-16" viewBox="0 0 30 30">
                    <path fill="#dcd5f2" d="M15,22.5c-7.995,0-14.5-3.364-14.5-7.5S7.005,7.5,15,7.5s14.5,3.364,14.5,7.5S22.995,22.5,15,22.5z"></path><path fill="#8b75a1" d="M15,8c7.589,0,14,3.206,14,7s-6.411,7-14,7S1,18.794,1,15S7.411,8,15,8 M15,7C6.716,7,0,10.582,0,15 s6.716,8,15,8s15-3.582,15-8S23.284,7,15,7L15,7z"></path><path fill="#36404d" d="M9.417 13c.598 0 1.116.203 1.384.543.192.244.245.555.157.927C10.69 15.599 10.216 16 8.089 16H6.58l.563-3H9.417M9.417 12H6.313L5 19h1l.396-2h1.693c2.199 0 3.395-.417 3.842-2.299C12.316 13.084 11.039 12 9.417 12L9.417 12zM22.417 13c.598 0 1.116.203 1.384.543.192.244.245.555.157.927C23.69 15.599 23.216 16 21.089 16H19.58l.563-3H22.417M22.417 12h-3.104L18 19h1l.396-2h1.693c2.199 0 3.395-.417 3.842-2.299C25.316 13.084 24.039 12 22.417 12L22.417 12z"></path><g><path fill="#36404d" d="M17.652,12.424C17.323,12.122,16.742,12,15.875,12h-1.848l0.451-2h-1.017L12,17h1.016l0.841-4h0.171 h1.848c0.91,0,1.094,0.155,1.096,0.155c0.019,0.03,0.058,0.194-0.008,0.532L16.288,17h1.046l0.61-3.121 C18.075,13.212,17.976,12.722,17.652,12.424z"></path></g>
                </svg>
            ),
            href: "#",
        },

        {
            title: "Dart",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45" height="45" viewBox="0 0 48 48">
                    <path fill="#1565c0" d="M10,12l3,25l-8.019-8.019c-1.189-1.189-1.508-2.996-0.796-4.52L10,12z"></path><path fill="#42a5f5" d="M27.319,6.319C26.474,5.474,25.329,5,24.135,5c-0.745,0-1.479,0.185-2.135,0.538L10,12v20.343 c0,1.061,0.421,2.078,1.172,2.828L13,37h22v-5l7-11L27.319,6.319z"></path><path fill="#1565c0" d="M10,12h21.343c1.061,0,2.078,0.421,2.828,1.172L42,21v16h-7L10,12z"></path><polygon fill="#85cbf8" points="35,37 13,37 19,43 35,43"></polygon>
                </svg>
            ),
            href: "#",
        },
        {
            title: "Javascript",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45" height="45" viewBox="0 0 48 48">
                    <path fill="#f7df1e" d="M6,42V6h36v36H6z"></path><path fill="#000001" d="M29.538,32.947c0.692,1.124,1.444,2.201,3.037,2.201c1.338,0,2.04-0.665,2.04-1.585 c0-1.101-0.726-1.492-2.198-2.133l-0.807-0.344c-2.329-0.988-3.878-2.226-3.878-4.841c0-2.41,1.845-4.244,4.728-4.244 c2.053,0,3.528,0.711,4.592,2.573l-2.514,1.607c-0.553-0.988-1.151-1.377-2.078-1.377c-0.946,0-1.545,0.597-1.545,1.377 c0,0.964,0.6,1.354,1.985,1.951l0.807,0.344C36.452,29.645,38,30.839,38,33.523C38,36.415,35.716,38,32.65,38 c-2.999,0-4.702-1.505-5.65-3.368L29.538,32.947z M17.952,33.029c0.506,0.906,1.275,1.603,2.381,1.603 c1.058,0,1.667-0.418,1.667-2.043V22h3.333v11.101c0,3.367-1.953,4.899-4.805,4.899c-2.577,0-4.437-1.746-5.195-3.368 L17.952,33.029z"></path>
                </svg>
            ),
            href: "#",
        },
        {
            title: "Typescript",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                    <linearGradient id="O2zipXlwzZyOse8_3L2yya_wpZmKzk11AzJ_gr1" x1="15.189" x2="32.276" y1="-.208" y2="46.737" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#2aa4f4"></stop><stop offset="1" stopColor="#007ad9"></stop></linearGradient><rect width="36" height="36" x="6" y="6" fill="url(#O2zipXlwzZyOse8_3L2yya_wpZmKzk11AzJ_gr1)"></rect><polygon fill="#fff" points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"></polygon><path fill="#fff" d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986	c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92	c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"></path>
                </svg>
            ),
            href: "#",
        },
    ];
    return (
        <div className="flex items-center justify-start h-[5rem] md:h-[15rem] w-full">
            <FloatingDock
                mobileClassName=""
                items={links}
            />
        </div>
    );
}

export default FloatingDockDemo;
