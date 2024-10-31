"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";
import FloatingDockDemo from "./floating-language";
import FloatingDockFrame from "./floating-frameW";
import FloatingDockTools from "./floating-tools";
import { motion } from 'framer-motion';

export function TracingBeamDemo() {
    return (
        <TracingBeam className="px-10 md:px-6">
            <div className="max-w-2xl mx-auto antialiased pt-4 relative font-poppins text-white">
                {dummyContent.map((item, index) => (
                    <div key={`content-${index}`} className="mb-10">
                        <h2 className="bg-crimson text-white rounded-full text-lg md:text-xl w-fit px-4 py-1 mb-4">
                            {item.badge}
                        </h2>

                        <p className={twMerge("text-xl mb-4")}>
                            {item.title}
                        </p>

                        <div className="text-md md:text-lg prose prose-sm dark:prose-invert">
                            {item?.image && (
                                <Image
                                    src={item.image}
                                    alt="blog thumbnail"
                                    height="1000"
                                    width="1000"
                                    className="rounded-lg mb-10 object-cover"
                                />
                            )}
                            {item.description}
                        </div>
                    </div>
                ))}
            </div>
        </TracingBeam>
    );
}

const dummyContent = [
    {
        title: "",
        description: (
            <>
                <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false, amount: 1 }}
                >
                    <p>
                        I am Shafiq, a student pursuing an Applied Bachelor in Software Engineering
                        Technology at Politeknik Negeri Batam since 2023. Passionate about software development,
                        I am focused on advancing my skills in coding, problem-solving, and project management.
                        I aim to contribute effectively in a dynamic and growth-oriented environment.
                    </p>
                </motion.div>
            </>
        ),
        badge: "My Profile",
        image:
            "",
    },
    {
        title: "",
        description: (
            <>
                <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false, amount: 1 }}
                >
                    <div>
                        <div className="flex gap-x-3">
                            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                                <div className="relative z-10 size-7 flex justify-center items-center">
                                    <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
                                </div>
                            </div>

                            <div className="grow pt-0.5 pb-8">
                                <h3 className="flex gap-x-1.5 font-semibold text-white">
                                    PT. Telekomunikasi Indonesia (Telkom) Pusat Tanjung Pinang
                                </h3>
                                <p className="mt-1 text-sm text-white">
                                    Field practice
                                </p>
                                <h3 className="text-sm mt-1 font-medium uppercase text-white">
                                    June 2022 - December 2022
                                </h3>
                            </div>
                        </div>

                        <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                            <div className="relative z-10 size-7 flex justify-center items-center">
                                <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </>
        ),
        badge: "Work Experience",
        image:
            "",
    },
    {
        title: "",
        description: (
            <>
                <div>

                    <div className="flex gap-x-3">
                        <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                            <div className="relative z-10 size-7 flex justify-center items-center">
                                <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
                            </div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 0 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: false, amount: 1 }}
                        >
                            <div className="grow pt-0.5 pb-8">
                                <h3 className="flex gap-x-1.5 font-semibold text-white">
                                    Politeknik Negeri Batam
                                </h3>
                                <p className="mt-1 text-sm text-white">
                                    D3 Teknik Informatika
                                </p>
                                <h3 className="text-sm mt-1 font-medium text-white">
                                    Agustus 2023 - Now
                                </h3>
                            </div>
                        </motion.div>
                    </div>

                    <div className="flex gap-x-3">
                        <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                            <div className="relative z-10 size-7 flex justify-center items-center">
                                <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
                            </div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 0 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: false, amount: 1 }}
                        >
                            <div className="grow pt-0.5 pb-8">
                                <h3 className="flex gap-x-1.5 font-semibold text-white">
                                    SMK Negeri 4 Tanjungpinang
                                </h3>
                                <p className="mt-1 text-sm text-white">
                                    Teknik Komputer dan Jaringan
                                </p>
                                <h3 className="text-sm mt-1 font-medium text-white">
                                    July 2020 - June 2023
                                </h3>
                            </div>
                        </motion.div>
                    </div>

                    <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                        <div className="relative z-10 size-7 flex justify-center items-center">
                            <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
                        </div>
                    </div>
                </div>
            </>
        ),
        badge: "Educational Background",
        image:
            "",
    },
    {
        title: "",
        description: (
            <>
                <div>
                    <div className="flex gap-x-3">
                        <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                            <div className="relative z-10 size-7 flex justify-center items-center">
                                <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
                            </div>
                        </div>

                        <div className="grow pt-0.5 pb-8">
                            {/* Motion for Title */}
                            <motion.div
                                initial={{ opacity: 0, y: 0 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: false, amount: 1 }}
                            >
                                <h3 className="flex gap-x-1.5 font-semibold text-white">
                                    Programming Language
                                </h3>
                            </motion.div>
                            {/* Motion for Content */}
                            <motion.div
                                initial={{ opacity: 0, y: 0 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: false, amount: 1 }}
                            >
                                <FloatingDockDemo />
                            </motion.div>
                        </div>
                    </div>

                    <div className="flex gap-x-3">
                        <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                            <div className="relative z-10 size-7 flex justify-center items-center">
                                <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
                            </div>
                        </div>

                        <div className="grow pt-0.5 pb-8">
                            {/* Motion for Title */}
                            <motion.div
                                initial={{ opacity: 0, y: 0 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: false, amount: 1 }}
                            >
                                <h3 className="flex gap-x-1.5 font-semibold text-white">
                                    Frameworks
                                </h3>
                            </motion.div>
                            {/* Motion for Content */}
                            <motion.div
                                initial={{ opacity: 0, y: 0 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: false, amount: 1 }}
                            >
                                <FloatingDockFrame />
                            </motion.div>
                        </div>
                    </div>

                    <div className="flex gap-x-3">
                        <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                            <div className="relative z-10 size-7 flex justify-center items-center">
                                <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
                            </div>
                        </div>

                        <div className="grow pt-0.5 pb-8">
                            {/* Motion for Title */}
                            <motion.div
                                initial={{ opacity: 0, y: 0 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: false, amount: 1 }}
                            >
                                <h3 className="flex gap-x-1.5 font-semibold text-white">
                                    Tools
                                </h3>
                            </motion.div>
                            {/* Motion for Content */}
                            <motion.div
                                initial={{ opacity: 0, y: 0 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: false, amount: 1 }}
                            >
                                <FloatingDockTools />
                            </motion.div>
                        </div>
                    </div>
                    <div className="flex gap-x-3">
                        <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                            <div className="relative z-10 size-7 flex justify-center items-center">
                                <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        ),
        badge: "Skill",
        image:
            "",
    },
];

export default TracingBeamDemo;
