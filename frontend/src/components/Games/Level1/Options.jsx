import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { useState } from "react";
import { motion } from "framer-motion";
import QuizGame from "./RTEQuiz";

const LearningOptions = () => {
    const [showVideo, setShowVideo] = useState(false);
    const [showText, setShowText] = useState(false);
    const [showQuiz, setShowQuiz] = useState(false);

    return (
        <div className="lg:px-36 text-center">
            {/* Conditionally show either the learning options or the quiz */}
            {!showQuiz ? (
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Buttons Section */}
                    <div className="flex gap-5 border border-black p-5 rounded-3xl justify-center text-2xl">
                        <InteractiveHoverButton onClick={() => setShowVideo(!showVideo)}>
                            {showVideo ? "Hide Video" : "Watch Video"}
                        </InteractiveHoverButton>
                        <InteractiveHoverButton onClick={() => setShowText(!showText)}>
                            {showText ? "Hide Text" : "Play Quiz"}
                        </InteractiveHoverButton>
                        <InteractiveHoverButton>Play Game</InteractiveHoverButton>
                    </div>

                    {/* Video Section (Hidden unless showVideo is true) */}
                    {showVideo && (
                        <div className="mt-6">
                            <iframe
                                width="700"
                                height="400"
                                src="https://www.youtube.com/watch?v=xmujn1iGY_Q" // Replace with actual video URL
                                title="Right to Education Video"
                                className="rounded-lg shadow-lg mx-auto"
                                allowFullScreen
                            ></iframe>
                        </div>
                    )}

                    {/* Educational Text Section */}
                    {showText && (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.5 }}
                            className="max-w-4xl h-80 lg:mt-10 mt-2 overflow-auto p-5 bg-white shadow-lg rounded-lg"
                        >
                            <p className="text-lg text-gray-700">
                                <strong>🎉 Hey Kids! Let’s Talk About Your Right to Education! 📚✨</strong>
                                <br />
                                Did you know that <strong>every child has the right to go to school for free</strong>? That’s right! 🏫💡 In 2010, India made a super important rule called the <strong>Right to Education (RTE) Act</strong>, which makes sure that all kids between <strong>6 to 14 years old</strong> can learn, grow, and dream big! 🌟
                                <br /><br />

                                <strong>📜 Why is the Right to Education Important?</strong>
                                <ul className="list-disc pl-5">
                                    <li>✅ Every child gets to read amazing books! 📖</li>
                                    <li>✅ Every child learns cool things like science, math, and history! 🧠</li>
                                    <li>✅ Every child has a bright future filled with opportunities! 🚀</li>
                                </ul>
                                <br />

                                <strong>🎓 What Does the Right to Education Do for You?</strong>
                                <ul className="list-disc pl-5">
                                    <li>🔹 <strong>Free & Compulsory Schooling</strong> – No school fees, no worries! 🏫❌💰</li>
                                    <li>🔹 <strong>Fun & Safe Classrooms</strong> – No punishments, only learning and fun! 😊🎉</li>
                                    <li>🔹 <strong>Special Help for Kids in Need</strong> – 25% of seats in private schools are saved for kids from poor families! 🤗</li>
                                    <li>🔹 <strong>Better Teachers & Schools</strong> – More teachers, more books, more fun! 📚✏️</li>
                                </ul>
                                <br />

                                <strong>🚀 How Did This Law Happen?</strong>
                                A long time ago, people realized that <strong>education is the key to success!</strong> 🔑💡 India worked hard to make <strong>education a right for every child</strong>, just like food and shelter! 🏡🍎
                                <br /><br />

                                <strong>🎮 Let’s Make Learning Fun! How Do You Want to Learn?</strong>
                                <ul className="list-disc pl-5">
                                    <li>🔹 <strong>Watch a Fun Video!</strong> 🎥 – See how education changes lives!</li>
                                    <li>🔹 <strong>Play a Quiz Game!</strong> ❓ – Test your knowledge and win points!</li>
                                    <li>🔹 <strong>Play an Adventure Game!</strong> 🎮 – Help kids reach school safely!</li>
                                </ul>
                                <br />

                                <strong>❤️ Because Every Child Deserves a Chance!</strong>
                                <br />
                                No matter who you are, where you're from, or how much money you have, <strong>YOU have the right to learn!</strong> 🚀💡 So go ahead, dream big, and make the world a smarter place! 🌍🎓
                                <br /><br />
                                <button
                                    onClick={() => setShowQuiz(true)}
                                    className="mt-4 px-6 py-3 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 transition-colors"
                                >
                                    🔹 Play Quiz
                                </button>
                            </p>
                        </motion.div>
                    )}
                </motion.div>
            ) : (
                // Quiz Component with Back Button
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                >
                    <QuizGame />
                    <div className="text-center mt-5">
                        <button
                            onClick={() => setShowQuiz(false)}
                            className="mt-4 px-6 py-3 bg-red-500 text-white font-bold rounded-md hover:bg-red-600 transition-colors"
                        >
                            🔙 Back to Learning Options
                        </button>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default LearningOptions;
