// "use client";
// import React, { useState, useEffect } from "react";
// import Typed from 'typed.js';
// import { Button } from "@/components/ui/button"; // Shadcn Button component
// import Image from "next/image";
// import child from "@/Assests/child.webp";
// import Navbar from "./Navbar";

// // interface DressPreviewProps {
// //     topSelection: string;
// //     pantSelection: string;
// //     watchSelection: string;
// // }

// const DressPreview: React.FC = () => {
//     const [displayText, setDisplayText] = useState<string>('Hey hiii!!!'); // Initial text
//     const [isNextClicked, setIsNextClicked] = useState<boolean>(false); // Track if "Next" is clicked
//     const [showOptions, setShowOptions] = useState<boolean>(false); // Track if Yes/No options should be shown

//     useEffect(() => {
//         const options = {
//             strings: [displayText], // Text to be typed
//             typeSpeed: 50,          // Typing speed
//             startDelay: 2000,       // Delay before typing starts
//             showCursor: false       // Hides the blinking cursor
//         };

//         const typed = new Typed('#typedText', options);

//         return () => {
//             typed.destroy(); // Cleanup typed.js instance on unmount
//         };
//     }, [displayText]); // Re-run effect when `displayText` changes

//     const handleNextClick = () => {
//         setDisplayText('Would you like to share this dress with someone?');
//         setIsNextClicked(true); // Next button clicked
//         setShowOptions(true); // Show Yes/No options after clicking Next
//     };

//     const handleYesClick = () => {
//         setDisplayText("Good!"); // Message for Yes selection
//         setShowOptions(false); // Hide Yes/No options after selection
//     };

//     const handleNoClick = () => {
//         setDisplayText("Similarly, if you can’t share your favourite dress, do not share your body with anyone as well."); // Message for No selection
//         setShowOptions(false); // Hide Yes/No options after selection
//     };

//     return (
//         <>
//         <Navbar/>
//             <div className="flex min-h-screen">
//                 {/* Sidebar (optional) */}
//                 <div className="w-1/5 p-8">
//                     <h2 className="text-gray-700 font-medium">Dress Preview</h2>
//                 </div>

//                 {/* Main Content */}
//                 <div className="w-3/4 p-8">
//                     <div className="text-center mt-8">
//                         <h1 className="text-2xl font-bold">Touch Education</h1>
//                         <p className="text-lg mt-4">
//                             Here’s the dress as per your selections!
//                         </p>

//                         {/* Display the dress selections */}
                      

//                         {/* Character and Speech Bubbles */}
//                         <div className="flex justify-center items-center mt-12 relative">
//                             {/* Boy Image */}
//                             <div className="relative">
//                                 <Image src={child} alt="Character" height={240} />
//                             </div>

//                             {/* Speech bubble with text and options */}
//                             <div className="absolute top-0 ml-20 left-36 bg-white border border-gray-400 rounded-lg p-2 shadow-md">
//                                 <p id="typedText"></p>

//                                 {!isNextClicked && (
//                                     <Button className="bg-blue-200 mt-4" onClick={handleNextClick}>
//                                         Next
//                                     </Button>
//                                 )}

//                                 {showOptions && (
//                                     <div className="mt-4">
//                                         <Button className="bg-green-400 mr-4" onClick={handleYesClick}>
//                                             Yes
//                                         </Button>
//                                         <Button className="bg-red-400" onClick={handleNoClick}>
//                                             No
//                                         </Button>
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default DressPreview;

"use client";

import Navbar from "./Navbar";

const DressPreview = () => {
    return (
        <div className="w-full h-full">
            <Navbar />
            {/* Rest of your DressPreview content */}
        </div>
    );
};

export default DressPreview;
