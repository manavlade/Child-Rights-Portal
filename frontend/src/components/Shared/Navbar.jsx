import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Import icons for mobile menu
import { Separator } from "../ui/separator";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>

            <header className="bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 shadow-md p-5">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <div className="text-3xl font-extrabold text-pink-600">
                        🌟 Child Rights 🌟
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-6">
                        <a href="/" className="text-lg font-bold text-blue-600 hover:text-blue-800">
                            Home
                        </a>
                        <a href="/about" className="text-lg font-bold text-blue-600 hover:text-blue-800">
                            About Us
                        </a>
                        <a href="/contact" className="text-lg font-bold text-blue-600 hover:text-blue-800">
                            Contact Us
                        </a>
                        <a href="/games" className="text-lg font-bold text-blue-600 hover:text-blue-800">
                            Games
                        </a>
                    </nav>

                    {/* Buttons */}
                    <div className="hidden md:flex space-x-2">
                        <button className="px-4 py-2 bg-yellow-300 text-blue-700 rounded-md hover:bg-yellow-400 font-bold">
                            Sign In
                        </button>
                        <button className="px-4 py-2 bg-green-400 text-white rounded-md hover:bg-green-500 font-bold">
                            Start Now!
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-blue-600">
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden flex flex-col items-center bg-white shadow-lg rounded-lg mt-2 p-4 space-y-4">
                        <a href="/" className="text-lg font-bold text-blue-600 hover:text-blue-800">
                            Home
                        </a>
                        <a href="/about" className="text-lg font-bold text-blue-600 hover:text-blue-800">
                            About Us
                        </a>
                        <a href="/contact" className="text-lg font-bold text-blue-600 hover:text-blue-800">
                            Contact Us
                        </a>
                        <a href="/games" className="text-lg font-bold text-blue-600 hover:text-blue-800">
                            Games
                        </a>
                        <button className="px-4 py-2 bg-yellow-300 text-blue-700 rounded-md hover:bg-yellow-400 font-bold w-full">
                            Sign In
                        </button>
                        <button className="px-4 py-2 bg-green-400 text-white rounded-md hover:bg-green-500 font-bold w-full">
                            Start Now!
                        </button>
                    </div>
                )}
            </header>
            <Separator />
        </div>
    );
};

export default Navbar;
