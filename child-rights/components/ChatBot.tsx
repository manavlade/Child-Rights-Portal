"use client"
import React, { useState, useEffect } from "react";
import * as GoogleGenerativeAI from "@google/generative-ai";
import { FaRobot } from 'react-icons/fa';

interface Message {
    text: string;
    user: boolean;
}

const GeminiChat: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [userInput, setUserInput] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const API_KEY: string = "AIzaSyDZJoW_njjcjEfkHtaPWF79QkI9YWscwXs";


    useEffect(() => {
        const startChat = async (): Promise<void> => {
            const genAI = new GoogleGenerativeAI.GoogleGenerativeAI(API_KEY);
            const model = genAI.getGenerativeModel({ model: "gemini-pro" });
            const initialPrompt: string = `You are an AI chatbot assistant for a website designed to teach children about their rights through games, videos, and stories. Your role is to answer questions related to children's rights, help navigate the website, and provide support on activities. The app has the following main features and pages:
          - Home page ("/")
          - Games ("/games")
          - Videos ("/videos")
          - Stories ("/stories")
          - Quiz ("/quiz")
          - Rights information ("/rights")
          - Settings ("/settings")
          - Contact ("/contact")

          Your responses should be child-friendly, clear, and encouraging. When responding, use ** to denote titles or important sections. For your first response, simply reply with "Hello! How can I help you learn about your rights today?"`;
            const result = await model.generateContent(initialPrompt);
            const response = result.response;
            const text = response.text();
            setMessages([
                {
                    text,
                    user: false,
                },
            ]);
        };
        startChat();
    }, []);

    const sendMessage = async (): Promise<void> => {
        setLoading(true);
        const userMessage: Message = { text: userInput, user: true };
        setMessages([...messages, userMessage]);

        const genAI = new GoogleGenerativeAI.GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const contextPrompt: string = `You are an AI assistant for a website that teaches children about their rights through interactive content. The user's message is: "${userInput}". Please respond in a friendly, encouraging tone, keeping in mind that the website is designed for children aged 5-16. Use ** to denote titles or important sections in your response. Here's an example of how you should format your response:

**The Right to Education**
Every child has the right to learn and go to school. On our website, you can play games or watch videos to understand more about your rights!

**Activities to Try:**
* **Quiz:** Test your knowledge about children's rights and earn fun badges.
* **Games:** Play interactive games to learn more about the right to safety and education.
* **Stories:** Read or watch stories of children standing up for their rights!

Remember, it's important to know your rights and share them with others. Let me know if you'd like to explore more!`;

        const result = await model.generateContent(contextPrompt);
        const response = result.response;
        const text = response.text();
        setMessages([...messages, userMessage, { text, user: false }]);
        setLoading(false);
        setUserInput("");
    };

    const toggleChat = (): void => {
        setIsOpen(!isOpen);
    };

    const renderMessage = (item: Message, index: number): JSX.Element => (
        <div key={index} className={`mb-2 ${item.user ? 'text-right' : 'text-left'}`}>
            <p className={`inline-block p-2 rounded-lg ${item.user ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
                {item.text.split('**').map((part, i) =>
                    i % 2 === 0 ? part : <strong key={i}>{part}</strong>
                )}
            </p>
        </div>
    );

    return (
        <>
            <button
                className="fixed bottom-4 right-4 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-colors duration-300 flex items-center justify-center text-xl"
                onClick={toggleChat}
                style={{ width: '60px', height: '60px' }}
            >
                <FaRobot className="mr-2 text-2xl" />
            </button>
            {isOpen && (
                <div className="fixed bottom-20 right-4 w-80 bg-white rounded-lg shadow-xl overflow-hidden">
                    <div className="bg-green-600 text-white p-4 flex justify-between items-center">
                        <h3 className="font-bold">Child Right's Assistant</h3>
                        <button
                            onClick={toggleChat}
                            className="text-white hover:text-gray-200 transition-colors duration-300"
                        >
                            Close
                        </button>
                    </div>
                    <div className="h-96 overflow-y-auto p-4">
                        {messages.map(renderMessage)}
                    </div>
                    <div className="border-t p-4 flex">
                        <input
                            type="text"
                            placeholder="Ask about farm equipment..."
                            value={userInput}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserInput(e.target.value)}
                            onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && sendMessage()}
                            className="flex-grow mr-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <button
                            onClick={sendMessage}
                            disabled={loading}
                            className={`px-4 py-2 rounded-lg ${loading ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'} text-white transition-colors duration-300`}
                        >
                            {loading ? 'Sending...' : 'Send'}
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default GeminiChat;