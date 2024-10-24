"use client";
import React, { useState, useEffect } from "react";
import Typed from 'typed.js'
import { Button } from "@/components/ui/button"; // Shadcn Button component
import Navbar from "@/components/Navbar";
import Image from "next/image";
import greenBrown from "@/Assests/green brown top.jpg";
import pink from "@/Assests/pink top.jpg";
import greenTop from "@/Assests/green top.webp";
import redFrock from "@/Assests/red frock.jpg";
import pinkFrock from "@/Assests/pink frock.png";
import blueJeans from "@/Assests/pant.png";
import plazo from "@/Assests/pant.webp";
import watch1 from "@/Assests/watchp.webp";
import watch2 from "@/Assests/watchp.webp";
import watch3 from "@/Assests/watchp.webp";
import child from "@/Assests/child.webp";
import DressPreview from "./DressPreview";

// DressSelection component (the original stepper process)
const DressSelection = () => {
    const [currentStep, setCurrentStep] = useState(0); // 0 = Top, 1 = Pant, 2 = Watch
    const [topSelection, setTopSelection] = useState(null);
    const [pantSelection, setPantSelection] = useState(null);
    const [watchSelection, setWatchSelection] = useState(null);
    const [errorMessage, setErrorMessage] = useState(""); // For validation messages
    const [isDressSelected, setIsDressSelected] = useState(false); // To show DressPreview

    // Validation and step navigation
    const handleNextClick = () => {
        if (currentStep === 0 && !topSelection) {
            setErrorMessage("Please select a top before proceeding.");
        } else if (currentStep === 1 && !pantSelection) {
            setErrorMessage("Please select a pant before proceeding.");
        } else {
            setErrorMessage("");
            setCurrentStep((prevStep) => prevStep + 1);
        }
    };

    const handleBackClick = () => {
        if (currentStep > 0) setCurrentStep((prevStep) => prevStep - 1);
    };

    const handleTopSelection = (color: any) => {
        setTopSelection(color);
    };

    const handlePantSelection = (color: any) => {
        setPantSelection(color);
    };

    const handleWatchSelection = (color: any) => {
        setWatchSelection(color);
    };

    const handleWatchNextClick = () => {
        if (!watchSelection) {
            setErrorMessage("Please select a watch before proceeding.");
        } else {
            // Instead of the alert, show the DressPreview page
            setIsDressSelected(true);
        }
    };

    // If the dress is selected, show the DressPreview page
    if (isDressSelected) {
        return (
            <DressPreview
            />
        );
    }

    // Dress selection process
    return (
        <>
            <Navbar />
            <hr />
            <div className="flex mt-10">
               

                <div className="w-4/5 b ml-20 mr-20 p-8 relative overflow-hidden">
                    <h1 className="text-center text-4xl md:pt-8 font-bold">
                        Touch Education
                    </h1>
                    <p className="text-center text-2xl md:pt-6 md:pb-8">
                        Select From Below options to create your favourite dress
                    </p>

                    <div className="flex justify-center mb-8">
                        <div
                            className={`px-4 py-2 rounded-full ${currentStep === 0 ? "bg-blue-600 text-white" : "bg-gray-400"
                                } mx-2`}
                        >
                            1. Top Selection
                        </div>
                        <div
                            className={`px-4 py-2 rounded-full ${currentStep === 1 ? "bg-blue-600 text-white" : "bg-gray-400"
                                } mx-2`}
                        >
                            2. Pant Selection
                        </div>
                        <div
                            className={`px-4 py-2 rounded-full ${currentStep === 2 ? "bg-blue-600 text-white" : "bg-gray-400"
                                } mx-2`}
                        >
                            3. Watch Selection
                        </div>
                    </div>

                    {errorMessage && (
                        <div className="text-red-600 text-center mb-4">{errorMessage}</div>
                    )}

                    {/* Top Selection */}
                    <div
                        className={`transition-transform duration-500 ease-in-out transform ${currentStep === 0 ? "translate-x-0" : "-translate-x-full"
                            }`}
                    >
                        <h2 className="text-xl text-center md:pt-10 pb-10 font-semibold text-gray-700 mb-4">
                            Please select your favourite color top
                        </h2>
                        <div className="grid grid-cols-5 justify-center gap-x-8">
                            {/* Top options */}
                            <div
                                className="w-full flex flex-col items-center"
                                onClick={() => handleTopSelection("white")}
                            >
                                <Image src={greenBrown} alt="white top" height={200} />
                                <input
                                    type="radio"
                                    name="top"
                                    checked={topSelection === "white"}
                                    className="mt-2 scale-150"
                                    readOnly
                                />
                            </div>
                            <div
                                className="w-full flex flex-col items-center"
                                onClick={() => handleTopSelection("red")}
                            >
                                <Image src={pink} alt="red top" height={200} />
                                <input
                                    type="radio"
                                    name="top"
                                    checked={topSelection === "red"}
                                    className="mt-2 scale-150"
                                    readOnly
                                />
                            </div>
                            <div
                                className="w-full flex flex-col items-center"
                                onClick={() => handleTopSelection("blue")}
                            >
                                <Image src={greenTop} alt="blue top" height={200} />
                                <input
                                    type="radio"
                                    name="top"
                                    checked={topSelection === "blue"}
                                    className="mt-2 scale-150"
                                    readOnly
                                />
                            </div>
                            <div
                                className="w-full flex flex-col items-center"
                                onClick={() => handleTopSelection("purple")}
                            >
                                <Image src={redFrock} alt="purple top" height={200} />
                                <input
                                    type="radio"
                                    name="top"
                                    checked={topSelection === "purple"}
                                    className="mt-2 scale-150"
                                    readOnly
                                />
                            </div>
                            <div
                                className="w-full flex flex-col items-center"
                                onClick={() => handleTopSelection("black")}
                            >
                                <Image src={pinkFrock} alt="black top" height={200} />
                                <input
                                    type="radio"
                                    name="top"
                                    checked={topSelection === "black"}
                                    className="mt-2 scale-150"
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className="text-center mt-4">
                            <Button
                                onClick={handleNextClick}
                                className="bg-blue-600 text-white"
                            >
                                Next
                            </Button>
                        </div>
                    </div>

                    {/* Pant Selection */}
                    <div
                        className={`absolute md:pt-52 top-0 left-0 w-full transition-transform duration-500 ease-in-out transform ${currentStep === 1 ? "translate-x-0" : "translate-x-full"
                            }`}
                    >
                        <h2 className="text-xl text-center md:pt-10 pb-10 font-semibold text-gray-700 mb-4">
                            Please select your favourite color pant
                        </h2>
                        <div className="grid grid-cols-3 gap-6">
                            <div
                                className="w-full flex flex-col items-center"
                                onClick={() => handlePantSelection("blackjeans")}
                            >
                                <Image src={blueJeans} alt="black jeans" height={180} />
                                <input
                                    type="radio"
                                    name="pant"
                                    checked={pantSelection === "blackjeans"}
                                    className="mt-2 scale-150"
                                    readOnly
                                />
                            </div>
                              <div
                                className="w-full flex flex-col items-center"
                                onClick={() => handlePantSelection("blackjeans")}
                            >
                                <Image src={blueJeans} alt="black jeans" height={180} />
                                <input
                                    type="radio"
                                    name="pant"
                                    checked={pantSelection === "blackjeans"}
                                    className="mt-2 scale-150"
                                    readOnly
                                />
                            </div>
                            <div
                                className="w-full flex flex-col items-center"
                                onClick={() => handlePantSelection("blue")}
                            >
                                <Image src={blueJeans} alt="blue jeans" height={180} />
                                <input
                                    type="radio"
                                    name="pant"
                                    checked={pantSelection === "blue"}
                                    className="mt-2 scale-150"
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className="flex justify-between mt-8">
                            <Button onClick={handleBackClick} className="bg-gray-500 text-white">
                                Back
                            </Button>
                            <Button
                                onClick={handleNextClick}
                                className="bg-blue-600 text-white"
                            >
                                Next
                            </Button>
                        </div>
                    </div>

                    {/* Watch Selection */}
                    <div
                        className={`absolute md:pt-48 top-0 left-0 w-full transition-transform duration-500 ease-in-out transform ${currentStep === 2 ? "translate-x-0" : "translate-x-full"
                            }`}
                    >
                        <h2 className="text-xl text-center md:pt-10 pb-10 font-semibold text-gray-700 mb-4">
                            Please select your favourite watch
                        </h2>
                        <div className="grid grid-cols-3 gap-6">
                            <div
                                className="w-full flex flex-col items-center"
                                onClick={() => handleWatchSelection("watch1")}
                            >
                                <Image src={watch1} alt="watch 1" height={180} />
                                <input
                                    type="radio"
                                    name="watch"
                                    checked={watchSelection === "watch1"}
                                    className="mt-2 scale-150"
                                    readOnly
                                />
                            </div>
                            <div
                                className="w-full flex flex-col items-center"
                                onClick={() => handleWatchSelection("watch2")}
                            >
                                <Image src={watch2} alt="watch 2" height={180} />
                                <input
                                    type="radio"
                                    name="watch"
                                    checked={watchSelection === "watch2"}
                                    className="mt-2 scale-150"
                                    readOnly
                                />
                            </div>
                            <div
                                className="w-full flex flex-col items-center"
                                onClick={() => handleWatchSelection("watch3")}
                            >
                                <Image src={watch3} alt="watch 3" height={180} />
                                <input
                                    type="radio"
                                    name="watch"
                                    checked={watchSelection === "watch3"}
                                    className="mt-2 scale-150"
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className="flex justify-between mt-8">
                            <Button onClick={handleBackClick} className="bg-gray-500 text-white">
                                Back
                            </Button>
                            <Button
                                onClick={handleWatchNextClick}
                                className="bg-blue-600 text-white"
                            >
                                Finish
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DressSelection;
