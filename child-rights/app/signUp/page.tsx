// // components/SignUp.tsx
// import { Button } from '@/components/ui/button';
// import { FC } from 'react';// Example from Shadcn UI

// const SignUp: FC = () => {
//     return (
//         <div className="min-h-screen flex justify-center items-center bg-neutral-900">
//             <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden flex max-w-4xl w-full">

//                 {/* Left Image Section */}
//                 <div className="hidden md:flex w-1/2 justify-center items-center bg-gray-700 p-8">
//                     <img
//                         src="/images/signup-image.png" // Replace this with your image URL
//                         alt="Sign Up Illustration"
//                         className="w-full h-auto object-cover"
//                     />
//                 </div>

//                 {/* Form Section */}
//                 <div className="w-full md:w-1/2 p-8 bg-gray-50 text-gray-800">
//                     <h2 className="text-3xl font-semibold text-center mb-6">Create Account</h2>

//                     <form className="space-y-4">
//                         {/* Name Field */}
//                         <div>
//                             <label className="block text-sm font-medium text-gray-600 mb-1">Name</label>
//                             <input
//                                 type="text"
//                                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                 placeholder="Your name"
//                             />
//                         </div>

//                         {/* Mobile Number Field */}
//                         <div>
//                             <label className="block text-sm font-medium text-gray-600 mb-1">Mobile Number</label>
//                             <input
//                                 type="text"
//                                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                 placeholder="Your mobile number"
//                             />
//                         </div>

//                         {/* Email Field */}
//                         <div>
//                             <label className="block text-sm font-medium text-gray-600 mb-1">Email ID</label>
//                             <input
//                                 type="email"
//                                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                 placeholder="Your email"
//                             />
//                         </div>

//                         {/* Create Account Button */}
//                         <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 rounded-md">Create Account</Button>
//                     </form>

//                     {/* Sign In / Google Sign-Up */}
//                     <div className="text-center mt-4">
//                         <p className="text-gray-600">
//                             Already have an account?{' '}
//                             <a href="/signin" className="text-blue-500 hover:text-blue-600">Sign In</a>
//                         </p>
//                         <p className="text-gray-600 my-4">OR</p>
//                         <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 rounded-md flex items-center justify-center">
//                             <img src="/google-icon.png" alt="Google" className="w-5 h-5 mr-2" /> Sign Up with Google
//                         </Button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SignUp;


import React from 'react';
import { Input } from '@/components/ui/input'; // Shadcn Input Component
import { Button } from '@/components/ui/button'; // Shadcn Button Component
import { FaGoogle } from 'react-icons/fa'; // Google Icon
import su from "@/Assests/sigup.png";
import Image from 'next/image';

const SignUp = () => {
    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            {/* Left Section */}
            <div className="hidden md:flex w-full md:w-1/2 bg-blue-600 items-center justify-center">
                <Image
                    src={su}
                    alt='signup image'
                    height="624"
                    className="hidden md:block"
                />
            </div>

            {/* Right Section */}
            <div className="w-full md:w-1/2 bg-gray-100 flex flex-col justify-center px-6 md:px-16 py-8 md:py-0">
                <div className="max-w-md mx-auto">
                    {/* Heading */}
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Create Your Account</h2>

                    {/* Google Sign Up */}
                    <Button className="w-full flex items-center justify-center bg-white text-gray-600 hover:bg-gray-300 mb-4">
                        <FaGoogle className="mr-2 wh" />
                        Sign Up with Google
                    </Button>

                    {/* Divider */}
                    <div className="flex items-center justify-center my-4">
                        <span className="block w-1/3 border-t border-gray-300"></span>
                        <span className="mx-4 text-gray-600">Or</span>
                        <span className="block w-1/3 border-t border-gray-300"></span>
                    </div>

                    {/* Form */}
                    <form>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 mb-2">
                                Name
                            </label>
                            <Input type="text" id="name" placeholder="Enter Your Name" className="w-full" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 mb-2">
                                Email id
                            </label>
                            <Input type="email" id="email" placeholder="Enter Email address" className="w-full" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <Input
                                    type="password"
                                    id="password"
                                    placeholder="Create Password"
                                    className="w-full"
                                />
                                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
                                    👁️ {/* You can replace this with an actual eye icon */}
                                </span>
                            </div>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="confirm-password" className="block text-gray-700 mb-2">
                                Confirm Password
                            </label>
                            <div className="relative">
                                <Input
                                    type="password"
                                    id="confirm-password"
                                    placeholder="Confirm password"
                                    className="w-full"
                                />
                                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
                                    👁️ {/* You can replace this with an actual eye icon */}
                                </span>
                            </div>
                        </div>

                        <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">Create Account</Button>
                    </form>

                    {/* Footer */}
                    <p className="text-center text-gray-600 mt-4">
                        Already have an account?{' '}
                        <a href="/login" className="text-blue-600 hover:underline">
                            Sign In
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
