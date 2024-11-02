"use client";

import { useEffect, useState, useRef } from 'react';
import HomeSection from '../section/home';
import AboutSection from '../section/about';
import ProjectSection from '../section/project';
import ContactSection from '../section/contact';
import Footer from '../components/footer'
import { motion } from 'framer-motion';
import { useFollowPointer } from "../components/pointer-follow";

export const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const ref = useRef(null);
    const { x, y } = useFollowPointer(ref);
    return (
        <>
            <motion.div ref={ref} className="box" style={{ x, y }} />
            <div id="scrollspy-scrollable-parent-1" className="h-screen fixed top-0 overflow-y-auto overflow-x-hidden
            [&::-webkit-scrollbar]:w-3
            [&::-webkit-scrollbar-track]:rounded-full
            [&::-webkit-scrollbar-track]:bg-charcoal
            [&::-webkit-scrollbar-thumb]:rounded-full
            [&::-webkit-scrollbar-thumb]:bg-crimson">
                <header className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-40 w-full bg-charcoal text-sm py-4 dark:bg-neutral-800">
                    <nav className="max-w-[85rem] w-full mx-auto sm:flex sm:items-center sm:justify-between">
                        <div className="flex items-center justify-between px-5">
                            <a className="flex-none font-semibold text-xl focus:outline-none focus:opacity-80 text-white" href="#" aria-label="Brand">
                                <img src="/images/code.png" width={50} alt="" />
                            </a>
                        </div>
                        <div id="hs-scrollspy-basic-collapse-heading" className="hidden overflow-hidden transition-all duration-300 basis-full grow sm:block px-5" aria-labelledby="hs-scrollspy-basic-collapse">
                            <div data-hs-scrollspy="#scrollspy-1" data-hs-scrollspy-scrollable-parent="#scrollspy-scrollable-parent-1" className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end [--scrollspy-offset:220] md:[--scrollspy-offset:70] sm:mt-0 sm:ps-5">
                                <a className="text-xl font-poppins transition ease-in delay-150 text-white leading-6 hover:text-crimson focus:outline-none focus:text-crimson  hs-scrollspy-active:text-crimson" href="#home">Home</a>
                                <a className="text-xl font-poppins transition ease-in delay-150 text-white leading-6 hover:text-crimson focus:outline-none focus:text-crimson  hs-scrollspy-active:text-crimson" href="#about">About</a>
                                <a className="text-xl font-poppins transition ease-in delay-150 text-white leading-6 hover:text-crimson focus:outline-none focus:text-crimson  hs-scrollspy-active:text-crimson" href="#project">Project</a>
                                <a className="text-xl font-poppins transition ease-in delay-150 text-white leading-6 hover:text-crimson focus:outline-none focus:text-crimson  hs-scrollspy-active:text-crimson" href="#contact">Contact</a>
                            </div>
                        </div>
                    </nav>
                </header>
                <div id="scrollspy-1" className="mt-5 space-y-4">
                    <div id="home" className="h-max lg:h-screen overflow-hidden">
                        <motion.div
                            initial={{ opacity: 0, x: isMobile ? 0 : 300, y: isMobile ? 300 : 0 }}
                            whileInView={{ opacity: 1, x: isMobile ? 0 : 50, y: isMobile ? 0 : 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: false, amount: 0 }}
                        >
                            <HomeSection />
                        </motion.div>
                    </div>

                    <div className="font-poppins py-3 flex items-center justify-center text-lg md:text-2xl text-white before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-white dark:before:border-neutral-600 dark:after:border-neutral-600">
                        <h1 className="bg-crimson p-5 skew-y-3">About</h1>
                    </div>
                    <div id="about" className="h-max">
                        <AboutSection />
                    </div>
                    <div className="font-poppins py-3 flex items-center justify-center text-2xl text-white before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-white dark:before:border-neutral-600 dark:after:border-neutral-600">
                        <h1 className="bg-crimson p-5 skew-y-3">My Project</h1>
                    </div>
                    <div id="project" className="h-max">
                        <ProjectSection />
                    </div>
                    <div className="font-poppins py-3 flex items-center justify-center text-2xl text-white before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-white dark:before:border-neutral-600 dark:after:border-neutral-600">
                        <h1 className="bg-crimson p-5 skew-y-3">Contact</h1>
                    </div>
                    <div id="contact" className="h-screen flex justify-center items-center">
                        <ContactSection />
                    </div>
                </div>
                <hr className="border-2 border-crimson w-11/12 mx-auto"></hr>
                <Footer />
            </div>
        </>
    );
}

export default Navbar;
