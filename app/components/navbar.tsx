import React from 'react';
import HomeSection from '../section/home';
import AboutSection from '../section/about';
import ProjectSection from '../section/project';
import ContactSection from '../section/contact';
import Footer from '../components/footer'

export const Navbar = () => {
    return (
        <div id="scrollspy-scrollable-parent-1" className="h-screen overflow-y-auto
  [&::-webkit-scrollbar]:w-3
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-charcoal
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-crimson">
            <header className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-40 w-full bg-charcoal text-sm py-4 dark:bg-neutral-800">
                <nav className="max-w-[85rem] w-full mx-auto sm:flex sm:items-center sm:justify-between">
                    <div className="flex items-center justify-between">
                        <a className="flex-none font-semibold text-xl focus:outline-none focus:opacity-80 text-white" href="#" aria-label="Brand">
                            <img src="/images/code.png" width={50} alt="" />
                        </a>
                        <div className="sm:hidden">
                            <button type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-white dark:focus:ring-offset-gray-800" id="hs-scrollspy-basic-collapse" aria-expanded="false" aria-controls="hs-scrollspy-basic-collapse-heading" data-hs-collapse="#hs-scrollspy-basic-collapse-heading">
                                <svg className="hs-collapse-open:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="3" x2="21" y1="6" y2="6"></line>
                                    <line x1="3" x2="21" y1="12" y2="12"></line>
                                    <line x1="3" x2="21" y1="18" y2="18"></line>
                                </svg>
                                <svg className="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 6 6 18"></path>
                                    <path d="m6 6 12 12"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div id="hs-scrollspy-basic-collapse-heading" className="hidden overflow-hidden transition-all duration-300 basis-full grow sm:block" aria-labelledby="hs-scrollspy-basic-collapse">
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
                <div id="home" className="h-screen">
                    <HomeSection />
                </div>
                <div className="font-poppins py-3 flex items-center justify-center text-2xl text-white before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-white dark:before:border-neutral-600 dark:after:border-neutral-600">
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
    );
}

export default Navbar;
