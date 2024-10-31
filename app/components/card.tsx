"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export function ThreeDCard() {
    return (
        <CardContainer className="inter-var">
            <CardBody className="bg-none relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] w-auto sm:w-[10rem] md:w-[30rem] h-auto rounded-xl p-6">
                <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                        src="/images/profile.jpg"
                        height="1000"
                        width="1000"
                        className="h-72 w-full object-cover object-top rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </CardItem>
            </CardBody>
        </CardContainer>
    );
}

export default ThreeDCard;
