import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const reviews = [
    {
        name: "Cheyenne Donin",
        role: "Visitor, Curator",
        image: "https://placehold.co/50x50",
        text: "Contra exceeded our expectations in every way. From the initial planning stages to the final walkthrough, their dedication to quality was evident. Our dream home wouldn't have been possible without them."
    },
    {
        name: "Angel Bergson",
        role: "Visitor, Curator",
        image: "https://placehold.co/50x50",
        text: "Contra exceeded our expectations in every way. From the initial planning stages to the final walkthrough, their dedication to quality was evident. Our dream home wouldn't have been possible without them."
    },
    {
        name: "Erin Baptista",
        role: "Visitor, Curator",
        image: "https://placehold.co/50x50",
        text: "Contra exceeded our expectations in every way. From the initial planning stages to the final walkthrough, their dedication to quality was evident. Our dream home wouldn't have been possible without them."
    },
    {
        name: "John Kastom",
        role: "Visitor, Curator",
        image: "https://placehold.co/50x50",
        text: "Contra exceeded our expectations in every way. From the initial planning stages to the final walkthrough, their dedication to quality was evident. Our dream home wouldn't have been possible without them."
    },
    {
        name: "Kale Dalson",
        role: "Visitor, Curator",
        image: "https://placehold.co/50x50",
        text: "Contra exceeded our expectations in every way. From the initial planning stages to the final walkthrough, their dedication to quality was evident. Our dream home wouldn't have been possible without them."
    },
    {
        name: "Jake Matson",
        role: "Visitor, Curator",
        image: "https://placehold.co/50x50",
        text: "Contra exceeded our expectations in every way. From the initial planning stages to the final walkthrough, their dedication to quality was evident. Our dream home wouldn't have been possible without them."
    }
];

const SerComp1 = () => {
    return (
        <div className="container mx-auto max-w-[120em] px-4 py-8 lg:py-16 relative">
            <div className="absolute w-full 2xl:max-h-[25em] h-[40vh] inset-0 top-0 -z-10 bg-[#283337]">
                <div className="absolute inset-0 flex justify-between max-w-7xl mx-auto z-0 pointer-events-none">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-[1px] h-full bg-white opacity-20"></div>
                    ))}
                </div>
            </div>
            <div className="text-white flex justify-center md:pt-20 flex-col lg:px-[18em] md:px-[10em] px-4 text-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Reviews of Our <br /> Services</h1>
                <p className="mb-8 text-base md:text-lg">
                    Our clients are at the center of everything we do. We consider each project not just a construction endeavor, but a collaborative journey with you.
                </p>
            </div>
            
            <div className="grid bg-white max-w-7xl mx-auto rounded-lg z-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {reviews.map((review, index) => (
                    <div key={index} className="p-4 md:p-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105">
                        <div className="flex items-center mb-4">
                            <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                    <FontAwesomeIcon key={i} icon={faStar} className="text-gray-400 mr-1" />
                                ))}
                            </div>
                        </div>
                        <p className="text-gray-700 text-sm md:text-base mb-4">"{review.text}"</p>
                        <div className="flex items-center">
                            <img
                                src={review.image}
                                alt={`Profile picture of ${review.name}`}
                                className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-3 md:mr-4"
                            />
                            <div>
                                <p className="font-bold text-sm md:text-base">{review.name}</p>
                                <p className="text-gray-600 text-xs md:text-sm">{review.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SerComp1;
