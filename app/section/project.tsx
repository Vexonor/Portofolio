"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const ProjectSection = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <div className="grid grid-cols-2 px-5 gap-4">
            <div className="col-span-2 md:mb-5">
                <h1 className="skew-y-3 w-max mb-5 relative isolation-auto z-10 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full hover:text-white before:-left-full before:hover:left-0 before:rounded-full before:bg-crimson before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center justify-center px-4 py-3 font-bold text-crimson bg-white shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 text-base md:text-xl">Project Based Learning Web Development</h1>
            </div>
            {/* Project 1 */}
            <div className="col-span-2 w-full flex flex-col justify-start md:col-span-1">
                <motion.div
                    initial={{ opacity: 0, y: isMobile ? 50 : 500 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false, amount: 0 }}
                >
                    <figure className="mx-auto relative z-[1] max-w-full w-[20rem] md:w-[50rem] h-auto shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] dark:shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)] rounded-b-lg">
                        <div className="relative flex items-center max-w-[50rem] bg-white rounded-t-lg py-2 px-24 dark:bg-neutral-700">
                            <div className="flex gap-x-1 absolute top-2/4 start-4 -translate-y-1">
                                <span className="size-2 bg-gray-600 rounded-full dark:bg-neutral-600"></span>
                                <span className="size-2 bg-gray-600 rounded-full dark:bg-neutral-600"></span>
                                <span className="size-2 bg-gray-600 rounded-full dark:bg-neutral-600"></span>
                            </div>
                            <div className="flex justify-center items-center size-full bg-gray-700 text-[.25rem] text-gray-400 rounded-sm sm:text-[.5rem] dark:bg-neutral-600 dark:text-neutral-400 font-poppins">www.focalors.com</div>
                        </div>

                        <div className="bg-gray-800 rounded-b-lg">
                            <Image
                                className="max-w-full h-[20rem] md:h-[43.75rem] rounded-b-lg object-cover object-top"
                                src="/images/PBL-1.png"
                                alt="Browser Placeholder"
                                width={800}
                                height={600}
                            />
                        </div>
                    </figure>
                </motion.div>
                <div className="hs-accordion-group mt-5">
                    <div className="hs-accordion bg-white px-3 active" id="hs-basic-with-title-and-arrow-stretched-heading-one">
                        <button className="hs-accordion-toggle font-poppins hs-accordion-active:text-crimson py-3 inline-flex items-center justify-between gap-x-3 w-full text-xs md:text-lg font-semibold text-start text-charcoal hover:text-crimson rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-none dark:focus:text-neutral-400" aria-expanded="true" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
                            Application Description
                            <svg className="hs-accordion-active:hidden block size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m6 9 6 6 6-6"></path>
                            </svg>
                            <svg className="hs-accordion-active:block hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m18 15-6-6-6 6"></path>
                            </svg>
                        </button>
                        <div id="hs-basic-with-title-and-arrow-stretched-collapse-one" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one">
                            <h2 className="text-charcoal text-sm md:text-base font-semibold font-poppins">Focalors Rent</h2>
                            <p className="text-charcoal text-sm md:text-base font-poppins py-5">
                                It&apos;s a web-based vehicle rental application that services services. Aimed at the manufacture of information systems to help tenants find better vehicle rental services and bookings
                            </p>
                        </div>
                    </div>
                    <div className="hs-accordion bg-white px-3" id="hs-basic-with-title-and-arrow-stretched-heading-two">
                        <button className="hs-accordion-toggle font-poppins hs-accordion-active:text-crimson py-3 inline-flex items-center justify-between gap-x-3 w-full text-xs md:text-lg font-semibold text-start text-charcoal hover:text-crimson rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-none dark:focus:text-neutral-400" aria-expanded="true" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two">
                            Used Tools
                            <svg className="hs-accordion-active:hidden block size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m6 9 6 6 6-6"></path>
                            </svg>
                            <svg className="hs-accordion-active:block hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m18 15-6-6-6 6"></path>
                            </svg>
                        </button>
                        <div id="hs-basic-with-title-and-arrow-stretched-collapse-two" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two">
                            <div className="flex items-center justify-center h-[5rem] gap-10">
                                {/* Programming Language */}
                                <div className="group relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45" height="45" viewBox="0 0 30 30">
                                        <path fill="#dcd5f2" d="M15,22.5c-7.995,0-14.5-3.364-14.5-7.5S7.005,7.5,15,7.5s14.5,3.364,14.5,7.5S22.995,22.5,15,22.5z"></path><path fill="#8b75a1" d="M15,8c7.589,0,14,3.206,14,7s-6.411,7-14,7S1,18.794,1,15S7.411,8,15,8 M15,7C6.716,7,0,10.582,0,15 s6.716,8,15,8s15-3.582,15-8S23.284,7,15,7L15,7z"></path><path fill="#36404d" d="M9.417 13c.598 0 1.116.203 1.384.543.192.244.245.555.157.927C10.69 15.599 10.216 16 8.089 16H6.58l.563-3H9.417M9.417 12H6.313L5 19h1l.396-2h1.693c2.199 0 3.395-.417 3.842-2.299C12.316 13.084 11.039 12 9.417 12L9.417 12zM22.417 13c.598 0 1.116.203 1.384.543.192.244.245.555.157.927C23.69 15.599 23.216 16 21.089 16H19.58l.563-3H22.417M22.417 12h-3.104L18 19h1l.396-2h1.693c2.199 0 3.395-.417 3.842-2.299C25.316 13.084 24.039 12 22.417 12L22.417 12z"></path><g><path fill="#36404d" d="M17.652,12.424C17.323,12.122,16.742,12,15.875,12h-1.848l0.451-2h-1.017L12,17h1.016l0.841-4h0.171 h1.848c0.91,0,1.094,0.155,1.096,0.155c0.019,0.03,0.058,0.194-0.008,0.532L16.288,17h1.046l0.61-3.121 C18.075,13.212,17.976,12.722,17.652,12.424z"></path></g>
                                    </svg>
                                    <span className="absolute -top-5 left-[50%] -translate-x-[50%] 
                                    z-20 origin-left scale-0 px-3 rounded-lg bg-charcoal py-2 text-sm font-bold
                                    shadow-md transition-all duration-300 ease-in-out 
                                    group-hover:scale-100 font-poppins w-max text-crimson">PHP</span>
                                </div>
                                {/* Framework */}
                                <div className="group relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45" height="45" viewBox="0 0 48 48">
                                        <linearGradient id="Q_pn21O5LDDqwJlze0Upoa_g9mmSxx3SwAI_gr1" x1="24" x2="24" y1="41" y2="7" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#643499"></stop><stop offset=".011" stopColor="#68369f"></stop><stop offset=".135" stopColor="#773db6"></stop><stop offset=".193" stopColor="#8042c3"></stop><stop offset=".248" stopColor="#8343c8"></stop><stop offset=".388" stopColor="#8444c9"></stop><stop offset=".732" stopColor="#9751d2"></stop><stop offset=".997" stopColor="#9c55d4"></stop><stop offset=".998" stopColor="#9c55d4"></stop><stop offset="1" stopColor="#9c55d4"></stop></linearGradient><path fill="url(#Q_pn21O5LDDqwJlze0Upoa_g9mmSxx3SwAI_gr1)" d="M7.373,11.443C7.293,9.132,9.094,7,11.529,7h24.946c2.435,0,4.236,2.132,4.155,4.443	c-0.077,2.221,0.023,5.097,0.747,7.443c0.681,2.207,1.801,3.652,3.593,3.981c0.206,0.038,0.363,0.205,0.363,0.415v1.438	c0,0.21-0.157,0.377-0.363,0.415c-1.792,0.328-2.912,1.773-3.593,3.981c-0.724,2.345-0.824,5.222-0.747,7.443	C40.71,38.868,38.909,41,36.475,41H11.529c-2.434,0-4.236-2.132-4.155-4.443c0.077-2.221-0.023-5.097-0.747-7.443	c-0.681-2.207-1.804-3.652-3.596-3.981c-0.206-0.038-0.363-0.205-0.363-0.415v-1.438c0-0.21,0.157-0.377,0.363-0.415	c1.792-0.328,2.915-1.773,3.596-3.981C7.35,16.54,7.451,13.664,7.373,11.443z"></path><path fill="#fff" d="M27.073,23.464v-0.028c1.853-0.32,3.299-2.057,3.299-3.97c0-1.352-0.52-2.498-1.504-3.312	c-0.981-0.812-2.357-1.241-3.981-1.241H17.45V33.08h7.475c1.942,0,3.555-0.474,4.663-1.372c1.109-0.899,1.696-2.207,1.696-3.783	C31.283,25.544,29.593,23.756,27.073,23.464z M23.59,22.608h-3.181V17.29h3.784c2.076,0,3.219,0.911,3.219,2.565	C27.413,21.63,26.055,22.608,23.59,22.608z M20.409,24.834h3.759c2.716,0,4.092,0.981,4.092,2.916c0,1.932-1.357,2.953-3.925,2.953	h-3.926V24.834z"></path>
                                    </svg>
                                    <span className="absolute -top-5 left-[40%] -translate-x-[50%] 
                                    z-20 origin-left scale-0 px-3 rounded-lg bg-charcoal py-2 text-sm font-bold
                                    shadow-md transition-all duration-300 ease-in-out 
                                    group-hover:scale-100 font-poppins w-max text-crimson">Bootstrap</span>
                                </div>
                                {/* Github */}
                                <div className="group relative">
                                    <a href="https://github.com/Vexonor/PBL-RentalKendaraan.git">
                                        <svg strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" className="w-8 duration-200 hover:stroke-crimson"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                    </a>
                                    <span className="absolute -top-5 left-[45%] -translate-x-[50%] 
                                    z-20 origin-left scale-0 px-3 rounded-lg bg-charcoal text-crimson py-2 text-sm font-bold
                                    shadow-md transition-all duration-300 ease-in-out 
                                    group-hover:scale-100 font-poppins w-max">Go Check</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Project 2 */}
            <div className="col-span-2 w-full flex flex-col justify-start md:col-span-1">
                <motion.div
                    initial={{ opacity: 0, y: isMobile ? 50 : 500 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2 }}
                    viewport={{ once: false, amount: 0 }}
                >
                    <figure className="mx-auto relative z-[1] max-w-full w-[20rem] md:w-[50rem] h-auto shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] dark:shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)] rounded-b-lg">
                        <div className="relative flex items-center max-w-[50rem] bg-white rounded-t-lg py-2 px-24 dark:bg-neutral-700">
                            <div className="flex gap-x-1 absolute top-2/4 start-4 -translate-y-1">
                                <span className="size-2 bg-gray-600 rounded-full dark:bg-neutral-600"></span>
                                <span className="size-2 bg-gray-600 rounded-full dark:bg-neutral-600"></span>
                                <span className="size-2 bg-gray-600 rounded-full dark:bg-neutral-600"></span>
                            </div>
                            <div className="flex justify-center items-center size-full bg-gray-700 text-[.25rem] text-gray-400 rounded-sm sm:text-[.5rem] dark:bg-neutral-600 dark:text-neutral-400 font-poppins">www.focalors.com</div>
                        </div>

                        <div className="bg-gray-800 rounded-b-lg">
                            <Image
                                className="max-w-full h-[20rem] md:h-[43.75rem] rounded-b-lg object-cover object-top"
                                src="/images/PBL-2.png"
                                alt="Browser Placeholder"
                                width={800}
                                height={600}
                            />
                        </div>
                    </figure>
                </motion.div>
                <div className="hs-accordion-group mt-5">
                    <div className="hs-accordion bg-white px-3 active" id="hs-basic-with-title-and-arrow-stretched-heading-three">
                        <button className="hs-accordion-toggle font-poppins hs-accordion-active:text-crimson py-3 inline-flex items-center justify-between gap-x-3 w-full text-xs md:text-lg font-semibold text-start text-charcoal hover:text-crimson rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-none dark:focus:text-neutral-400" aria-expanded="true" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three">
                            Application Description
                            <svg className="hs-accordion-active:hidden block size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m6 9 6 6 6-6"></path>
                            </svg>
                            <svg className="hs-accordion-active:block hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m18 15-6-6-6 6"></path>
                            </svg>
                        </button>
                        <div id="hs-basic-with-title-and-arrow-stretched-collapse-one" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three">
                            <h2 className="text-charcoal text-sm md:text-base font-semibold font-poppins">Sistem Informasi SMK Muhammadiyah Plus Kota Batam</h2>
                            <p className="text-charcoal text-sm md:text-base font-poppins py-5">
                                The planned application is designed as a web-based platform utilizing a Content Management System (CMS) model to efficiently manage information for SMK Muhammadiyah Plus Batam Kota. This comprehensive system will cater to various aspects of school management, including school details, news updates, announcements, a gallery for events and achievements, academic information management, directories for teachers, staff, and students, facilities information, social media updates, and admission details (PPDB).
                            </p>
                        </div>
                    </div>
                    <div className="hs-accordion bg-white px-3" id="hs-basic-with-title-and-arrow-stretched-heading-four">
                        <button className="hs-accordion-toggle font-poppins hs-accordion-active:text-crimson py-3 inline-flex items-center justify-between gap-x-3 w-full text-xs md:text-lg font-semibold text-start text-charcoal hover:text-crimson rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-none dark:focus:text-neutral-400" aria-expanded="true" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four">
                            Used Tools
                            <svg className="hs-accordion-active:hidden block size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m6 9 6 6 6-6"></path>
                            </svg>
                            <svg className="hs-accordion-active:block hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m18 15-6-6-6 6"></path>
                            </svg>
                        </button>
                        <div id="hs-basic-with-title-and-arrow-stretched-collapse-four" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four">
                            <div className="flex items-center justify-center h-[5rem] gap-10">
                                {/* Programming Language */}
                                <div className="group relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45" height="45" viewBox="0 0 30 30">
                                        <path fill="#dcd5f2" d="M15,22.5c-7.995,0-14.5-3.364-14.5-7.5S7.005,7.5,15,7.5s14.5,3.364,14.5,7.5S22.995,22.5,15,22.5z"></path><path fill="#8b75a1" d="M15,8c7.589,0,14,3.206,14,7s-6.411,7-14,7S1,18.794,1,15S7.411,8,15,8 M15,7C6.716,7,0,10.582,0,15 s6.716,8,15,8s15-3.582,15-8S23.284,7,15,7L15,7z"></path><path fill="#36404d" d="M9.417 13c.598 0 1.116.203 1.384.543.192.244.245.555.157.927C10.69 15.599 10.216 16 8.089 16H6.58l.563-3H9.417M9.417 12H6.313L5 19h1l.396-2h1.693c2.199 0 3.395-.417 3.842-2.299C12.316 13.084 11.039 12 9.417 12L9.417 12zM22.417 13c.598 0 1.116.203 1.384.543.192.244.245.555.157.927C23.69 15.599 23.216 16 21.089 16H19.58l.563-3H22.417M22.417 12h-3.104L18 19h1l.396-2h1.693c2.199 0 3.395-.417 3.842-2.299C25.316 13.084 24.039 12 22.417 12L22.417 12z"></path><g><path fill="#36404d" d="M17.652,12.424C17.323,12.122,16.742,12,15.875,12h-1.848l0.451-2h-1.017L12,17h1.016l0.841-4h0.171 h1.848c0.91,0,1.094,0.155,1.096,0.155c0.019,0.03,0.058,0.194-0.008,0.532L16.288,17h1.046l0.61-3.121 C18.075,13.212,17.976,12.722,17.652,12.424z"></path></g>
                                    </svg>
                                    <span className="absolute -top-5 left-[50%] -translate-x-[50%] 
                                    z-20 origin-left scale-0 px-3 rounded-lg bg-charcoal py-2 text-sm font-bold
                                    shadow-md transition-all duration-300 ease-in-out 
                                    group-hover:scale-100 font-poppins w-max text-crimson">PHP</span>
                                </div>
                                {/* Framework */}
                                <div className="group relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="#F05340" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-laravel"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 17l8 5l7 -4v-8l-4 -2.5l4 -2.5l4 2.5v4l-11 6.5l-4 -2.5v-7.5l-4 -2.5z" /><path d="M11 18v4" /><path d="M7 15.5l7 -4" /><path d="M14 7.5v4" /><path d="M14 11.5l4 2.5" /><path d="M11 13v-7.5l-4 -2.5l-4 2.5" /><path d="M7 8l4 -2.5" /><path d="M18 10l4 -2.5" /></svg>
                                    <span className="absolute -top-5 left-[40%] -translate-x-[50%] 
                                    z-20 origin-left scale-0 px-3 rounded-lg bg-charcoal py-2 text-sm font-bold
                                    shadow-md transition-all duration-300 ease-in-out 
                                    group-hover:scale-100 font-poppins w-max text-crimson">Laravel</span>
                                </div>
                                <div className="group relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45" height="45" viewBox="0 0 48 48">
                                        <path fill="#00acc1" d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"></path>
                                    </svg>
                                    <span className="absolute -top-5 left-[40%] -translate-x-[50%] 
                                    z-20 origin-left scale-0 px-3 rounded-lg bg-charcoal py-2 text-sm font-bold
                                    shadow-md transition-all duration-300 ease-in-out 
                                    group-hover:scale-100 font-poppins w-max text-crimson">Tailwind</span></div>
                                {/* Github */}
                                <div className="group relative">
                                    <a href="https://github.com/fathualr/PBL-SistemInformasiSMK.git">
                                        <svg strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" className="w-8 duration-200 hover:stroke-crimson"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                    </a>
                                    <span className="absolute -top-5 left-[45%] -translate-x-[50%] 
                                    z-20 origin-left scale-0 px-3 rounded-lg bg-charcoal text-crimson py-2 text-sm font-bold
                                    shadow-md transition-all duration-300 ease-in-out 
                                    group-hover:scale-100 font-poppins w-max">Go Check</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-2 my-5">
                <h1 className="skew-y-3 w-max mb-5 relative isolation-auto z-10 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full hover:text-white before:-left-full before:hover:left-0 before:rounded-full before:bg-crimson before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center justify-center px-4 py-3 font-bold text-crimson bg-white shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 text-base md:text-xl">Project Based Learning Mobile Development</h1>
            </div>
            {/* Project 3 */}
            <div className="col-span-2 w-full flex flex-col justify-start md:col-span-1">
                <motion.div
                    initial={{ opacity: 0, y: isMobile ? 50 : 500 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false, amount: 0 }}
                >
                    <figure className="mx-auto max-w-full w-60 h-auto">
                        <div className="p-1.5 bg-gray-800 border-4 border-white rounded-3xl">
                            <Image
                                className="max-w-full rounded-[1.25rem] h-auto"
                                width={360}
                                height={800}
                                src="/images/pbl-3.svg"
                                alt="Mobile Placeholder" />
                        </div>
                    </figure>
                </motion.div>
                <div className="hs-accordion-group mt-5">
                    <div className="hs-accordion bg-white px-3 active" id="hs-basic-with-title-and-arrow-stretched-heading-five">
                        <button className="hs-accordion-toggle font-poppins hs-accordion-active:text-crimson py-3 inline-flex items-center justify-between gap-x-3 w-full text-xs md:text-lg font-semibold text-start text-charcoal hover:text-crimson rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-none dark:focus:text-neutral-400" aria-expanded="true" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five">
                            Application Description
                            <svg className="hs-accordion-active:hidden block size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m6 9 6 6 6-6"></path>
                            </svg>
                            <svg className="hs-accordion-active:block hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m18 15-6-6-6 6"></path>
                            </svg>
                        </button>
                        <div id="hs-basic-with-title-and-arrow-stretched-collapse-five" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five">
                            <h2 className="text-charcoal text-sm md:text-base font-semibold font-poppins">Trashify : Pengelolaan Sampah dan Kebersihan Kota Batam
                            </h2>
                            <p className="text-charcoal text-sm md:text-base font-poppins py-5">
                                This application was developed to help the people of Batam City in managing waste more efficiently, including sorting, reporting problems, and monitoring and analysis by the Government.
                                Additionally, the app designed to reduce the volume of waste in landfills through recycling programs and improve the overall cleanliness of the city.
                            </p>
                        </div>
                    </div>
                    <div className="hs-accordion bg-white px-3" id="hs-basic-with-title-and-arrow-stretched-heading-six">
                        <button className="hs-accordion-toggle font-poppins hs-accordion-active:text-crimson py-3 inline-flex items-center justify-between gap-x-3 w-full text-xs md:text-lg font-semibold text-start text-charcoal hover:text-crimson rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-none dark:focus:text-neutral-400" aria-expanded="true" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-six">
                            Used Tools
                            <svg className="hs-accordion-active:hidden block size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m6 9 6 6 6-6"></path>
                            </svg>
                            <svg className="hs-accordion-active:block hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m18 15-6-6-6 6"></path>
                            </svg>
                        </button>
                        <div id="hs-basic-with-title-and-arrow-stretched-collapse-six" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-six">
                            <div className="flex items-center justify-center h-[5rem] gap-10">
                                {/* Programming Language */}
                                <div className="group relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45" height="45" viewBox="0 0 48 48">
                                        <path fill="#1565c0" d="M10,12l3,25l-8.019-8.019c-1.189-1.189-1.508-2.996-0.796-4.52L10,12z"></path><path fill="#42a5f5" d="M27.319,6.319C26.474,5.474,25.329,5,24.135,5c-0.745,0-1.479,0.185-2.135,0.538L10,12v20.343 c0,1.061,0.421,2.078,1.172,2.828L13,37h22v-5l7-11L27.319,6.319z"></path><path fill="#1565c0" d="M10,12h21.343c1.061,0,2.078,0.421,2.828,1.172L42,21v16h-7L10,12z"></path><polygon fill="#85cbf8" points="35,37 13,37 19,43 35,43"></polygon>
                                    </svg>
                                    <span className="absolute -top-5 left-[50%] -translate-x-[50%] 
                                    z-20 origin-left scale-0 px-3 rounded-lg bg-charcoal py-2 text-sm font-bold
                                    shadow-md transition-all duration-300 ease-in-out 
                                    group-hover:scale-100 font-poppins w-max text-crimson">Dart</span>
                                </div>
                                {/* Framework */}
                                <div className="group relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45" height="45" viewBox="0 0 48 48">
                                        <polygon fill="#40c4ff" points="26,4 6,24 12,30 38,4"></polygon><polygon fill="#40c4ff" points="38,22 27,33 21,27 26,22"></polygon><rect width="8.485" height="8.485" x="16.757" y="28.757" fill="#03a9f4" transform="rotate(-45.001 21 33)"></rect><polygon fill="#01579b" points="38,44 26,44 21,39 27,33"></polygon><polygon fill="#084994" points="21,39 30,36 27,33"></polygon>
                                    </svg>
                                    <span className="absolute -top-5 left-[40%] -translate-x-[50%] 
                                    z-20 origin-left scale-0 px-3 rounded-lg bg-charcoal py-2 text-sm font-bold
                                    shadow-md transition-all duration-300 ease-in-out 
                                    group-hover:scale-100 font-poppins w-max text-crimson">Flutter</span>
                                </div>
                                {/* Github */}
                                <div className="group relative">
                                    <a href="https://github.com/Vexonor/PBL-IF-09.git">
                                        <svg strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" className="w-8 duration-200 hover:stroke-crimson"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                    </a>
                                    <span className="absolute -top-5 left-[45%] -translate-x-[50%] 
                                    z-20 origin-left scale-0 px-3 rounded-lg bg-charcoal text-crimson py-2 text-sm font-bold
                                    shadow-md transition-all duration-300 ease-in-out 
                                    group-hover:scale-100 font-poppins w-max">Go Check</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-2 my-5">
                <h1 className="skew-y-3 w-max mb-5 relative isolation-auto z-10 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full hover:text-white before:-left-full before:hover:left-0 before:rounded-full before:bg-crimson before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center justify-center px-4 py-3 font-bold text-crimson bg-white shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 text-lg md:text-xl">Wireframe</h1>
            </div>
            {/* Wireframe 1 */}
            <div className="col-span-2 w-full flex flex-col justify-start md:col-span-1">
                <motion.div
                    initial={{ opacity: 0, y: isMobile ? 50 : 500 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false, amount: 0 }}
                >
                    <figure className="mx-auto relative z-[1] max-w-full w-[20rem] md:w-[50rem] h-auto shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] dark:shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)] rounded-b-lg">
                        <div className="relative flex items-center max-w-[50rem] bg-white rounded-t-lg py-2 px-24 dark:bg-neutral-700">
                            <div className="flex gap-x-1 absolute top-2/4 start-4 -translate-y-1">
                                <span className="size-2 bg-gray-600 rounded-full dark:bg-neutral-600"></span>
                                <span className="size-2 bg-gray-600 rounded-full dark:bg-neutral-600"></span>
                                <span className="size-2 bg-gray-600 rounded-full dark:bg-neutral-600"></span>
                            </div>
                            <div className="flex justify-center items-center size-full bg-gray-700 text-[.25rem] text-gray-400 rounded-sm sm:text-[.5rem] dark:bg-neutral-600 dark:text-neutral-400 font-poppins">www.focalors.com</div>
                        </div>

                        <div className="bg-gray-800 rounded-b-lg">
                            <Image
                                className="max-w-full h-[20rem] md:h-[43.75rem] rounded-b-lg object-cover object-top"
                                src="/images/FW-1.svg"
                                alt="Browser Placeholder"
                                width={800}
                                height={600}
                            />
                        </div>
                    </figure>
                </motion.div>
                <a
                    href="https://www.figma.com/design/OEANn5LmlDBbFKnoNuulfz/new?node-id=0-1&t=QUaLhBlS1lgW1kvB-1"
                    className="font-poppins w-40 md:w-60 flex my-10 justify-center gap-2 items-center mx-auto text-base md:text-lg bg-white backdrop-blur-md lg:font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-crimson hover:text-white before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden group shadow-[3px_3px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255)]"
                >
                    Go Check
                    <svg
                        className="w-8 h-8 justify-end group-hover:rotate-90 text-gray-50 ease-linear duration-300 rounded-full group-hover:border-none p-2 rotate-45"
                        viewBox="0 0 16 19"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                            className="fill-charcoal group-hover:fill-white"
                        ></path>
                    </svg>
                </a>
            </div>
            {/* Wireframe 2 */}
            <div className="col-span-2 w-full flex flex-col justify-start md:col-span-1">
                <motion.div
                    initial={{ opacity: 0, y: isMobile ? 50 : 500 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2 }}
                    viewport={{ once: false, amount: 0 }}
                >
                    <figure className="mx-auto relative z-[1] max-w-full w-[20rem] md:w-[50rem] h-auto shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] dark:shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)] rounded-b-lg">
                        <div className="relative flex items-center max-w-[50rem] bg-white rounded-t-lg py-2 px-24 dark:bg-neutral-700">
                            <div className="flex gap-x-1 absolute top-2/4 start-4 -translate-y-1">
                                <span className="size-2 bg-gray-600 rounded-full dark:bg-neutral-600"></span>
                                <span className="size-2 bg-gray-600 rounded-full dark:bg-neutral-600"></span>
                                <span className="size-2 bg-gray-600 rounded-full dark:bg-neutral-600"></span>
                            </div>
                            <div className="flex justify-center items-center size-full bg-gray-700 text-[.25rem] text-gray-400 rounded-sm sm:text-[.5rem] dark:bg-neutral-600 dark:text-neutral-400 font-poppins">www.focalors.com</div>
                        </div>

                        <div className="bg-gray-800 rounded-b-lg">
                            <Image
                                className="max-w-full h-[20rem] md:h-[43.75rem] rounded-b-lg object-cover object-top"
                                src="/images/FW-2.svg"
                                alt="Browser Placeholder"
                                width={800}
                                height={600}
                            />
                        </div>
                    </figure>
                </motion.div>
                <a
                    href="https://www.figma.com/design/chXk9NkiJKUIxMHeW3oPrV/Wireframe?node-id=17-572&t=8N366aMQvL8guj9F-1"
                    className="font-poppins w-40 md:w-60 flex my-10 justify-center gap-2 items-center mx-auto text-base md:text-lg bg-white backdrop-blur-md lg:font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-crimson hover:text-white before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden group shadow-[3px_3px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255)]"
                >
                    Go Check
                    <svg
                        className="w-8 h-8 justify-end group-hover:rotate-90 text-gray-50 ease-linear duration-300 rounded-full group-hover:border-none p-2 rotate-45"
                        viewBox="0 0 16 19"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                            className="fill-charcoal group-hover:fill-white"
                        ></path>
                    </svg>
                </a>
            </div>
            {/* Wireframe 3 */}
            <div className="col-span-2 w-full flex flex-col justify-start md:col-span-1">
                <motion.div
                    initial={{ opacity: 0, y: isMobile ? 50 : 500 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false, amount: 0 }}
                >
                    <figure className="mx-auto relative z-[1] max-w-full w-[20rem] md:w-[50rem] h-auto shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] dark:shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)] rounded-b-lg">
                        <div className="relative flex items-center max-w-[50rem] bg-white rounded-t-lg py-2 px-24 dark:bg-neutral-700">
                            <div className="flex gap-x-1 absolute top-2/4 start-4 -translate-y-1">
                                <span className="size-2 bg-gray-600 rounded-full dark:bg-neutral-600"></span>
                                <span className="size-2 bg-gray-600 rounded-full dark:bg-neutral-600"></span>
                                <span className="size-2 bg-gray-600 rounded-full dark:bg-neutral-600"></span>
                            </div>
                            <div className="flex justify-center items-center size-full bg-gray-700 text-[.25rem] text-gray-400 rounded-sm sm:text-[.5rem] dark:bg-neutral-600 dark:text-neutral-400 font-poppins">www.focalors.com</div>
                        </div>

                        <div className="bg-gray-800 rounded-b-lg">
                            <Image
                                className="max-w-full h-[20rem] md:h-[43.75rem] rounded-b-lg object-cover object-top"
                                src="/images/FW-3.svg"
                                alt="Browser Placeholder"
                                width={800}
                                height={600}
                            />
                        </div>
                    </figure>
                </motion.div>
                <a
                    href="https://www.figma.com/design/4uSS9yowz1L8OhGsCG4yJV/Flipper?node-id=69-922&t=QKMpVCb9ZbDxwwOS-1"
                    className="font-poppins w-40 md:w-60 flex my-10 justify-center gap-2 items-center mx-auto text-base md:text-lg bg-white backdrop-blur-md lg:font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-crimson hover:text-white before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden group shadow-[3px_3px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255)]"
                >
                    Go Check
                    <svg
                        className="w-8 h-8 justify-end group-hover:rotate-90 text-gray-50 ease-linear duration-300 rounded-full group-hover:border-none p-2 rotate-45"
                        viewBox="0 0 16 19"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                            className="fill-charcoal group-hover:fill-white"
                        ></path>
                    </svg>
                </a>
            </div>
            {/* Wireframe 4 */}
            <div className="col-span-2 w-full flex flex-col justify-between md:col-span-1">
                <motion.div
                    initial={{ opacity: 0, y: isMobile ? 50 : 500 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false, amount: 0 }}
                >
                    <figure className="mx-auto max-w-full w-60 h-auto">
                        <div className="p-1.5 bg-gray-800 border-4 border-white rounded-3xl">
                            <Image
                                className="max-w-full rounded-[1.25rem] h-auto"
                                width={360}
                                height={800}
                                src="/images/FW-4.svg"
                                alt="Mobile Placeholder" />
                        </div>
                    </figure>
                </motion.div>
                <a
                    href="https://www.figma.com/design/Q9svl21EOOntoROhBDbsz2/Desain-Antarmuka-PBL-IF-09?node-id=699-4671&t=pJdr8qj2RjmQx5Oe-1"
                    className="font-poppins w-40 md:w-60 flex my-10 justify-center gap-2 items-center mx-auto text-base md:text-lg bg-white backdrop-blur-md lg:font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-crimson hover:text-white before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden group shadow-[3px_3px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255)]"
                >
                    Go Check
                    <svg
                        className="w-8 h-8 justify-end group-hover:rotate-90 text-gray-50 ease-linear duration-300 rounded-full group-hover:border-none p-2 rotate-45"
                        viewBox="0 0 16 19"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                            className="fill-charcoal group-hover:fill-white"
                        ></path>
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default ProjectSection;