// // components/SignIn.tsx
// import { FC } from 'react';
// import { Button } from '@/components/ui/button'; // Example from Shadcn UI

// const SignIn: FC = () => {
//     return (
//         <div className="min-h-screen flex justify-center items-center bg-neutral-900">
//             <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden flex max-w-4xl w-full">

//                 {/* Left Image Section */}
//                 <div className="hidden md:flex w-1/2 justify-center items-center bg-gray-700 p-8">
//                     <img
//                         src="/images/signin-image.png" // Replace this with your image URL
//                         alt="Sign In Illustration"
//                         className="w-full h-auto object-cover"
//                     />
//                 </div>

//                 {/* Form Section */}
//                 <div className="w-full md:w-1/2 p-8 bg-gray-50 text-gray-800">
//                     <h2 className="text-3xl font-semibold text-center mb-6">Sign In</h2>

//                     <form className="space-y-4">
//                         {/* Username Field */}
//                         <div>
//                             <label className="block text-sm font-medium text-gray-600 mb-1">Username</label>
//                             <input
//                                 type="text"
//                                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                 placeholder="Your username"
//                             />
//                         </div>

//                         {/* Password Field */}
//                         <div>
//                             <label className="block text-sm font-medium text-gray-600 mb-1">Password</label>
//                             <input
//                                 type="password"
//                                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                 placeholder="Your password"
//                             />
//                         </div>

//                         {/* Sign In Button */}
//                         <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 rounded-md">Sign In</Button>
//                     </form>

//                     {/* Forgot Password / Google Sign-In */}
//                     <div className="text-center mt-4">
//                         <p className="text-gray-600">
//                             <a href="/forgot-password" className="text-blue-500 hover:text-blue-600">Forgot Password?</a>
//                         </p>
//                         <p className="text-gray-600 my-4">OR</p>
//                         <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 rounded-md flex items-center justify-center">
//                             <img src="/google-icon.png" alt="Google" className="w-5 h-5 mr-2" /> Sign In with Google
//                         </Button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SignIn;

"use client"
import React from 'react';
import { Input } from '@/components/ui/input'; // Shadcn Input component
import { Button } from '@/components/ui/button'; // Shadcn Button component
import { FaGoogle } from 'react-icons/fa'; // Google Icon
import Image from 'next/image';
import si from "@/Assests/sigup.png";
import {signWithGoogle} from "@/firebaseConfig"

const SignIn = () => {
    const handleGoogleSignIn = async () => {
        try {
            const user = await signWithGoogle();
            console.log("Logged in user:", user);
            // Handle the user data or redirect after login
        } catch (error) {
            console.error("Google Sign-In error:", error);
        }
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            {/* Left Section */}
            <div className="w-full md:w-1/2 bg-blue-600 flex items-center justify-center hidden md:flex">
                {/* Image is hidden on small mobile screens (below md) */}
                <Image
                    src={si}
                    alt="signin"
                    height={624}
                    className="hidden md:block"
                    priority
                />
            </div>

            {/* Right Section */}
            <div className="w-full md:w-1/2 bg-gray-50 flex flex-col justify-center px-6 md:px-16 py-8 md:py-0">
                <div className="max-w-md mx-auto">
                    {/* Heading */}
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Log in to your account</h2>
                    <p className="text-gray-500 mb-6">Welcome back! Select method to log in:</p>

                    {/* Google Sign In */}
                    <Button
                        className="w-full flex items-center justify-center bg-white text-gray-600 hover:bg-gray-300 mb-4"
                        onClick={handleGoogleSignIn} // Handle Google Sign-In here
                    >
                        <FaGoogle className="mr-2" />
                        Sign In with Google
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
                            <a href="#" className="text-sm text-blue-600 hover:underline mt-2 inline-block">
                                Forgot password
                            </a>
                        </div>

                        <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">Log In</Button>
                    </form>

                    {/* Footer */}
                    <p className="text-center text-gray-600 mt-4">
                        Don’t have an account?{' '}
                        <a href="/signup" className="text-blue-600 hover:underline">
                            SignUp
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;

