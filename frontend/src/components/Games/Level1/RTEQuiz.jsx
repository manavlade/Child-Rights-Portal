import React, { useState } from "react";

const QuizGame = () => {
    // Quiz data (questions and options)
    const quizData = [
        {
            question: "What does the Right to Education mean?",
            options: [
                "Every child has the right to go to school.",
                "Only boys can go to school.",
                "Education is optional for children.",
                "Only teachers have the right to learn."
            ],
            correctAnswer: 0, // Index of the correct answer
        },
        {
            question: "Which age group is covered under the Right to Education?",
            options: [
                "0-5 years",
                "6-14 years",
                "15-18 years",
                "All age groups"
            ],
            correctAnswer: 1,
        },
        {
            question: "What is the benefit of the Right to Education?",
            options: [
                "It helps children learn and grow.",
                "It ensures only adults can go to school.",
                "It makes playing games illegal.",
                "It allows children to skip school."
            ],
            correctAnswer: 0,
        },
    ];

    // State variables
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [isQuizCompleted, setIsQuizCompleted] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [showFeedback, setShowFeedback] = useState(false);

    const currentQuestion = quizData[currentQuestionIndex];

    // Handle option selection
    const handleOptionSelect = (index) => {
        setSelectedOption(index);
    };

    // Handle submission of an answer
    const handleSubmit = () => {
        if (selectedOption === null) {
            alert("Please select an option before submitting!");
            return;
        }

        // Check if the selected option is correct
        if (selectedOption === currentQuestion.correctAnswer) {
            setScore((prevScore) => prevScore + 1); // Increment score
        }

        setShowFeedback(true); // Show feedback
    };

    // Move to the next question
    const handleNext = () => {
        setShowFeedback(false); // Hide feedback
        setSelectedOption(null); // Reset selected option

        if (currentQuestionIndex < quizData.length - 1) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        } else {
            setIsQuizCompleted(true); // Mark the quiz as completed
        }
    };
    return (
        <div className=" bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200" >
            <div className=" flex justify-center items-center">
                <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-3xl">
                    <h1 className="text-3xl font-extrabold text-center text-pink-600 mb-8">
                        🌟 Right to Education Quiz 🌟
                    </h1>

                    {/* Quiz Completed */}
                    {isQuizCompleted ? (
                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-green-600 mb-4">
                                Quiz Completed!
                            </h2>
                            <p className="text-lg text-gray-700">
                                Your Score: <span className="font-bold">{score}</span> /{" "}
                                {quizData.length}
                            </p>
                            <button
                                onClick={() => window.location.reload()}
                                className="mt-6 px-6 py-3 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition-colors"
                            >
                                Play Again
                            </button>
                        </div>
                    ) : (
                        <div>
                            {/* Question */}
                            <p className="text-lg font-bold text-gray-800 mb-4">
                                Question {currentQuestionIndex + 1}: {currentQuestion.question}
                            </p>

                            {/* Options */}
                            <div className="space-y-4">
                                {currentQuestion.options.map((option, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleOptionSelect(index)}
                                        className={`w-full text-left px-4 py-2 rounded-md border-2 ${selectedOption === index
                                            ? "bg-blue-500 text-white"
                                            : "border-blue-400 text-gray-700 hover:bg-blue-100"
                                            }`}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>

                            {/* Submit and Feedback */}
                            {showFeedback ? (
                                <div className="mt-6">
                                    {selectedOption === currentQuestion.correctAnswer ? (
                                        <p className="text-lg text-green-600 font-bold">
                                            🎉 Correct! Well done!
                                        </p>
                                    ) : (
                                        <p className="text-lg text-red-600 font-bold">
                                            ❌ Incorrect. The correct answer is:{" "}
                                            {
                                                currentQuestion.options[currentQuestion.correctAnswer]
                                            }
                                        </p>
                                    )}
                                    <button
                                        onClick={handleNext}
                                        className="mt-4 px-6 py-3 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 transition-colors"
                                    >
                                        Next Question
                                    </button>
                                </div>
                            ) : (
                                <button
                                    onClick={handleSubmit}
                                    className="mt-6 px-6 py-3 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 transition-colors"
                                >
                                    Submit Answer
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default QuizGame;
