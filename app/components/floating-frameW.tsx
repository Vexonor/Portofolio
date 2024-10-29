import React from "react";
import { FloatingDock } from "./ui/floating-dock";
import {
    IconBrandGithub,
    IconBrandX,
    IconExchange,
    IconHome,
    IconNewSection,
    IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";

export function FloatingDockFrame() {
    const links = [
        {
            title: "Bootstrap",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45" height="45" viewBox="0 0 48 48">
                    <linearGradient id="Q_pn21O5LDDqwJlze0Upoa_g9mmSxx3SwAI_gr1" x1="24" x2="24" y1="41" y2="7" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#643499"></stop><stop offset=".011" stopColor="#68369f"></stop><stop offset=".135" stopColor="#773db6"></stop><stop offset=".193" stopColor="#8042c3"></stop><stop offset=".248" stopColor="#8343c8"></stop><stop offset=".388" stopColor="#8444c9"></stop><stop offset=".732" stopColor="#9751d2"></stop><stop offset=".997" stopColor="#9c55d4"></stop><stop offset=".998" stopColor="#9c55d4"></stop><stop offset="1" stopColor="#9c55d4"></stop></linearGradient><path fill="url(#Q_pn21O5LDDqwJlze0Upoa_g9mmSxx3SwAI_gr1)" d="M7.373,11.443C7.293,9.132,9.094,7,11.529,7h24.946c2.435,0,4.236,2.132,4.155,4.443	c-0.077,2.221,0.023,5.097,0.747,7.443c0.681,2.207,1.801,3.652,3.593,3.981c0.206,0.038,0.363,0.205,0.363,0.415v1.438	c0,0.21-0.157,0.377-0.363,0.415c-1.792,0.328-2.912,1.773-3.593,3.981c-0.724,2.345-0.824,5.222-0.747,7.443	C40.71,38.868,38.909,41,36.475,41H11.529c-2.434,0-4.236-2.132-4.155-4.443c0.077-2.221-0.023-5.097-0.747-7.443	c-0.681-2.207-1.804-3.652-3.596-3.981c-0.206-0.038-0.363-0.205-0.363-0.415v-1.438c0-0.21,0.157-0.377,0.363-0.415	c1.792-0.328,2.915-1.773,3.596-3.981C7.35,16.54,7.451,13.664,7.373,11.443z"></path><path fill="#fff" d="M27.073,23.464v-0.028c1.853-0.32,3.299-2.057,3.299-3.97c0-1.352-0.52-2.498-1.504-3.312	c-0.981-0.812-2.357-1.241-3.981-1.241H17.45V33.08h7.475c1.942,0,3.555-0.474,4.663-1.372c1.109-0.899,1.696-2.207,1.696-3.783	C31.283,25.544,29.593,23.756,27.073,23.464z M23.59,22.608h-3.181V17.29h3.784c2.076,0,3.219,0.911,3.219,2.565	C27.413,21.63,26.055,22.608,23.59,22.608z M20.409,24.834h3.759c2.716,0,4.092,0.981,4.092,2.916c0,1.932-1.357,2.953-3.925,2.953	h-3.926V24.834z"></path>
                </svg>
            ),
            href: "#",
        },

        {
            title: "Laravel",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="#F05340" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-laravel"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 17l8 5l7 -4v-8l-4 -2.5l4 -2.5l4 2.5v4l-11 6.5l-4 -2.5v-7.5l-4 -2.5z" /><path d="M11 18v4" /><path d="M7 15.5l7 -4" /><path d="M14 7.5v4" /><path d="M14 11.5l4 2.5" /><path d="M11 13v-7.5l-4 -2.5l-4 2.5" /><path d="M7 8l4 -2.5" /><path d="M18 10l4 -2.5" /></svg>
            ),
            href: "#",
        },
        {
            title: "Tailwindcss",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45" height="45" viewBox="0 0 48 48">
                    <path fill="#00acc1" d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"></path>
                </svg>
            ),
            href: "#",
        },
        {
            title: "Flutter",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45" height="45" viewBox="0 0 48 48">
                    <polygon fill="#40c4ff" points="26,4 6,24 12,30 38,4"></polygon><polygon fill="#40c4ff" points="38,22 27,33 21,27 26,22"></polygon><rect width="8.485" height="8.485" x="16.757" y="28.757" fill="#03a9f4" transform="rotate(-45.001 21 33)"></rect><polygon fill="#01579b" points="38,44 26,44 21,39 27,33"></polygon><polygon fill="#084994" points="21,39 30,36 27,33"></polygon>
                </svg>
            ),
            href: "#",
        },
        {
            title: "Next.js",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z" /></svg>
            ),
            href: "#",
        },
    ];
    return (
        <div className="flex items-center justify-start h-[15rem] w-full">
            <FloatingDock
                mobileClassName="translate-y-20"
                items={links}
            />
        </div>
    );
}

export default FloatingDockFrame;
