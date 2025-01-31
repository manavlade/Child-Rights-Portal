import React, { useState } from "react";
import { motion } from "framer-motion";
import LearningOptions from "./Options";

const Introduction = () => {
    const [showQuiz, setShowQuiz] = useState(false);

    // Animation Variants for Framer Motion
    const animationVariants = {
        hidden: { x: "100vw", opacity: 0 },
        visible: { x: 0, opacity: 1 },
        exit: { x: "-100vw", opacity: 0 },
    };

    return (
        <div className=" bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200" >
            

            <div className="flex justify-center items-center lg:px-64 lg:py-12">
                {!showQuiz ? (
                    // Introduction Component
                    <motion.div
                        className="bg-white shadow-lg rounded-lg p-10 w-full max-w-3xl"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={animationVariants}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-3xl font-extrabold text-center text-pink-600 mb-8">
                            🌟 Welcome to Level 1! 🌟
                        </h1>
                        <p className="text-lg text-gray-700 max-w-2xl mx-auto text-center">
                            Today, you’re going to learn about your <b>Right to Education</b> in
                            a way that’s fun and exciting. Let’s start with a quick quiz game!
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 max-w-4xl">
                            {/* Fun Facts Section */}
                            <div className="bg-white shadow-md rounded-lg p-4">
                                <h2 className="text-2xl font-bold text-blue-600 mb-4">✨ Fun Facts ✨</h2>
                                <ul className="list-disc list-inside text-gray-600">
                                    <li>Did you know? Every child in the world has the right to go to school!</li>
                                    <li>You have the right to play and enjoy your childhood. It’s the law!</li>
                                    <li>More than 190 countries have agreed to protect children's rights.</li>
                                </ul>
                            </div>

                            {/* Benefits Section */}
                            <div className="bg-white shadow-md rounded-lg p-4">
                                <h2 className="text-2xl font-bold text-green-600 mb-4">🌟 Why This Matters 🌟</h2>
                                <ul className="list-disc list-inside text-gray-600">
                                    <li>Knowing your rights helps you stay safe and protected.</li>
                                    <li>It gives you the confidence to stand up for yourself.</li>
                                    <li>It ensures you can grow, learn, and enjoy life to the fullest!</li>
                                </ul>
                            </div>
                        </div>
                        <div className="text-center mt-6">
                            <button
                                onClick={() => setShowQuiz(true)} // Show the QuizGame component
                                className="mt-4 px-6 py-3 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 transition-colors"
                            >
                                Let’s Get Started!
                            </button>
                        </div>
                    </motion.div>
                ) : (
                    // QuizGame Component
                    <motion.div
                        className="w-full h-full"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={animationVariants}
                        transition={{ duration: 0.5 }}
                    >
                        <LearningOptions/>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Introduction;
