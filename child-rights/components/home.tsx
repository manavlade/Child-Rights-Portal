// import React from 'react';

// export default function HomePage() {
//   return (
//     <div className="max-w-screen-xl mx-auto px-4 py-8 font-sans">
//       <header className="flex justify-between items-center py-5 border-b border-gray-300">
//         <div className="text-2xl font-bold">Child Rights</div>
//         <nav className="flex space-x-4">
//           <a href="/" className="text-gray-700 hover:text-gray-900">Home Page</a>
//           <a href="/about" className="text-gray-700 hover:text-gray-900">About Us</a>
//           <a href="/contact" className="text-gray-700 hover:text-gray-900">Contact Us</a>
//           <div className="relative group">
//             <span className="text-gray-700 hover:text-gray-900 cursor-pointer">Games</span>
//             <div className="absolute hidden group-hover:flex flex-col bg-white border border-gray-300 p-2 mt-2 space-y-1">
//               <a href="/resource1" className="text-gray-700 hover:text-gray-900">Resource 1</a>
//               <a href="/resource2" className="text-gray-700 hover:text-gray-900">Resource 2</a>
//             </div>
//           </div>
//         </nav>
//         <div className="space-x-2">
//           <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">Join</button>
//           <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Start</button>
//         </div>
//       </header>

//       <main className="text-center py-16">
//         <h1 className="text-4xl font-bold">Empowering Children Through Knowledge of Their Rights</h1>
//         <p className="mt-4 text-gray-600">
//           Welcome to our vibrant community dedicated to educating children about their rights.
//           Through engaging games, captivating stories, and informative videos, we empower young
//           minds to understand and advocate for their rights.
//         </p>
//         <div className="mt-8 flex justify-center space-x-4">
//           <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">Learn More</button>
//           <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">Sign Up</button>
//         </div>
//         <div className="mt-10  h-72 flex justify-center items-center">
//           <img src="https://cdn.slidesharecdn.com/ss_thumbnails/childrightspresenation-230825155336-f5e31036-thumbnail.jpg?width=640&height=640&fit=bounds" alt="Placeholder" className="max-w-full h-auto" />
//         </div>
//       </main>
//     </div>
//   );
// }

"use client"
import React from 'react';

export default function HomePage() {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 font-sans">
      <header className="flex justify-between items-center p-5 bg-white shadow-md">
        <div className="text-4xl font-extrabold text-pink-600">🌟 Child Rights 🌟</div>
        <nav className="flex space-x-4">
          <a href="/" className="text-lg font-bold text-blue-600 hover:text-blue-800">Home</a>
          <a href="/about" className="text-lg font-bold text-blue-600 hover:text-blue-800">About Us</a>
          <a href="/contact" className="text-lg font-bold text-blue-600 hover:text-blue-800">Contact Us</a>
          <div className="relative group">
            <span className="text-lg font-bold text-blue-600 hover:text-blue-800 cursor-pointer">Games</span>
            <div className="absolute hidden group-hover:flex flex-col bg-white border border-gray-300 p-2 mt-2 space-y-1">
              <a href="/resource1" className="text-blue-600 hover:text-blue-800">Fun Quiz</a>
              <a href="/resource2" className="text-blue-600 hover:text-blue-800">Interactive Stories</a>
            </div>
          </div>
        </nav>
        <div className="space-x-2">
          <button className="px-4 py-2 bg-yellow-300 text-blue-700 rounded-md hover:bg-yellow-400 font-bold">Join</button>
          <button className="px-4 py-2 bg-green-400 text-white rounded-md hover:bg-green-500 font-bold">Start Now!</button>
        </div>
      </header>

      <main className="flex flex-col justify-center items-center pt-28 h-full text-center">
        <h1 className="text-5xl font-bold text-purple-700">✨ Empowering Children with Fun! ✨</h1>
        <p className="mt-4 text-gray-700 font-medium max-w-lg">
          Welcome to a magical world where learning about your rights is exciting! Play games, watch videos, and read cool stories to become a super child rights hero!
        </p>
        <div className="mt-8 flex space-x-4">
          <button className="px-6 py-3 bg-yellow-300 text-gray-700 rounded-md hover:bg-yellow-400 font-bold">Learn More</button>
          <button className="px-6 py-3 bg-green-400 text-white rounded-md hover:bg-green-500 font-bold">Sign Up</button>
        </div>
        <div className="mt-10 w-full flex justify-center items-center">
          <img src="https://cdn.slidesharecdn.com/ss_thumbnails/childrightspresenation-230825155336-f5e31036-thumbnail.jpg?width=640&height=640&fit=bounds" alt="Placeholder" className="w-2/3 h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
        </div>
      </main>
    </div>
    
  );
}
