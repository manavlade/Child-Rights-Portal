"use client";

import React, { useState } from "react";
import "../styles/styles.css";
import { useToast } from "@/hooks/use-toast";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

const cardData = {
    question: "Which Picture seems incorrect?",
    options: [
        { img: "https://media.licdn.com/dms/image/v2/D4D12AQGr8xBPoPxy4A/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1693024144959?e=2147483647&v=beta&t=4G6lqWaBE_4N-s33A3yOD3HLiQoQxdIrgmiQa6CJABA", isCorrect: true },
        { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnIs7La6hiGPAzO5YaZi13FKkpbOAbbk3H5A&s", isCorrect: false },
        { img: "https://img.freepik.com/free-vector/children-with-different-race-playing-playground_1308-134675.jpg?size=626&ext=jpg&ga=GA1.1.1314780943.1728518400&semt=ais_hybrid-rr-similar", isCorrect: false },
        { img: "https://www.shutterstock.com/image-vector/vector-illustration-kids-shopping-260nw-1117348889.jpg", isCorrect: false },
    ],
};

export default function Game() {
    const [selectedOption, setSelectedOption] = useState<number | null>(null); // Track selected option
    const [showStars, setShowStars] = useState<boolean>(false); // Show stars animation
    const [wrongAnswerMessage, setWrongAnswerMessage] = useState<string | null>(null); // Wrong answer message
    const { toast } = useToast(); // Hook to display the toast

    const handleOptionClick = (optionIndex: number) => {
        const option = cardData.options[optionIndex];

        if (option.isCorrect) {
            // Correct answer: Show stars and toast message
            setShowStars(true);
            setWrongAnswerMessage(null);

            // Trigger toast
            toast({
                description: "Experience Level Increased!",
            });

            // Hide stars after 3 seconds
            setTimeout(() => {
                setShowStars(false);
            }, 3000);
        } else {
            // Wrong answer: Show message
            setWrongAnswerMessage("Wrong answer, try again!");
        }

        setSelectedOption(optionIndex);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8">
            <h1 className="text-3xl font-bold text-center mb-4">Right to Education Game</h1>

            <Card className="p-6 bg-white border rounded-lg shadow-lg w-full max-w-lg">
                <p className="text-xl font-semibold mb-4 text-center">{cardData.question}</p>
                <div className="grid grid-cols-2 gap-4">
                    {cardData.options.map((option, index) => (
                        <Button
                            key={index}
                            variant="outline"
                            onClick={() => handleOptionClick(index)}
                            className="w-full h-32 flex justify-center items-center"
                        >
                            <img
                                src={option.img}
                                alt={`Option ${index + 1}`}
                                className="w-full h-full object-cover rounded"
                            />
                        </Button>
                    ))}
                </div>
            </Card>

            {/* Wrong Answer Message */}
            {wrongAnswerMessage && (
                <div className="mt-4 text-red-500 text-xl">{wrongAnswerMessage}</div>
            )}

            {/* Star Animation */}
            {showStars && (
                <div className="stars">
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                </div>
            )}
        </div>
    );
}
