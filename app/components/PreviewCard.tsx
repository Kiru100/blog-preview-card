"use client";
import Image from 'next/image';
import React from 'react'
import illustration from '../assets/images/illustration-article.svg';
import image_avatar from '../assets/images/image-avatar.webp';

function PreviewCard() {
    return (
        <main className="bg-pure-white max-w-sm p-6 w-full mx-6 rounded-[20px] outline outline-1 outline-app-gray-950 shadow-custom-black">
            <Image
                priority
                src={illustration}
                alt="Illustration Article"
                className="rounded-[10px]"
            />
            <div className="flex flex-col gap-3 pt-6">
                <h2 className="bg-app-yellow px-3 py-1 rounded font-fig-tree-text-4 text-app-gray-950 self-start">
                    Learning
                </h2>
                <p className="font-fig-tree-text-3 text-app-gray-950">
                    Published 21 Dec 2023
                </p>
                <h1 className="font-fig-tree-text-1">
                    HTML & CSS foundations
                </h1>
                <p className="font-fig-tree-text-2 text-app-gray-500 ">
                    These languages are the backbone of every website, defining structure, content, and presentation.
                </p>
            </div>
            <div className="mt-6 flex items-center gap-3">
                <Image
                    priority
                    src={image_avatar}
                    alt="Image Avatar"
                    height={32}
                    width={32}
                />
                <p className="font-fig-tree-text-4 text-app-gray-950">Greg Hooper</p>
            </div>
        </main>
    )
}

export default PreviewCard;
